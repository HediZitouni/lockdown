import { newArray } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { userModel } from '../datamodel/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: userModel[];
  constructor() { }

  setUser(newUser) {
    const {pseudo} = newUser;
    this.users = this.getUsers();
    if (!pseudo) {
      throw new Error('Please enter a pseudo');
    }
    const index = this.users.findIndex(user => user.pseudo === pseudo);
    if (index !== -1) {
      throw new Error(`${pseudo} already exist in the game`);
    }

    newUser.usersChecked = {};
    this.users.forEach(user => newUser.usersChecked[user.pseudo] = true)
    this.users.push(newUser);
    sessionStorage.setItem('currentUser', JSON.stringify(newUser));
    sessionStorage.setItem('users', JSON.stringify(this.users)); // Only on the host session
  }

  getUsers(): userModel[] {
    return JSON.parse(sessionStorage.getItem('users')) || []; // Only on the host session
  }

  getCurrentUser(): userModel {
    return JSON.parse(sessionStorage.getItem('currentUser'));
  }

  setUsers(listUsers) {
    this.users = listUsers.map((user) => {
      user.usersChecked = {};
      listUsers.forEach(newUser => user.usersChecked[newUser.pseudo] = true)
      return {
        pseudo: user.pseudo,
        usersChecked: user.usersChecked
      };
    });
    sessionStorage.setItem('users', JSON.stringify(this.users));
  }

  getRoom(): string {
    return sessionStorage.getItem('room'); // Only on the host session
  }

  setRoom(room): void {
    sessionStorage.setItem('room', room);
  }

  modifyValidation(validation) {
    const listUsers = this.getUsers();
    for(let userName of Object.keys(validation)) {
      const userThatChecked = listUsers.find(user => user.pseudo === userName);
      for(let userToCheck of Object.keys(validation[userName])) {
        userThatChecked.usersChecked[userToCheck] = validation[userName][userToCheck];
      }
    }
  }
}
