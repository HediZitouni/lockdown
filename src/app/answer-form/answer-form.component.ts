import { Component, Input, OnInit } from '@angular/core';
import { answerFormModel } from '../datamodel/answerFormModel';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.scss']
})
export class AnswerFormComponent implements OnInit {

  @Input() answerForm: answerFormModel;
  submittedAnswerForm: answerFormModel;
  constructor(
    private socketService: SocketService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submittedAnswerForm = {...this.answerForm};
    this.socketService.callSocket('emitAnswered', {answer: this.submittedAnswerForm.content});
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
