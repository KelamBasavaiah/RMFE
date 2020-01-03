import { Component, OnInit ,Input} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Modules} from '../model/modules.model';
import { HttpClient } from '@angular/common/http';
import { ModuleStatusFromDeveloperToTesterService } from '../service/moduleStatusFromDeveloperToManager.service';

@Component({
  selector: 'app-module-status-to-developer-from-manager',
  templateUrl: './module-status-to-developer-from-manager.component.html',
  styleUrls: ['./module-status-to-developer-from-manager.component.css']
})
export class ModuleStatusToDeveloperFromManagerComponent implements OnInit {

  status:string="Completed by Developer";
  module:Modules[];
  modulename:string
  mod:any;
  @Input() modulestatus:any;
  
    constructor(private modulestatusservice:ModuleStatusFromDeveloperToTesterService,private router:Router,private myHttp:HttpClient,
      private myactivate:ActivatedRoute) { 
  
    }
    goback(){
      this.router.navigate(["/project-for-developer"])
    }
  
    displayedColumns: string[] = ['position', 'name', 'description'];
  
    ngOnInit() {
      if(!this.modulestatus)
      var module
      this.myactivate.params.subscribe((p)=>{
        
        this.module = p["modulename"];
        console.log(this.module)
      })
      
      
    
      
    }

}
