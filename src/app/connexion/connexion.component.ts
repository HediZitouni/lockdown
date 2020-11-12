import { Component, OnInit } from '@angular/core';
import { userModel } from '../datamodel/userModel';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  newUser: userModel = {pseudo:'', usersChecked: {}, ready: false};
  connected: boolean = false; // Find a way to know if he is connected
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isConnected();
  }

  onSubmit(): void {
    try {
      this.userService.setUser(this.newUser);
      sessionStorage.setItem('room', '');
      this.router.navigate(['/room']);
    } catch (error) {
      alert(error.message);
    }
  }

  isConnected() {
    const currentUser = this.userService.getCurrentUser();
    if (currentUser && !!currentUser.pseudo) {
      this.router.navigate(['/room']);
    }
  }
}
