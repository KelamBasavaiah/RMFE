import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Modules} from '../model/modules.model'
import{BugService} from '../service/bugDetailsForDeveloper.service'
@Component({
  selector: 'app-bug-details-for-developer',
  templateUrl: './bug-details-for-developer.component.html',
  styleUrls: ['./bug-details-for-developer.component.css']
})
export class BugDetailsForDeveloperComponent implements OnInit {

  bugs: Modules[];
  bu: Modules;
  bugdata: any;
  
  constructor(private bugservice: BugService, private router: Router,private myActivateRoute:ActivatedRoute) {
    this.bugs = bugservice.getAllBugs();
    this.bugservice.getDataFromAPI().subscribe((data) => {
      this.bugdata = data;
      console.log('get bug data',this.bugdata);
    });
  }
  displayedColumns: string[] = ['2', '3', '4','5'];
  viewmodulesmethod(obj) {
 // debugger;
    console.log(obj.Moduled);
    this.router.navigate(["/bugModulesForDeveloper",obj.ModuleId]);
  }
 
  ngOnInit() {
  }

}
