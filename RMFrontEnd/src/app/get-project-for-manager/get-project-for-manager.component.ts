import { Component, OnInit } from '@angular/core';
import {Modules} from '../model/modules.model';
import {Router} from '@angular/router';
import{viewprojectsService} from '../service/viewproject.service';

import { from } from 'rxjs';

@Component({
  selector: 'app-get-project-for-manager',
  templateUrl: './get-project-for-manager.component.html',
  styleUrls: ['./get-project-for-manager.component.css']
})
export class GetprojectForManagerComponent implements OnInit {
project:Modules[];
projects:any
message:string
  constructor(private viewprojectservice:viewprojectsService,private myRouter:Router){
    
    this.viewprojectservice.getProjectData().subscribe((res=>{
      //console.log(res)
      this.projects=res
    }))
    
  }
  viewModules(projectId){
    
    this.myRouter.navigate(['viewmodules',projectId])
      //console.log(res) 
  }
  
   
     //this.createService.addProject(this.create)
  
     

  ngOnInit() {

  }

}