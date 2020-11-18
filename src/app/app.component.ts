import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lockdown';

  constructor(
    private router: Router
  ) {}

  clearSessionStorage() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
