import { Component, OnInit, Input } from '@angular/core';
import { answerModel } from '../datamodel/answerModel';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  @Input() answer: answerModel;
  constructor() { }

  ngOnInit(): void {
  }

}
