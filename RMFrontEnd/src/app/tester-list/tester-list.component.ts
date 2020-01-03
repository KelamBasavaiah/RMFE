import { Component, OnInit } from '@angular/core';
import { TesterService } from '../service/tester-list.service';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { Testers } from '../model/tester-list.model';
import{LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service'
import { formatDate } from '@angular/common';
import{Modules} from '../model/modules.model'
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tester-list',
  templateUrl: './tester-list.component.html',
  styleUrls: ['./tester-list.component.css']
})
export class TesterListComponent implements OnInit {
  datePickerConfig:Partial<BsDatepickerConfig>
  datePickerConfig1:Partial<BsDatepickerConfig>
testerList:Modules
assigntester:Modules
value:string="name";
moduleId:string;
status:string;

minnDate:Date=new Date();
  constructor(private testerService:TesterService,private myactivate:ActivatedRoute,private router:Router,
    private toaster:ToastrService) { 
    this.assigntester=new Modules();

    this.datePickerConfig=Object.assign({},{containerClass:'theme-dark-blue'},{dateInputFormat:'YYYY-MM-DD'})
    this.datePickerConfig1=Object.assign({},{containerClass:'theme-dark-blue'},{dateInputFormat:'YYYY-MM-DD'})
    this.testerService.getTesters().subscribe((res=>{
      this.testerList=res
      console.log(this.testerList)

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
  assign(){
    this.assigntester.EmployeeName=this.value
    this.assigntester.ModuleId=this.moduleId;
    this.testerService.assignTester(this.assigntester).subscribe((res=>{
      console.log(res)
      if(res==true){
        this.toaster.info("Tester Assigned")
      }
      else{
        this.toaster.error("Tester not assigned.Try again!!!")
      }

    }
    ))
  }
  back(){
    this.router.navigate(['/managerLayout'])
  
  }


  

}
