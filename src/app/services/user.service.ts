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

    this.users.push(newUser);
    sessionStorage.setItem('users', JSON.stringify(this.users)); // Only on the host session
  }

  getUsers(): userModel[] {
    return JSON.parse(sessionStorage.getItem('users')) || []; // Only on the host session
  }

  getCurrentUser(): userModel {
    return {pseudo: sessionStorage.getItem('pseudo')};
  }

  setUsers(listUsers) {
    this.users = listUsers.map((user) => {
      return {pseudo: user};
    });
    sessionStorage.setItem('users', JSON.stringify(this.users));
  }
}
