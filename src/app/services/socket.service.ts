import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { back } from '../utils/urls';

import { UserService } from './user.service';
import { ResultService } from './result.service';
import { MancheService } from './manche.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any;
  constructor(
    private userService: UserService,
    private mancheService: MancheService,
    private resultService: ResultService,
    private router: Router
  ) { }

  //Handler of socketService
  callSocket(func, args?) {
    if (!this.socket) {
      this.createSocket();
    }
    this[func](args);
  }

  private createSocket() {
    this.socket = io(`${back}`);
    this.onError();
    this.onListUsers();
    this.onRound();
    this.onAnswers();
    this.onResults();
    this.onRoom();
    this.onValidationTable();
  }

  private getSocket() {
    return JSON.parse(sessionStorage.getItem('socket'));
  }

  private onError() {
    this.socket.on('error', (error) => {
      console.log(error);
    });
  }

  private onListUsers() {
    this.socket.on('listUsers', (listUsers) => {
      this.userService.setUsers(listUsers);
    });
  }

  private onRound() {
    this.socket.on('round', (roundData) => {
      this.mancheService.setManche(roundData);
      this.router.navigate(['/partie']);
    });
  }

  private onAnswers() {
    this.socket.on('answers', (manche) => {
      this.mancheService.setManche(manche);
      this.router.navigate(['/validate-answers']);
    });
  }

  private onResults() {
    this.socket.on('results', (results) => {
      this.resultService.setResults(results);
      this.router.navigate(['/results']);
    });
  }

  private onRoom() {
    this.socket.on('room', (room) => {
      this.userService.setRoom(room);
    });
  }

  private onValidationTable() {
    this.socket.on('validationTable', (validation) => {
      this.userService.modifyValidation(validation);
    });
  }

  private emitCreateGame(answer) {
    this.socket.emit('createGame', {pseudo: this.userService.getCurrentUser().pseudo});
  }

  private emitNewUser(newUser) {
    this.socket.emit('newUser', {pseudo:this.userService.getCurrentUser().pseudo});
  }

  private emitReady() {
    this.socket.emit('ready', {pseudo: this.userService.getCurrentUser().pseudo});
  }

  private emitAnswered(answer) {
    this.socket.emit('answered', {pseudo: this.userService.getCurrentUser().pseudo, ...answer});
  }

  private emitValidateAnswer(userToValidate) {
    this.socket.emit('validateAnswer', {pseudo: this.userService.getCurrentUser().pseudo, ...userToValidate});
  }

  private emitRejectAnswer(userToReject) {
    this.socket.emit('rejectAnswer', {pseudo: this.userService.getCurrentUser().pseudo, ...userToReject});
  }
}
