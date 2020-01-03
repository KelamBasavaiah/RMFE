import { Component, OnInit ,Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import{Modules} from '../model/modules.model'
import { ModulesForDeveloperService } from '../service/modulesForDeveloper.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-modules-for-developer',
  templateUrl: './modules-for-developer.component.html',
  styleUrls: ['./modules-for-developer.component.css']
})
export class ModulesForDeveloperComponent implements OnInit {

  viewModules:Modules[];
mod :Modules;
projectname:string;
//completedbutton = new FormControl('',[Validators.required]);
@Input() viewmodulebutton:any;
  constructor(private viewmoduleservice:ModulesForDeveloperService,private router:Router,private myHttp:HttpClient,
    private myactivate:ActivatedRoute,private toaster:ToastrService) {
      this.mod=new Modules();
      var pname;
      this.myactivate.params.subscribe((p)=>{
        pname=p["projectname"];
        this.viewmoduleservice.getModuleData(pname).subscribe((res=>{
          this.viewModules=res;
         console.log(this.viewModules);
        }
        ))
      })
  
   }
   message(Modulename){
     console.log(Modulename)
     this.moduleStatus(Modulename)
     

     //this.completedbutton.reset();
    }
    displayedColumns: string[] = [ 'name', 'description','status','startdate','enddate','modulecompletedbutton'];

    moduleStatus(module_name){
      this.mod.Username=localStorage.getItem('username')
      console.log("modulestatus"+module_name)
      this.myHttp.put("https://localhost:44389/api/Developer?value="+module_name,this.mod).subscribe((res=>{
        if(res==true){
        this.toaster.info("Status updated ")
        }
        else{
          this.toaster.error("Status not updated")
        }
      }
      
      ))
      
    }

  ngOnInit() {
   
      //this.displayedColumns
    

  }
  back(){
    this.router.navigate(['/developerLayout'])
  }

}
