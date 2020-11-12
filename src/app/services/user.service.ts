import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { userModel } from '../datamodel/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: userModel[];
  $users: BehaviorSubject<userModel[]>;
  constructor() {
    this.users = this.getUsers();
    this.$users = new BehaviorSubject(this.users);
   }

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
    this.$users.next(this.users);
  }

  getUsers(): userModel[] {
    return JSON.parse(sessionStorage.getItem('users')) || []; // Only on the host session
  }

  getCurrentUser(): userModel {
    return JSON.parse(sessionStorage.getItem('currentUser'));
  }

  setUsers(listUsers) {
    this.users = this.getUsers();
    listUsers.forEach(updatedUser => {
      const indexUser = this.users.findIndex(user => user.pseudo === updatedUser.pseudo);
      if (indexUser === -1) {
        this.users.push({pseudo: updatedUser.pseudo, ready:false, usersChecked:null});
      }
      const currentUser = this.users.find(user => user.pseudo === updatedUser.pseudo);
      currentUser.ready = updatedUser.ready;
      if (!currentUser.usersChecked) {
        currentUser.usersChecked = {};
        listUsers.forEach(newUser => currentUser.usersChecked[newUser.pseudo] = true)
      }
    });
    sessionStorage.setItem('users', JSON.stringify(this.users));
    this.$users.next(this.users);
  }

  getRoom(): string {
    return sessionStorage.getItem('room'); // Only on the host session
  }

  setRoom(room): void {
    sessionStorage.setItem('room', room);
  }

  modifyValidation(validation) {
    const listUsers = this.getUsers();
    for(let user of Object.keys(validation)) {
      for(let userNameThatChecked of Object.keys(validation[user])) {
        const userThatChecked = listUsers.find(user => user.pseudo === userNameThatChecked);
        userThatChecked.usersChecked[user] = validation[user][userNameThatChecked];
      }
    }
    this.users = listUsers;
    sessionStorage.setItem('users', JSON.stringify(this.users));
    this.$users.next(this.users);
  }
}
