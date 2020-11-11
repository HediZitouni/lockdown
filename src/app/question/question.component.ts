import { Component, Input, OnInit } from '@angular/core';
import { questionModel } from '../datamodel/questionModel'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  assetFolder: string = '../../assets/'; // has to change for back URL and in a config file
  @Input() question: questionModel;
  constructor() { }

  ngOnInit(): void {
  }

}
