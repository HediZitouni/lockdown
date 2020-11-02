import { Component, Input, OnInit } from '@angular/core';
import { answerFormModel } from '../datamodel/answerFormModel';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.scss']
})
export class AnswerFormComponent implements OnInit {

  originalAnswer: answerFormModel[] = [ // has to come from manche component, one by one
    { id:1, type: 'text', content: 'Enter an answer'},
    { id:2, type: 'radio', content: 'questionRadio', options: ['radio1', 'radio2', 'radio3'] },
    { id:3, type: 'checkbox', content: 'questionCheckbox', options: ['checkbox1', 'checkbox2', 'checkbox3'] },
    { id:4, type: 'button', content: 'Click me'}
  ];

  @Input() answerForm: answerFormModel;
  submittedAnswerForm: answerFormModel;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submittedAnswerForm = {...this.answerForm};
    alert(this.submittedAnswerForm.answer);
  }


  /**
   * @description Manage checkbox value
   */
  onChange({target:{checked, value}}): void {
    this.answerForm.answer = this.answerForm.answer || []; // initialize answer = []
    if (checked) {
      this.answerForm.answer.push(value);
    } else {
      const index = this.answerForm.answer.findIndex(option => option === value);
      this.answerForm.answer.splice(index, 1);
    }
  }
}
