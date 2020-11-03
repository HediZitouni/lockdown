import { Injectable } from '@angular/core';
import { userModel } from '../datamodel/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: userModel[] = [];
  constructor() { }

  setUser(newUser): string {
    const {pseudo} = newUser;
    if (!pseudo) {
      return `Please enter a pseudo`;
    }
    const index = this.users.findIndex(user => user.pseudo === pseudo);
    if (index !== -1) {
      return `${pseudo} already exist in the game`;
    }

    this.users.push(newUser);
    return 'Good job you are in the room';
  }
}
