import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { suggestions, getSuggestionsByNumber, validateSuggestionById, rejectSuggestionById } from '../utils/urls';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor(
    private http: HttpClient
  ) { }

  getSuggestion() {
    return this.http.get(`${getSuggestionsByNumber}`);
  }

  setSuggestion(suggestion) {
    this.http.post(`${suggestions}`, suggestion).toPromise().then(status => {
      console.log(status);
    }, error => {
      console.log(error);
    });
  }

  validateSuggestion(id) {
    this.http.post(`${validateSuggestionById}${id}`, {}).toPromise().then(status => {
      console.log(status);
    }, error => {
      console.log(error);
    });
  }

  rejectSuggestion(id) {
    this.http.delete(`${rejectSuggestionById}${id}`).toPromise().then(status => {
      console.log(status);
    }, error => {
      console.log(error);
    });
  }
}
