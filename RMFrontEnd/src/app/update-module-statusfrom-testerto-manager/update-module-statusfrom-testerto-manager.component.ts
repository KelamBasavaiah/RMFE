import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TesterModuleStatusService } from 'src/app/service/updateStatusToManagerFromTester.service'
import{ HttpClient} from '@angular/common/http';
import { Modules } from 'src/app/model/modules.model';

@Component({
  selector: 'app-update-module-statusfrom-testerto-manager',
  templateUrl: './update-module-statusfrom-testerto-manager.component.html',
  styleUrls: ['./update-module-statusfrom-testerto-manager.component.css']
})
export class UpdateModuleStatusfromTestertoManagerComponent implements OnInit {

  mod:Modules;
  constructor(private myRoutes:Router,public testermodulestatusService:TesterModuleStatusService,private http:HttpClient ) { }

  

  
  goBack()
  {
  this.myRoutes.navigate(["/testerLayout"]);
  }


  ngOnInit() {
  }

}
