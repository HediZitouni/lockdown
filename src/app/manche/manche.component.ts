import { Component, Input, OnInit } from '@angular/core';

import { mancheModel } from '../datamodel/mancheModel';

@Component({
  selector: 'app-manche',
  templateUrl: './manche.component.html',
  styleUrls: ['./manche.component.scss']
})
export class MancheComponent implements OnInit {
  @Input() manche: mancheModel;
  constructor() { }

  ngOnInit(): void {
  }

}
