import { Component, OnInit } from '@angular/core';
import { userModel } from '../datamodel/userModel';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  newUser: userModel = {pseudo:''};
  connected: boolean = false; // Find a way to know if he is connected
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.connected) {
      this.router.navigate(['/room']);
    }
  }

  onSubmit(): void {
    const validationMessage = this.userService.setUser(this.newUser);
    alert(validationMessage);
  }

}
