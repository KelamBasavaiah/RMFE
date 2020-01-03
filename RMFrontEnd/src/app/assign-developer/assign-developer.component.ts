import { Component, OnInit } from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import{Modules} from '../model/modules.model'
import { DeveloperService } from '../service/assignDeveloper.service';
import {FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-assign-developer',
  templateUrl: './assign-developer.component.html',
  styleUrls: ['./assign-developer.component.css']
})
export class AssignDeveloperComponent implements OnInit {
  datePickerConfig:Partial<BsDatepickerConfig>
  datePickerConfig1:Partial<BsDatepickerConfig>
developerList:Modules
assignDeveloper:Modules
status:string;
value:string="name";
moduleId:string;
minnDate:Date=new Date();




  constructor(private formBuilder:FormBuilder,private developerService:DeveloperService,private myactivate:ActivatedRoute,private router:Router,private toaster:ToastrService) {
    this.assignDeveloper=new Modules();

    this.datePickerConfig=Object.assign({},{containerClass:'theme-dark-blue'},{dateInputFormat:'YYYY-MM-DD'})
    this.datePickerConfig1=Object.assign({},{containerClass:'theme-dark-blue'},{dateInputFormat:'YYYY-MM-DD'})
    this.developerService.getDeveloper().subscribe((res=>{
      this.developerList=res
      console.log(this.developerList)

    }
      ))
   }

  ngOnInit() {
    
    var pname;
    this.myactivate.params.subscribe((p)=>{
      pname=p['ModuleName']
      this.moduleId=pname;
      console.log(pname);
    })

  
    
  }
  assign(empId){
    this.assignDeveloper.EmployeeName=this.value;
    this.assignDeveloper.ModuleId=this.moduleId;
    this.developerService.assignDeveloper(this.assignDeveloper).subscribe((res=>{
      console.log(res)
      if(res==true){
        this.toaster.info("Developer Assigned")
      }
      else{
        this.toaster.error("developer not assigned.Try again!!")
      }
  }))

}

back(){
  this.router.navigate(['/managerLayout'])
}
}
