import { Component, Input, OnInit } from '@angular/core';
import { answerFormModel } from '../datamodel/answerFormModel';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.scss']
})
export class AnswerFormComponent implements OnInit {

  @Input() answerForm: answerFormModel;
  submittedAnswerForm: answerFormModel;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submittedAnswerForm = {...this.answerForm};
    alert(this.submittedAnswerForm.content);
  }


  /**
   * @description Manage checkbox value
   */
  onChange({target:{checked, value}}): void {
    this.answerForm.content = this.answerForm.content || []; // initialize answer = []
    if (checked) {
      this.answerForm.content.push(value);
    } else {
      const index = this.answerForm.content.findIndex(option => option === value);
      this.answerForm.content.splice(index, 1);
    }
  }
}
