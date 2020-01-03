import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service'
@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.css']
})
export class LayoutHeaderComponent implements OnInit {

  constructor(private authentication:AuthenticationService) { }

  ngOnInit() {
  }
  logout(){
    this.authentication.logout();
  }

}
