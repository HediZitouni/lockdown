import { Component, OnInit } from '@angular/core';
import { userModel } from '../datamodel/userModel';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  newUser: userModel = {pseudo:''};
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const validationMessage = this.userService.setUser(this.newUser);
    alert(validationMessage);
  }

}
