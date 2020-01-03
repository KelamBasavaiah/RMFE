import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../service/authentication.service"
@Component({
  selector: 'app-tester-layout',
  templateUrl: './tester-layout.component.html',
  styleUrls: ['./tester-layout.component.css']
})
export class TesterLayoutComponent implements OnInit {

  constructor(private authentication:AuthenticationService) { }

  ngOnInit() {
    console.log("hii");
  }
logout(){
this.authentication.logout();
}
}
