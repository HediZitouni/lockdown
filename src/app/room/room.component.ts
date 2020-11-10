import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { userModel } from '../datamodel/userModel';
import { SocketService } from '../services/socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  users: userModel[];
  currentUser: userModel;
  room: string;
  constructor(
    private userService: UserService,
    private router: Router,
    private socketService: SocketService
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.getCurrentUser();
    this.getRoom();
  }

  getUsers() {
    this.users = this.userService.getUsers();
  }

  getCurrentUser() {
    this.currentUser = this.userService.getCurrentUser();
  }

  getRoom() {
    this.room = this.userService.getRoom();
  }

  onSubmit() {
    this.socketService.callSocket('emitReady');
    this.router.navigate(['/partie']);
  }

  onClick(emit): void {
    this.socketService.callSocket(emit);
  }
}
