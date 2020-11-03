import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MancheService {
  private backUrl = 'http://localhost:3000';
  constructor(
    private http: HttpClient
  ) { }

  getManches() {
    return this.http.get(`${this.backUrl}/manches`);
  }
}
