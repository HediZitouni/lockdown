import { Component, OnInit, AfterViewInit } from '@angular/core';

import { partieModel } from '../datamodel/partieModel';
import { mancheModel } from '../datamodel/mancheModel';
import { MancheService } from '../services/manche.service';

import io from "socket.io-client";
import { back } from "../utils/urls";
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.scss']
})
export class PartieComponent implements OnInit {

  partie: partieModel = {
    manches: []
  }
  private socket: any;

  constructor(
    private mancheService: MancheService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getManches();
    this.socket = io(`${back}`);
  }
  AfterViewInit(): void {
    this.socket.on('question')
  }

  getManches(): void {
    this.mancheService.getManches().toPromise().then((res: mancheModel[]) => {
      this.partie.manches = this.mancheService.fromBackToManche(res);
    }, error => {
      console.log(error);
    });
  }

  onClick() {
    this.socket.emit("next", this.userService.getCurrentUser().pseudo);
    alert(this.userService.getCurrentUser().pseudo);
  }
}
