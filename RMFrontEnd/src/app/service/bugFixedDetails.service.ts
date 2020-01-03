import { Injectable } from '@angular/core';
import { Modules } from '../model/modules.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TesterBugDetailService {
bugDetail:any;
bFMCount:any;
username:string;
constructor(private myHttp:HttpClient) 
{ 
  this.bugDetail=[]
  }


  getBugDataFromAPI(){
    this.username=localStorage.getItem('username')
    return this.myHttp.get("https://localhost:44389/api/TesterBug?username="+this.username);
 }

 getsomething():Observable<any>{
   return this.getBugDataFromAPI();
 }

}