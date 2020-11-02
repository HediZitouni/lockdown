import { Component, OnInit } from '@angular/core';
import { answerModel } from '../datamodel/answerModel';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  answer: answerModel = { // has to come from manche
    idQuestion: 1,
    content: 'my answer'
  }
;
  constructor() { }

  ngOnInit(): void {
  }

}
