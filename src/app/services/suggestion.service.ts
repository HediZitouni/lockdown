import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { suggestions } from '../utils/urls';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor(
    private http: HttpClient
  ) { }

  setSuggestion(suggestion) {
    const status = this.http.post(`${suggestions}`, suggestion).toPromise().then(status => {
      console.log(status);
    }, error => {
      console.log(error);
    });
  }
}
