import { Component, OnInit } from '@angular/core';
import { questionModel } from '../datamodel/questionModel';
import { SuggestionService } from '../services/suggestion.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {
  question: questionModel;
  answer: any;
  currentAnswer: string;
  constructor(
    private suggestionService: SuggestionService
  ) { }

  ngOnInit(): void {
    this.initQuestionAnswer();
  }

  initQuestionAnswer() {
    this.question = {
      id: 0,
      content: '',
      type:'text',
      source:''
    };
    this.answer = {
      type:'plaintext',
      options:[],
      answers:[],
      explanation: ''
    }
  }

  onClick() {
    if (this.currentAnswer) {
      this.answer.options.push(this.currentAnswer);
      this.currentAnswer = '';
    } else {
      alert('You wrote an empty option');
    }
  }

  onClickRemove(optionToRemove) {
    const indexInOptions = this.answer.options.findIndex(option => option === optionToRemove);
    this.answer.options.splice(indexInOptions, 1);
    if (this.answer.type === 'checkbox') {
      this.answer.answers = this.answer.answers.filter(index => index !== indexInOptions);
    } else if (this.answer.type === 'radio') {
      this.answer.answers = this.answer.answers !== indexInOptions ? this.answer.answers : null;
    } else {
      this.answer.answers = this.answer.answers.filter(arrayAnswer => arrayAnswer.findIndex(option => option === optionToRemove) === -1);
    }
  }

  onChangeAnswerType() {
    this.answer.options = [];
    this.answer.answers = [];
    this.answer.explanation = '';
  }

  onChangeQuestionType() {
    this.clearAnswer();
    this.question.source = '';
  }

  onClickValidate(optionToValidate) {
    if (this.answer.type === 'checkbox') {
      this.answer.answers.push(this.answer.options.findIndex(option => option === optionToValidate));
    } else if (this.answer.type === 'radio') {
      this.answer.answers = this.answer.options.findIndex(option => option === optionToValidate);
    } else {
      this.answer.answers = [optionToValidate.split(',')];
    }
  }

  isOptionValidated(optionToCheck): boolean {
    const indexInOptions = this.answer.options.findIndex(option => option === optionToCheck);
    
    if (this.answer.type === 'checkbox') {
      return this.answer.answers.filter(index => index === indexInOptions).length !== 0;
    } else if (this.answer.type === 'radio') {
      return this.answer.answers === indexInOptions;
    } else {
      return this.answer.answers.filter(arrayAnswer => arrayAnswer.findIndex(option => option === optionToCheck) !== -1).length !== 0;
    }
  }

  onSubmit() {
    if (this.answer.options.length > 0) {
      if (this.answer.type !== 'checkbox' && this.answer.type !== 'radio') {
        this.answer.options = this.answer.options.map(option => option.split(','));
        this.answer.answers = this.answer.options;
      } else {
        if (this.answer.answers.length === 0 ) {
          if (this.answer.type === 'checkbox') {
            this.answer.answers = [0];
          } else {
            this.answer.answers = 0;
          }
        }
      }

      this.suggestionService.setSuggestion({
        question: this.question,
        answer: this.answer
      });

      this.initQuestionAnswer();

    } else {
      alert('Il vous manque au moins une réponse');
    }
  }

  clearAnswer() {
    this.answer = {
      type:'plaintext',
      options:[],
      answers:[],
      explanation: ''
    }
  }

  triggerOption($event) {
    this.onChangeAnswerType();
    const {name, value} = $event.target.children[0];

    switch (name) {
      case 'questionType':
        this.question.type = value;
        break;
      case 'answerType':
        this.answer.type = value;
        break;
      default:
        break;
    }
  }
}
