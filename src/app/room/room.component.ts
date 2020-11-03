import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { userModel } from '../datamodel/userModel';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  users: userModel[];
  currentUser: userModel;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.getCurrentUser();
  }

  getUsers() {
    this.users = this.userService.getUsers();
  }

  getCurrentUser() {
    this.currentUser = this.userService.getCurrentUser();
  }
}
