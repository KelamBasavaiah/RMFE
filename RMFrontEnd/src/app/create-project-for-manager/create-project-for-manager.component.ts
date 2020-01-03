import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import{Modules} from '../model/modules.model';
import { Router, ActivatedRoute } from '@angular/router';
import{BsDatepickerConfig, DatepickerConfig} from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CreateService } from '../service/createproject.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-project-for-manager',
  templateUrl: './create-project-for-manager.component.html',
  styleUrls: ['./create-project-for-manager.component.css']
})
export class CreateProjectForManagerComponent implements OnInit {

  createForm:FormGroup;
  submitted=false;
  datePickerConfig:Partial<BsDatepickerConfig>
datePickerConfig1:Partial<BsDatepickerConfig>
create:Modules;
result:any;
validation:string
minnDate:Date=new Date();
  constructor(private myRouter:Router,private createService:CreateService,private http:HttpClient,private formBuilder:FormBuilder, private toaster:ToastrService)

  {
    this.create=new Modules();
    this.datePickerConfig=Object.assign({},{containerClass:'theme-dark-blue'},{showWeekNumbers:false})
    this.datePickerConfig1=Object.assign({},{containerClass:'theme-dark-blue'},{showWeekNumbers:false})
    
   }
   addProject(){
   
    //  localStorage.setItem("projName",this.create.projectname)
    this.createService.addProject(this.create).subscribe((res=>{
      
      
      if(res==true){
        this.toaster.info("Project Created Successfully")
      }
      else{
        this.toaster.error("Project Not Assigned.Try Again")
      }
      this.myRouter.navigate(['add-modules',this.create.ProjectName])
     
    }))
     //this.createService.addProject(this.create)
  
 
     
   }
   
   
  //  Create() {
  //   this.myRouter.navigateByUrl("/manager-create/add-project");
  //  }

  ngOnInit() {
    
  }


}
