import { Component, OnInit } from '@angular/core';
import { answerFormModel } from '../datamodel/answerFormModel';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.scss']
})
export class AnswerFormComponent implements OnInit {

  originalAnswer: answerFormModel[] = [ // has to come from manche component, one by one
    { type: 'text', content: 'Enter an answer'},
    { type: 'radio', content: 'questionRadio', options: ['radio1', 'radio2', 'radio3'] },
    { type: 'checkbox', content: 'questionCheckbox', options: ['checkbox1', 'checkbox2', 'checkbox3'] },
    { type: 'button', content: 'Click me'}
  ];

  answerForm: answerFormModel = JSON.parse(JSON.stringify(this.originalAnswer[0]));
  submittedAnswerForm: answerFormModel;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submittedAnswerForm = {...this.answerForm};
  }
}
