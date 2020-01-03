import{Add} from "../model/addmodule.model";
import {element} from 'protractor';
import { Injectable } from '@angular/core';

import { HttpClient,HttpRequest,HttpHeaders,HttpResponse, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request, post } from 'selenium-webdriver/http';


@Injectable()
export class AddModule{
    private servUrl="https://localhost:44329/api/Values";
    addmodule:any
    
        constructor(private myHttp:HttpClient){
        //this.addmodule=[];
        
    }
    addmodules(projectname:string,addmodule:Add[]):Observable<any>{
        console.log(addmodule);
       
            return this.myHttp.post("https://localhost:44389/api/ManagerFirst?projectname="+projectname,addmodule)
            
    }
    getProjectDate(projectId:string):Observable<any>{
        
       return this.myHttp.get("https://localhost:44389/api/CompletedProject?projectId="+projectId);
    }
  
   
    
}