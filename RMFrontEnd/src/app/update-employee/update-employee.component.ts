import { Component, OnInit } from '@angular/core';
import {Modules} from '../model/modules.model'
import { ActivatedRoute } from '@angular/router';
import { AdminValueService } from '../service/adminlogin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
empId:string;
admins:Modules;

  constructor(private myactivate:ActivatedRoute,private adminService:AdminValueService,private toaster:ToastrService) {
    
   }

  ngOnInit() {
    var empId;
    this.myactivate.params.subscribe((p)=>{
      empId=p['empId']
      this.empId=empId;
    })
    this.adminService.getdata(empId).subscribe((res=>{
     this.admins=res;
    }))
    
    
  }
  update(form){
    this.adminService.update(form.value).subscribe((res=>{
      if(res==true){
        this.toaster.success("Updated Successfully")
      }
      else{
        this.toaster.warning("Not updated.Try again!!!!")
      }
    }))
  }

}
