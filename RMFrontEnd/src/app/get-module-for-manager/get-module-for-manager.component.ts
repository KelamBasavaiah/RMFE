import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { Modules } from '../model/modules.model';
import { viewprojectsService } from '../service/viewproject.service';
@Component({
  selector: 'app-get-module-for-manager',
  templateUrl: './get-module-for-manager.component.html',
  styleUrls: ['./get-module-for-manager.component.css']
})
export class GetModuleForManagerComponent implements OnInit {

  module:Modules[];
  projectName:string;
modules:any;
  constructor(private viewmoduleservice:viewprojectsService,private myRouter:Router,private myactivate:ActivatedRoute) 
  { 

     
    }
  
  

  ngOnInit() {
    var pname;
    this.myactivate.params.subscribe((p)=>{
      pname=p['ProjectName']
      this.projectName=pname;
      console.log(pname);
    })
      this.viewmoduleservice.getModuleData(this.projectName).subscribe((res=>
        {
          this.modules=res
          console.log(res)
        }))

  
  }
  Assign(moduleid){
    this.myRouter.navigate(['assign-developer',moduleid])
  }
  viewProject(){
    this.myRouter.navigate(['/managerLayout'])
  }
}
