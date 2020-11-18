import { questionModel } from './questionModel';
import { answerFormModel } from './answerFormModel';
import { answerModel } from './answerModel';

export interface mancheModel {
    question: questionModel,
    answerForm: answerFormModel,
    answer: answerModel,
    userAnswers: any
}