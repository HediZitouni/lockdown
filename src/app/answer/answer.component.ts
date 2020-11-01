import { Component, OnInit } from '@angular/core';
import { answersModel } from '../datamodel/answersModel';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  originalAnswer: answersModel = {
    checkbox: '',
    radio: '',
    text: 'myText '
  }

  answer: answersModel = {...this.originalAnswer};
  submittedAnswer: answersModel;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submittedAnswer = {...this.answer};
    console.log(this.submittedAnswer)
  }

}
