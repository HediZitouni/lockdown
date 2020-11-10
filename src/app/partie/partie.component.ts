import { Component, OnInit } from '@angular/core';

import { partieModel } from '../datamodel/partieModel';
import { mancheModel } from '../datamodel/mancheModel';
import { MancheService } from '../services/manche.service';

import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.scss'],
})
export class PartieComponent implements OnInit {
  partie: partieModel = {
    manches: [],
  };

  constructor(
    private mancheService: MancheService
  ) {}

  ngOnInit(): void {
    this.getManches();
  }

  getManches(): void {
    this.mancheService
      .getManches()
      .toPromise()
      .then(
        (res: mancheModel[]) => {
          this.partie.manches = this.mancheService.fromBackToManche(res);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
