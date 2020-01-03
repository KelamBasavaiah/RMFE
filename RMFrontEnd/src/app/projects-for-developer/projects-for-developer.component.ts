import { Component, OnInit } from '@angular/core';
import { Modules } from '../model/modules.model';
import { Router } from '@angular/router';
import { ProjectsForDeveloperService } from '../service/projectForDeveloper.service';

@Component({
  selector: 'app-projects-for-developer',
  templateUrl: './projects-for-developer.component.html',
  styleUrls: ['./projects-for-developer.component.css']
})
export class ProjectsForDeveloperComponent implements OnInit {

  project:Modules[];
  employeeId:string
  constructor(private projectsservice:ProjectsForDeveloperService,private router:Router) {
    
    this.projectsservice.getUserData().subscribe((res=>{
      this.project=res;
      
      console.log(this.project);
    }
       ))
   }
   viewmodules(projectname){
     debugger;
     console.log(projectname)
     this.router.navigate(["/modules-for-developer",projectname]);
    //this.router.navigateByUrl("/view-modules")
    }
   
  ngOnInit() {
  }
  displayedColumns: string[] = [ 'name', 'description','startdate','enddate','viewmodulebutton'];


}
