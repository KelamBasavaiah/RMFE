import { Injectable } from '@angular/core';
import { Modules } from '../model/modules.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TesterViewModuleService {
  viewmodules:any
  username:string;
  P_Name="Release Management System";

  constructor(private myHttp:HttpClient){
      this.viewmodules=[];
  }
  
getAllTestModules(projectId:string):Observable<any>{
  this.username=localStorage.getItem('username')
    return this.myHttp.get("https://localhost:44389/api/Tester?P_Id="+projectId+"&username="+this.username);
}
}