import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  results: any;
  constructor() { }


  getResults() {
    return this.results;
  }

  setResults(results) {
    this.results = results;
  }
  
}
