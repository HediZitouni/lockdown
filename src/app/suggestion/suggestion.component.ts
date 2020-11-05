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
  answers: string[] = [];
  currentAnswer: string;
  constructor(
    private suggestionService: SuggestionService
  ) { }

  ngOnInit(): void {
    this.question = {
      id: 0,
      content: '',
      type:''
    }
  }

  onClick() {
    this.answers.push(this.currentAnswer);
    this.currentAnswer = '';
  }

  onClickRemove(answer) {
    const index = this.answers.findIndex(option => option === answer);
    this.answers.splice(index, 1);
  }

  onSubmit() {
    this.suggestionService.setSuggestion({
      question: this.question,
      answer: this.answers
    });
  }

}
