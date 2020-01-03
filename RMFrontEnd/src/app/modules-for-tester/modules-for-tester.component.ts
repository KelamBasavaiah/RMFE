import { Component, OnInit,Input } from '@angular/core';
import { TesterViewModuleService } from 'src/app/service/modulesForTester.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Modules } from 'src/app/model/modules.model';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modules-for-tester',
  templateUrl: './modules-for-tester.component.html',
  styleUrls: ['./modules-for-tester.component.css']
})
export class ModulesForTesterComponent implements OnInit {
 
  viewModules:Modules[];
  mod:Modules;
  P_name:string;

  @Input() viewmodulebutton:any;
  bugbutton:any;
  
    constructor(private testerViewModuleService:TesterViewModuleService,
      private myRoute:Router,private myactivate:ActivatedRoute,private http:HttpClient,private toaster:ToastrService) 
    {
      this.mod=new Modules();
      var pname;
      this.myactivate.params.subscribe((p)=>{
        pname=p["projectname"];
        this.testerViewModuleService.getAllTestModules(pname).subscribe((data=>
        {
          this.viewModules=data;
          console.log(this.viewModules);
        }))
      })
      
     }
     displayedColumns: string[] = ['name', 'description', 'status','fromDate','toDate','modulecompletedbutton','bugbutton'];

     moduleStatus(module_name){
       this.mod.Username=localStorage.getItem('username');
      this.http.put("https://localhost:44389/api/Tester?value="+module_name,this.mod).subscribe((res)=>{
       if(res==true){
         this.toaster.info("Status Updated")
       }
       else{
         this.toaster.error("Status not updated.Try again!!")
       }
      }
      )
      
    
    }
    
    ngOnInit() {
     

    }
    
    bugsfound(module_name)
    {
      this.myRoute.navigate(["/createBug",module_name])
    }
  
    viewProject()
    {
     this.myRoute.navigate(["/project-for-tester"])
    }

}
