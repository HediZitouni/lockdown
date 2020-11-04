import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MancheService {
  private backUrl = 'https://lockdown-server.herokuapp.com/';
  constructor(
    private http: HttpClient
  ) { }

  getManches() {
    return this.http.get(`${this.backUrl}/questions`);
  }
}
