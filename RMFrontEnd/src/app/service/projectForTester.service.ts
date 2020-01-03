import { Injectable } from '@angular/core';
import { Modules } from '../model/modules.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';



@Injectable()
  
export class TesterProjectService {
  projects:any;
  username:string;
  constructor(private myHttp:HttpClient){
    this.projects=[];
}


getAllTestProjects():Observable<any>
{
    this.username=localStorage.getItem('username');
    return this.myHttp.get("https://localhost:44389/api/Tester?username="+this.username);
}
   
}