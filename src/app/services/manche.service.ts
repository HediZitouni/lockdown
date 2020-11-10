import { Injectable } from '@angular/core';
import { mancheModel } from '../datamodel/mancheModel';

@Injectable({
  providedIn: 'root'
})
export class MancheService {
  manche: mancheModel;
  constructor(
  ) { }

  getManches() {
    return this.manche;
  }
  
  setManche(newManche) {
    this.manche = newManche;
  }

  fromBackToManche(roundData) {
      const question = {
        id: roundData.round._id,
        type: roundData.round.question.type,
        content: roundData.round.question.content,
        source: roundData.round.question.source
      };
      const answerForm = {
        type: roundData.round.answer.type,
        options: roundData.round.answer.options
      };
      return {
        question: question,
        answerForm: answerForm
      };
  }
}
