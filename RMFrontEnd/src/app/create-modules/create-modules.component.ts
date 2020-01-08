import { Component, OnInit } from '@angular/core';
import{BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { FormBuilder, FormGroup,Validators,FormControl,FormArray,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import{Modules} from '../model/modules.model'
import{AddModule} from '../service/addmodule.service'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-modules',
  templateUrl: './create-modules.component.html',
  styleUrls: ['./create-modules.component.css']
})
export class CreateModulesComponent implements OnInit {
  createForm: FormGroup;
  submitted = false;


  public minnDate:Date = new Date();
  public adds:any[]=[{
    Module_name:'',
    Module_description:'',
    Fromdate:'',
    Todate:''

  }]
  datePickerConfig: Partial<BsDatepickerConfig>
  datePickerConfig1: Partial<BsDatepickerConfig>
  add: Modules
  show: boolean = true;
  result: any;
  addd: boolean = false;
  projname: string
  projectEndDate: string;
  projectStartDate:string;
  constructor(private addModule: AddModule, private myroute: ActivatedRoute, private toaster: ToastrService) {

    
    this.add = new Modules();
    this.projectStartDate=localStorage.getItem("projectStartDate")
    this.projectEndDate=localStorage.getItem("projectEndDate")
    this.datePickerConfig = Object.assign({}, { containerClass: 'theme-dark-blue', showWeekNumbers: false,
    minDate:new Date(this.projectStartDate),
    maxDate:new Date(this.projectEndDate) })
    this.datePickerConfig1 = Object.assign({}, { containerClass: 'theme-dark-blue',showWeekNumbers:false,
 maxDate:new Date(this.projectEndDate) })
  }


  
  
   addModules(){
     debugger
     this.addModule.addmodules(this.projname,this.adds).subscribe((res=>{
      if(res==true){
        this.toaster.info("Modules Created Successfully")
      }
      else{
        this.toaster.error("No Modules added.Try again!!")
      }

     }
     ))
     console.log(this.adds)
     

     

      
     }


   

  ngOnInit() {
   
var project;
     this.myroute.params.subscribe((p)=>
     {
       project=p['projName'];
       this.projname=project;
       this.addModule.getProjectDate(project).subscribe((res=>
        {
          this.projectEndDate=res;
          console.log(this.projectEndDate)
        }))
       
        
     })

    //this.maxDate.setDate(this.projectEndDate.getDate());
    console.log(this.projectEndDate.getDate());
    console.log(this.maxDate)
    }
    addModuless(){
      this.adds.push({
        ModuleName:'',
        ModuleDescription:'',
        ModuleStartDate:'',
        ModuleEndDate:''
    
      });
    }
    removeModules(i:number){
      this.adds.splice(i,1);
    }
    

    

}
