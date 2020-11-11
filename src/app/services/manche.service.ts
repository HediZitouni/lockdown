import { Injectable } from '@angular/core';
import { answerModel } from '../datamodel/answerModel';
import { mancheModel } from '../datamodel/mancheModel';

@Injectable({
  providedIn: 'root'
})
export class MancheService {
  manche: mancheModel;
  constructor(
  ) { }

  getManche() {
    return this.manche;
  }
  
  setManche(newManche) {
    this.manche = this.fromBackToManche(newManche);
  }

  fromBackToManche(roundData): mancheModel {
    const question = {
      id: roundData.round._id,
      type: roundData.round.question.type,
      content: roundData.round.question.content,
      source: roundData.round.question.source,
      options: []
    };
    const answerForm = {
      type: roundData.round.answer.type,
      options: roundData.round.answer.options
    };

    const answer = {
      answers: roundData.answer
    }

    const userAnswers = roundData.userAnswers;

    return {
      question,
      answerForm,
      answer,
      userAnswers
    };
  }

  getAnswers(): answerModel {
    return this.manche.answer;
  }

  setAnswers(answers) {
    this.manche.answer = answers;
  }

  getUserAnswers() {
    return this.manche.userAnswers;
  }

  setUserAnswers(userAnswers) {
    this.manche.userAnswers = userAnswers;
  }
}
