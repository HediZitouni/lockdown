import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { userModel } from '../datamodel/userModel';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  users: userModel[];
  currentUser: userModel;
  room: string;
  joinedRoom: string;
  constructor(
    private userService: UserService,
    private socketService: SocketService
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.getCurrentUser();
    this.getRoom();
  }

  getUsers() {
    this.userService.$users.subscribe(users => this.users = users);
  }

  getCurrentUser() {
    this.currentUser = this.userService.getCurrentUser();
  }

  getRoom() {
    this.userService.$room.subscribe(room => this.room = room);
  }

  onSubmit() {
    this.socketService.callSocket('emitReady');
  }

  onClick(emit): void {
    this.socketService.callSocket(emit, this.joinedRoom);
  }
}
