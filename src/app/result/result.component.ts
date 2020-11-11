import { Component, OnInit } from '@angular/core';
import { ResultService } from '../services/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  results: any;
  constructor(
    private resultService: ResultService
  ) { }

  ngOnInit(): void {
    this.results = this.resultService.getResults().sort( (a,b) => {return a.points - b.points;});
  }

}
