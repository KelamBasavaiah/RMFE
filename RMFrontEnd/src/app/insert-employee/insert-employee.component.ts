import { Component, OnInit } from '@angular/core';
import{Modules}from '../model/modules.model'
import {AdminValueService} from '../service/adminlogin.service'
@Component({
  selector: 'app-insert-employee',
  templateUrl: './insert-employee.component.html',
  styleUrls: ['./insert-employee.component.css']
})
export class InsertEmployeeComponent implements OnInit {

  public adds:any[]=[{
    EmployeeName:'',
    Employee_mail:''

  }]
  admin:Modules
  status:string
  constructor(private adminservice:AdminValueService) 
  { 
    this.admin=new Modules();
  }

  ngOnInit() {
  }
  addEmployees(){
    this.adds.push({
    EmployeeName:'',
    Employee_mail:''
  
    });
  }
  removeEmployees(i:number){
    this.adds.splice(i,1);
  }
  logValue(){
    console.log(this.adds);
  }
addEmployee(){
  console.log(this.adds)
  this.adminservice.addInsert(this.adds).subscribe((res=>{
    console.log(res)
    if(res){
     this.status="Inserted"
    }
    
  }))
}

}
