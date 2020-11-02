import { Component, Input, OnInit } from '@angular/core';
import { questionModel } from '../datamodel/questionModel'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  assetFolder: string = '../../assets/'; // has to change for back URL and in a config file
  questions: questionModel[] = [ // To get multiple type of questions has to be remove
    {id: 1, type: 'text', content: 'My text question ?'},
    {id: 2, type: 'button', content: 'Click FAST'},
    {id: 3, type: 'sound', content: 'Guess the music', source: 'sounds/sound.mp3'},
    {id: 4, type: 'image', content: 'Guess the image', source: 'images/image.jpg'}
  ];
  @Input() question: questionModel;
  constructor() { }

  ngOnInit(): void {
  }

}
