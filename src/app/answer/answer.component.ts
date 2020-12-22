import { Component, Input, OnInit } from '@angular/core';
import { mancheModel } from '../datamodel/mancheModel';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  @Input() manche: mancheModel;
  answers: any = {};
  constructor() { }

  ngOnInit(): void {
    switch (this.manche.answerForm.type) {
      case 'plaintext':
        this.answers = {answers: [this.manche.answer.answers.answers], explanation: this.manche.answer.answers.explanation};
        break;
      case 'radio':
        this.answers = {answers: [this.manche.answerForm.options[this.manche.answer.answers.answers]], explanation: this.manche.answer.answers.explanation};
        break;
      case 'checkbox':
        this.answers = {answers: this.manche.answer.answers.answers.map(answer => this.manche.answerForm.options[answer]), explanation: this.manche.answer.answers.explanation};
        break;
    }
  }

}
