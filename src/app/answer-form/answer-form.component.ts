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
  submitted: boolean = false;
  constructor(
    private socketService: SocketService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submittedAnswerForm = {...this.answerForm};
    this.submitted = true;
    this.socketService.callSocket('emitAnswered', {answer: this.submittedAnswerForm.content});
  }

  /**
   * @description Manage checkbox value
   */
  onChange($event): void {
    if ($event.target !== $event.currentTarget) {return;} // don't know how to stop propagation event on children
    this.answerForm.content = this.answerForm.content || []; // initialize answer = []
    $event.target.children[0].checked = !$event.target.children[0].checked;

    const {target:{children:[{checked, value}]}} = $event;
    if (checked) {
      this.answerForm.content.push(value);
    } else {
      const index = this.answerForm.content.findIndex(option => option === value);
      this.answerForm.content.splice(index, 1);
    }
  }

  onClickCheckbox($event) {
    $event.target.children[0].checked = !$event.target.children[0].checked;
  }

  triggerOption(option) {
    this.answerForm.content = option;
  }
}
