import { Component, OnInit } from '@angular/core';

import { questionModel } from '../datamodel/questionModel';
import { answerModel } from '../datamodel/answerModel';

@Component({
  selector: 'app-manche',
  templateUrl: './manche.component.html',
  styleUrls: ['./manche.component.scss']
})
export class MancheComponent implements OnInit {
  questionModel: questionModel = {id: 1, type: 'text', content: 'My text question ?'};
  answerModel: answerModel = { content: 'My answer of the question !' };
  constructor() { }

  ngOnInit(): void {
  }

}
