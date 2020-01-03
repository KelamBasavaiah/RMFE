import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
declare var longway: any;
declare var greeting:any;
declare var text:any;



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router:Router) {

    
}

  
  ngOnInit() {
    longway();
    greeting();
    text();
    
    
  }
  userlogin(){
    
     this.router.navigate(['/userlogin']);
  }
  adminlogin(){
    this.router.navigate(['/adminlogin']);
  }
  
}
