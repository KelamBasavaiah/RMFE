import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import{ Modules} from '../model/modules.model';
import{BugStatusService} from '../service/updateBugStatusToTester.service'
import{Router,ActivatedRoute} from '@angular/router';
import{HttpClient}from'@angular/common/http'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-bug-status-to-tester-from-developer',
  templateUrl: './update-bug-status-to-tester-from-developer.component.html',
  styleUrls: ['./update-bug-status-to-tester-from-developer.component.css']
})
export class UpdateBugStatusToTesterFromDeveloperComponent implements OnInit {
moduleId:string;
  bugstatus:string="BugStatus Updated";
  mod:any;
//form vali
bugStatus = new FormControl('',[Validators.required]);
constructor(private bugstatusservice:BugStatusService,private router:Router,private myHttp:HttpClient,private myactivate:ActivatedRoute,
  private toaster:ToastrService) { 
}


ngOnInit() {
  if(!this.bugStatus)
  var Bugstatus;

  this.myactivate.params.subscribe((p)=>{
   this.moduleId=p["module"];
   console.log(Bugstatus)
   
   
})

}
UpdateStatus(){
  this.bugstatusservice.getModulesStatus(this.moduleId).subscribe((res)=>{
    console.log(res);
    if(res==true){
      this.toaster.info("Status Updated Successfully")
    }
    else{
      this.toaster.error("Status not updated.Try again!!!")
    }
  });
}

}
