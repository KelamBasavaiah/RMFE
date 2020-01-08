import { Component, OnInit } from '@angular/core';
import{Modules}from '../model/modules.model'
import {AdminValueService} from '../service/adminlogin.service';
import { ToastrService } from 'ngx-toastr';
import{BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-insert-employee',
  templateUrl: './insert-employee.component.html',
  styleUrls: ['./insert-employee.component.css']
})
export class InsertEmployeeComponent implements OnInit {

  public adds:any[]=[{
    EmployeeName:'',
    Employee_mail:'',
    Employee_addr:'',
    Employee_joinDate:'',
    Employee_dob:'',
    Employee_bgroup:''
    
    


  }]
  datePickerConfig:Partial<BsDatepickerConfig>
  datePickerConfig1:Partial<BsDatepickerConfig>
  admin:Modules
  status:string
  constructor(private adminservice:AdminValueService,private toaster:ToastrService) 
  { 
    this.admin=new Modules();
    
    this.datePickerConfig=Object.assign({},{containerClass:'theme-dark-blue',showWeekNumbers:false})
    this.datePickerConfig1=Object.assign({},{containerClass:'theme-dark-blue'})
  }

  ngOnInit() {
  }
  addEmployees(){
    this.adds.push({
    EmployeeName:'',
    Employee_mail:'',
    Employee_addr:'',
    Employee_joinDate:'',
    Employee_dob:'',
    Employee_bgroup:''
  
    });
  }
  removeEmployees(i:number){
    this.adds.splice(i,1);
  }
  logValue(){
    console.log(this.adds);
  }
addEmployee(){
  console.log(this.adds)
  this.adminservice.addInsert(this.adds).subscribe((res=>{
      if(res==true){
        this.toaster.success("Employee details Created Successfully!")
      }
      else{
        this.toaster.error("No Details added.Try again!!")
      }
    }))
  }
}
