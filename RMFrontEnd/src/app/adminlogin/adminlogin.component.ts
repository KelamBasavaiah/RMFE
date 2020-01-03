import { Component, OnInit } from '@angular/core';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
import {Modules} from '../model/modules.model'
import{Adminloginservice} from '../service/admin.service'
import { from } from 'rxjs';
import { FormGroup, Validators,FormControl,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import{ ToastrService} from 'ngx-toastr'
declare var greeting : any;
declare var chatbot : any;
import * as $ from "jquery" 

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminlogin:Modules;
  myform:FormGroup;
  result:string;
  res:string;
  message:string;
  submit =false;
  submitted =false;


  constructor(private adminloginservice:Adminloginservice,private router:Router,private toastr:ToastrService) {
    this.adminlogin = new Modules();
    // console.log(this.adminlogin);
    this.myform = new FormGroup(
      {
        userName:new FormControl(null,Validators.required),
        password:new FormControl(null,Validators.required)
   
      }
    );
   }
   public get userName(){
    return this.myform.get("userName");
   }
   public get password(){
     return this.myform.get("password");
   }
   create()
   {
    // debugger;
      if(this.myform.valid){

      
      console.log(this.userName.value);
      this.res = "false";
      this.adminlogin.Username=this.userName.value;
      this.adminlogin.Password=this.password.value;
     this.adminloginservice.addUser(this.adminlogin).subscribe((res:string)=>{
      console.log(res);
        this.res=res;
        console.log(this.res);
        if(this.res.toString()== "true"){
          //  this.router.navigateByUrl[('admin')];
          //  this.router.navigateByUrl('/admin');
           this.router.navigate(['/adminLayout']);
           this.toastr.success('Logged In Sucessfully')
         }
         else{
          this.message ="Invalid Username or Password";
          console.log(this.message);
         }

     })
    }
    else{
      this.submit = true;
      this.submitted = true;
    }
     //console.log(this.result);
    //  console.log(this.adminlogin);
    //  console.log(this.userName.value);
    // console.log(this.password.value);
    //console.log(this.res);
     
     
  

    
     
    
     
   }
  

  ngOnInit() {
    greeting();
    chatbot();

    
  } 

}
