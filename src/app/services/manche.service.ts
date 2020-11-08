import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mancheModel } from '../datamodel/mancheModel';
import { questions } from '../utils/urls';

@Injectable({
  providedIn: 'root'
})
export class MancheService {
  constructor(
    private http: HttpClient
  ) { }

  getManches() {
    return this.http.get(`${questions}`);
  }

  fromBackToManche(mancheUnformated) {
    const manches: mancheModel[] = [];
    mancheUnformated.forEach((manche: any) => {
      const question = {
        id: manche._id,
        type: manche.question.type,
        content: manche.question.content,
        source: manche.question.source
      };
      const answer = {
        idQuestion: manche._id,
        content: manche.answer.answers
      };
      const answerForm = {
        type: manche.answer.type,
        options: manche.answer.options
      };
      manches.push({
        question: question,
        answerForm: answerForm,
        answer: answer
      })
    });
    return manches;
  }
}
