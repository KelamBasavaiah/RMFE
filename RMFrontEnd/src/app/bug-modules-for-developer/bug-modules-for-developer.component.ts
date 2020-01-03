import { Component, OnInit } from '@angular/core';
import{Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import{ViewModuleService} from '../service/BugModulesForDeveloper.service'
import{Modules} from '../model/modules.model'

@Component({
  selector: 'app-bug-modules-for-developer',
  templateUrl: './bug-modules-for-developer.component.html',
  styleUrls: ['./bug-modules-for-developer.component.css']
})
export class BugModulesForDeveloperComponent implements OnInit {

  viewmodules:Modules[];
  bugdata:Modules;
  
  modulename:string

  constructor(private viewmodulesservice:ViewModuleService,private router:Router,private myactivate:ActivatedRoute) {

  // this.viewmodules=this.viewmodulesservice.getAllModules(); 
   
  }
   
displayedColumns: string[] = ['1','2','3'];

  ngOnInit() {
   
    if(!this.bugdata)
    var Modulename;

    this.myactivate.params.subscribe((p)=>{
     Modulename=p["module"];
     console.log(Modulename)
     
     this.viewmodulesservice.getModules(Modulename).subscribe((res)=>{
      console.log(res);
      this.bugdata=res;
    });
  })
  }
  BugStatusMethod(moduleid){
    console.log(moduleid)
    console.log()
   this.router.navigate(['bugStatus',moduleid])
}
}
