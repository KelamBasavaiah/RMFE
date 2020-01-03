import { Component, OnInit } from '@angular/core';
import {Modules} from '../model/modules.model'
import { CompletedModuleService } from '../service/completedModule.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Button } from 'protractor';
@Component({
  selector: 'app-completed-modules',
  templateUrl: './completed-modules.component.html',
  styleUrls: ['./completed-modules.component.css']
})
export class CompletedModulesComponent implements OnInit {
modules:Modules[]
projects:Modules[];
totalModuleCount:number
moduleCount:number
status:string
  constructor(private completedModuleService:CompletedModuleService,private router:Router) { 
    //  this.completedModuleService.getProjects().subscribe((res=>{
    //    this.projects=res;
    //   console.log(res);
    //  }))
     this.completedModuleService.getModules().subscribe((res=>{
      this.modules=res;
      console.log(res)

    }))
   
     
    

    console.log(this.modules);
  }

  ngOnInit() {   
  }
  
    
  

}
