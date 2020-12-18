import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { threadId } from 'worker_threads';
import { userModel } from '../datamodel/userModel';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUser: userModel;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.currentUser = this.userService.getCurrentUser();
    this.userService.$currentUser.subscribe(currentUser => this.currentUser = currentUser);
  }

  clearSessionStorage() {
    sessionStorage.clear();
    this.userService.setRoom('');
    this.router.navigate(['/']);
  }
}
