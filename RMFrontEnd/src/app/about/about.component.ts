import { Component, OnInit } from '@angular/core';
import {Modules} from '../model/modules.model';
import {CompletedModuleService} from '../service/completedModule.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
employee:Modules;
  constructor(private compltedModule:CompletedModuleService, private router:Router) {
    this.employee=new Modules();
   }

  ngOnInit() {
  }
  submit(){
    this.compltedModule.updatepassword(this.employee).subscribe((res)=>{
      console.log(res)
    }
    )
  }

}
