import { Component, OnInit } from '@angular/core';
import{Modules} from '../model/modules.model';
import{TesterBugDetailService} from '../service/bugFixedDetails.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-get-bug-fixed-modules',
  templateUrl: './get-bug-fixed-modules.component.html',
  styleUrls: ['./get-bug-fixed-modules.component.css']
})
export class GetBugFixedModulesComponent implements OnInit {

  bugDetail:Modules;
bugDetails:Modules[];
bugData:any;

k=true;
  constructor(private testerbugdetailService:TesterBugDetailService,private myRoute:Router)
   {
     //this.bugDetails=this.testerbugdetailService.getBugDetail();
     //console.log(this.bugDetails);
     this.testerbugdetailService.getBugDataFromAPI().subscribe((data)=>{
      this.bugData=data;
     // console.log(this.bugData);
      // if(this.bugData.Bug_status=="Completed"){
      // this.k=false;
      // }
      
     })


    }
    displayedColumns: string[] = ['1', '2', '3'];

  ngOnInit() {
  }
  back(){
    this.myRoute.navigate(['/testerLayout'])
  }

}
