import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { threadId } from 'worker_threads';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  clearSessionStorage() {
    sessionStorage.clear();
    this.userService.setRoom('');
    this.router.navigate(['/']);
  }
}
