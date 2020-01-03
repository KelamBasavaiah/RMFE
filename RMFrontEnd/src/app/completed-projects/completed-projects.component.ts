import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import{Modules} from '../model/modules.model';
import{CompletedProjectService} from '../service/compltedProject.service'

@Component({
  selector: 'app-completed-projects',
  templateUrl: './completed-projects.component.html',
  styleUrls: ['./completed-projects.component.css']
})
export class CompletedProjectsComponent implements OnInit {
project:Modules
  constructor(private projectsservice:CompletedProjectService,private router:Router) {
    this.projectsservice.getProjects().subscribe((res=>{
      this.project=res;
      
      console.log(this.project);
    }
       ))
   }

  ngOnInit() {
  }
  displayedColumns: string[] = [ 'name', 'description','startdate','enddate'];


}
