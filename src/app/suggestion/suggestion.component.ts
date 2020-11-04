import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {
  questionType: string;
  answers: string[] = [];
  currentAnswer: string;
  constructor() { }

  ngOnInit(): void {
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
    console.log(this.questionType,this.answers);
  }

}
