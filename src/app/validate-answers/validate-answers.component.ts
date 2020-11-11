import { Component, OnInit } from '@angular/core';
import { answerModel } from '../datamodel/answerModel';
import { mancheModel } from '../datamodel/mancheModel';
import { userModel } from '../datamodel/userModel';
import { MancheService } from '../services/manche.service';
import { SocketService } from '../services/socket.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-validate-answers',
  templateUrl: './validate-answers.component.html',
  styleUrls: ['./validate-answers.component.scss']
})
export class ValidateAnswersComponent implements OnInit {

  users: userModel[];
  usersChoices: {};

  answers: answerModel;
  userAnswers: any;
  answersValidation: any;
  manche: mancheModel;
  constructor(
    private mancheService: MancheService,
    private socketService: SocketService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.manche = this.mancheService.getManche();
    this.answers = this.manche.answer;
    this.userAnswers = this.manche.userAnswers;
    this.answersValidation = this.userAnswers.map(ua => ua.pseudo);
    this.users = this.userService.getUsers().filter(user => user.pseudo !== this.userService.getCurrentUser().pseudo);
    this.users.forEach(user => this.usersChoices = {...user, checked: true})
  }

    /**
   * @description Manage checkbox value
   */
  onChange({target:{checked, value}}): void {
    this.answersValidation = this.answersValidation || []; // initialize answer = []
    if (checked) {
      this.answersValidation.push(value);
      this.socketService.callSocket('emitValidateAnswer', {userToValidate: value})
    } else {
      const index = this.answersValidation.findIndex(option => option === value);
      this.answersValidation.splice(index, 1);
      this.socketService.callSocket('emitRejectAnswer', {userToValidate: value})
    }
  }

  onSubmit() {
    this.socketService.callSocket('emitReady');
  }
}
