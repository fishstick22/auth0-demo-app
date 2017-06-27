import { Component } from '@angular/core';

import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  authApp = {
    title: 'Auth0 Demo App'
  }
  
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
}
