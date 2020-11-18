import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { answerModel } from '../datamodel/answerModel';
import { mancheModel } from '../datamodel/mancheModel';
import { questions } from '../utils/urls';

@Injectable({
  providedIn: 'root'
})
export class MancheService {
  manche: mancheModel;
  $manche: BehaviorSubject<mancheModel>;
  constructor(
  ) {
    this.manche = null;
    this.$manche = new BehaviorSubject(this.manche);
  }

  getManche():mancheModel {
    return this.manche;
  }
  
  setManche(newManche) {
    this.manche = this.fromBackToManche(newManche);
    this.$manche.next(this.manche);
  }

  fromBackToManche(roundData): mancheModel {
    const question = {
      id: roundData.round.id,
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
