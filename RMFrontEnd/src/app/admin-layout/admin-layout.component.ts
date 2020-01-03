import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
logout(){
  this.route.navigate(['/login-page'])
}
}
