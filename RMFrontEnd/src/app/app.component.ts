import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../app/service/authentication.service';
import { Modules } from '../app/model/modules.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: Modules;


  }

