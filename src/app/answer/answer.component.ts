import { Component, Input, OnInit } from '@angular/core';
import { mancheModel } from '../datamodel/mancheModel';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  @Input() manche: mancheModel;
  answers: string[];
  constructor() { }

  ngOnInit(): void {
    switch (this.manche.answerForm.type) {
      case 'plaintext':
        this.answers = this.manche.answer.answers.answers;
        break;
      case 'radio':
        this.answers = [this.manche.answerForm.options[this.manche.answer.answers.answers]];
        break;
      case 'checkbox':
        this.answers = this.manche.answer.answers.answers.map(answer => this.manche.answerForm.options[answer]);
        break;
    }
  }

}
