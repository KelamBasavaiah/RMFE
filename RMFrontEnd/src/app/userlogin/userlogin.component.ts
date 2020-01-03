import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormControl,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import{Modules} from '../model/modules.model'
import{Userloginservice} from '../service/user.service'
import { from } from 'rxjs';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
import { AuthenticationService } from '../service/authentication.service';
import {ToastrService} from 'ngx-toastr';


declare var greeting : any;
declare var chatbot: any;           
             

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']

  
})
export class UserloginComponent implements OnInit {
 userlogin:Modules;
  myform:FormGroup;
  result:string;
  res:string;
  message:string;
  selectedrole:string;
  submit=false;
  submitted=false;
  submitting=false;
  

  constructor(private authenticationService:AuthenticationService,private router:Router,private toastr:ToastrService) { 
    this.userlogin = new Modules();
    this.myform = new FormGroup(
      {
        username:new FormControl(null,Validators.required),
        password:new FormControl(null,Validators.required),
        role:new FormControl(null,Validators.required)

      }
    );
    
  }
    public get username(){
      return this.myform.get("username");
     }
     public get password(){
       return this.myform.get("password");
     }
     public get role(){
      return this.myform.get("role");
    }
    selectrole(event:any){
      this.selectedrole = event.target.value;
      console.log(this.selectrole);
    }
    login()
    {
     // debugger;
     if(this.myform.valid){

     
       console.log(this.username.value);
       this.res = "false";
       this.userlogin.Username=this.username.value;
       this.userlogin.Password=this.password.value;
       this.userlogin.Role=this.role.value;
      this.authenticationService.login(this.userlogin).subscribe((res)=>{
        console.log(res);
          
      // console.log(this.res);
      // console.log(this.userlogin);
      // console.log(this.password.value);
     if(res){
       debugger;
       console.log(res)
      if(this.selectedrole=="Manager")
      {
        localStorage.setItem('username',this.userlogin.Username);

        console.log(this.selectedrole);
        this.router.navigate(['/managerLayout'])  
      }
      if(this.selectedrole=="Developer"){
        localStorage.setItem('username',this.userlogin.Username);

        this.router.navigate(['/developerLayout'])   
      }
      if(this.selectedrole=="Tester"){
        localStorage.setItem('username',this.userlogin.Username);

        this.router.navigate(['/testerLayout'])   
      }
      this.toastr.success('Logged In Sucessfully')
     
    
  
  }
  else
  {
    this.message ="Invalid Username or Password";

  }
        
    });
  }
  else{
      this.submit = true;
      this.submitted =true;
      this.submitting= true;
  }
    }



  forgotPassword(){
    this.router.navigate(['/about'])
  }
  
  
  
     
  
  ngOnInit(){
    greeting();
    chatbot();
    

  }
}

