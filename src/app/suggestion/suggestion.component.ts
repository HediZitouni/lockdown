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
    this.question = {
      id: 0,
      content: '',
      type:'text',
      source:''
    };
    this.answer = {
      type:'plaintext',
      options:[],
      answers:[]
    }
  }

  onClick() {
    if (this.currentAnswer) {
      this.answer.options.push(this.currentAnswer);
      this.currentAnswer = '';
    }
  }

  onClickRemove(optionToRemove) {
    const index = this.answer.options.findIndex(option => option === optionToRemove);
    this.answer.options.splice(index, 1);
  }

  onChangeAnswerType() {
    this.answer.options = [];
    this.answer.answers = [];
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
    } else {
      alert('Il vous manque au moins une réponse');
    }
  }

  clearAnswer() {
    this.answer = {
      type:'plaintext',
      options:[],
      answers:[]
    }
  }
}
