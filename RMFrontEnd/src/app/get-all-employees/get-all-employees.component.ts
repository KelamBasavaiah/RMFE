import { Component, OnInit } from '@angular/core';
import {Modules} from '../model/modules.model';
import {Router} from '@angular/router';
import {AdminValueService} from '../service/adminlogin.service'
@Component({
  selector: 'app-get-all-employees',
  templateUrl: './get-all-employees.component.html',
  styleUrls: ['./get-all-employees.component.css']
})
export class GetAllEmployeesComponent implements OnInit {
employees:Modules[]
  constructor(private adminservice:AdminValueService,private myroute:Router) {
    this.adminservice.getEmployee().subscribe((res)=>{
      this.employees=res;
    })
   }

  ngOnInit() {
  }
  
  
  UpdateEmp(employee){
    this.myroute.navigate(['updateemp',employee])
  }

}
