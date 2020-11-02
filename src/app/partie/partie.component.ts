import { Component, OnInit } from '@angular/core';

import { partieModel } from '../datamodel/partieModel';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.scss']
})
export class PartieComponent implements OnInit {

  partie: partieModel = { // to get from a service
    manches: [
      {
        question: {id: 1, type: 'text', content: 'My text question ?'},
        answerForm: {id: 1, type: 'checkbox', content: 'questionCheckbox', options: ['checkbox10', 'checkbox20', 'checkbox30'] },
        answer: {idQuestion: 1, content: 'my answer'}
      },
      {
        question: {id: 2, type: 'image', content: 'Guess the image', source: 'images/image.jpg'},
        answerForm: {id: 2, type: 'text', content: 'Enter an answer'},
        answer: {idQuestion: 2, content: 'My second answer'}
      },
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
