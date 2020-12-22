import { Component, OnInit } from '@angular/core';
import { answerModel } from '../datamodel/answerModel';
import { mancheModel } from '../datamodel/mancheModel';
import { userModel } from '../datamodel/userModel';
import { MancheService } from '../services/manche.service';
import { SocketService } from '../services/socket.service';
import { UserService } from '../services/user.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-validate-answers',
  templateUrl: './validate-answers.component.html',
  styleUrls: ['./validate-answers.component.scss']
})
export class ValidateAnswersComponent implements OnInit {

  users: userModel[];

  answers: answerModel;
  userAnswers: any;
  answersValidation: any;
  manche: mancheModel;
  submitted: boolean = false;
  constructor(
    private mancheService: MancheService,
    private socketService: SocketService,
    private userService: UserService,
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    //this.manche = this.mancheService.getManche();
    //this.users = this.userService.getUsers().filter(user => user.pseudo !== this.userService.getCurrentUser().pseudo);
    this.mancheService.$manche.subscribe(manche => this.manche = manche);
    this.userService.$users.subscribe(users => {
      this.users = users.filter(user => user.pseudo !== this.userService.getCurrentUser().pseudo);
    });

    this.answers = this.manche.answer;
    this.userAnswers = this.utilsService.sortBy(this.manche.userAnswers, 'time');
    this.answersValidation = this.userAnswers.map(ua => ua.pseudo);
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
    this.submitted = true;
    this.socketService.callSocket('emitReady');
  }
}