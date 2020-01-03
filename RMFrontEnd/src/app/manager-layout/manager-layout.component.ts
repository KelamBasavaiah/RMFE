import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenavContent} from '@angular/material/sidenav';
import{AuthenticationService} from "../service/authentication.service"

@Injectable()
@Component({
  selector: 'app-manager-layout',
  templateUrl: './manager-layout.component.html',
  styleUrls: ['./manager-layout.component.css']
})
export class ManagerLayoutComponent implements OnInit {
events:string[]=[];
  constructor(private myRouter:Router,private authentication:AuthenticationService ) { }

  ngOnInit() {
  }
logout(){
  this.authentication.logout();
}
}
