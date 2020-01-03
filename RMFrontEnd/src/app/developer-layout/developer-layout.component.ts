import { Component, OnInit } from '@angular/core';
import{AuthenticationService} from "../service/authentication.service"
@Component({
  selector: 'app-developer-layout',
  templateUrl: './developer-layout.component.html',
  styleUrls: ['./developer-layout.component.css']
})
export class DeveloperLayoutComponent implements OnInit {

  constructor(private authentication:AuthenticationService) { }

  ngOnInit() {
  }
logout(){
this.authentication.logout();
}
}
