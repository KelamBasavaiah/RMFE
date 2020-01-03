import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import{TesterProjectService}from '../service/projectForTester.service';
import{Modules} from '../model/modules.model'

@Component({
  selector: 'app-projects-for-tester',
  templateUrl: './projects-for-tester.component.html',
  styleUrls: ['./projects-for-tester.component.css']
})
export class ProjectsForTesterComponent implements OnInit {

  @Input() project:Modules;
  projects:Modules[];
    constructor(private testerprojectServices:TesterProjectService,private myRoute:Router,private myActivateRoute:ActivatedRoute,private snack : MatSnackBar) 
    { 
      
      this.testerprojectServices.getAllTestProjects().subscribe((res=>
      {
        this.projects=res;
        console.log(this.projects.length)
        console.log(this.projects)
        
      }))
      
    }

    viewModules(obj)
    {
      console.log(obj);
  
     this.myRoute.navigate(['modules-for-tester',obj]);
    }
  
    ngOnInit() {}
           
   displayedColumns: string[] = ['name', 'description', 'startdate','endDate','viewmodulebutton'];

}
