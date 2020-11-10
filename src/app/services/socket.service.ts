import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { back } from '../utils/urls';

import { UserService } from '../services/user.service';
import { MancheService } from './manche.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any;
  constructor(
    private userService: UserService,
    private mancheService: MancheService
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
    this.onQuestion();
    this.onAnswers();
    this.onResults();
    this.onRoom();
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

  private onQuestion() {
    this.socket.on('question', (manche) => {
      this.mancheService.setManche(manche);
    });
  }

  private onAnswers() {
    this.socket.on('answers', (answers) => {
      console.log(answers);
    });
  }

  private onResults() {
    this.socket.on('results', (results) => {
      console.log(results);
    });
  }

  private onRoom() {
    this.socket.on('room', (room) => {
      this.userService.setRoom(room);
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
    this.socket.emit('answered', {answer, pseudo: this.userService.getCurrentUser().pseudo});
  }

  private emitValidate(validated) {
    this.socket.emit('validate', {validated});
  }
}
