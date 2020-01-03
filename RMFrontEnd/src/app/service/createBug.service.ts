import { Injectable } from '@angular/core';
import { Modules } from '../model/modules.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TesterCreateBugService {
bugs:Modules[];
constructor(private myHttp:HttpClient)
{ 
  this.bugs=
  [
    
  ]
}
addBugs(createBug:Modules):Observable<any>{
 console.log(createBug);
  
  this.bugs=[new Modules]
  return this.myHttp.post("https://localhost:44389/api/TesterBug",createBug)
  
}
}