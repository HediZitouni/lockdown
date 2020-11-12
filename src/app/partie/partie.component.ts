import { Component, OnInit } from '@angular/core';

import { partieModel } from '../datamodel/partieModel';
import { MancheService } from '../services/manche.service';

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
    this.getManche();
  }

  getManche(): void {
    this.mancheService.$manche.subscribe(manche => this.partie.manches = [manche]);
    //this.partie.manches = [this.mancheService.getManche()];
  }
}
