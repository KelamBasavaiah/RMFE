import { Component, OnInit, Output, EventEmitter, inject } from '@angular/core';
import { Modules } from '../model/modules.model';
import { ModuleService } from '../service/assignedModules.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-assigned-modules',
  templateUrl: './assigned-modules.component.html',
  styleUrls: ['./assigned-modules.component.css']
})
export class AssignedModulesComponent implements OnInit {

modules:Modules
module_Status:string="Completed By Developer";
mod_status:string="Completed by Tester";
assignedStatus="In Progress"
mod_Name:string;
status:string;
completedStatus:boolean=false;
showButton:boolean=false;
  constructor(private moduleService:ModuleService,private myRoutes:Router,private toaster:ToastrService) { 
    
    this.moduleService.getModules().subscribe((res=>{
      console.log(res);
      this.modules=res
      console.log(this.modules)
    }))
    
  }

  ngOnInit() {
    
  
  }

  assign(obj){
    console.log(obj.ModuleId)
    this.myRoutes.navigate(['assign-tester',obj.ModuleId]);
      
  }
 completed(obj){
   this.moduleService.moduleStatus(obj.ModuleId,obj).subscribe((res=>{
     console.log(res)
     if(res==true){
       this.toaster.info(" Status Updated successfully")
     }
     else{
       this.toaster.error("Status not updated.Try again!!!")
     }
   }))
 }
  

}
