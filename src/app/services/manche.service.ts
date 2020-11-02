import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MancheService {
  //private backUrl = 'http://localhost:3000';
  private mockManches = [{
    question: {id: 1, type: 'text', content: 'My text question ?'},
    answerForm: {id: 1, type: 'checkbox', content: 'questionCheckbox', options: ['checkbox10', 'checkbox20', 'checkbox30'] },
    answer: {idQuestion: 1, content: 'my answer'}
  },
  {
    question: {id: 2, type: 'image', content: 'Guess the image', source: 'images/image.jpg'},
    answerForm: {id: 2, type: 'text', content: 'Enter an answer'},
    answer: {idQuestion: 2, content: 'My second answer'}
  },
  {
    question: {id: 3, type: 'sound', content: 'Guess the music', source: 'sounds/sound.mp3'},
    answerForm: {id: 3, type: 'text', content: 'Enter an answer'},
    answer: {idQuestion: 3, content: 'My third answer'}
  }];
  constructor(
    //private http: HttpClient
  ) { }

  getManches() {
    return this.mockManches;
    //return this.http.get(`${this.backUrl}/manches`);
  }
}
