import { Component, OnInit } from '@angular/core';
import { answersModel } from '../datamodel/answersModel';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  answer: answersModel = {
    button: '',
    checkbox: '',
    radio: '',
    text: 'myText'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
