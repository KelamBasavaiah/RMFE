import { Modules } from "../model/modules.model";
// import{ Bug} from '../model/bug.model'
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import{element} from 'protractor';
import { Observable } from 'rxjs';

@Injectable()

export class ViewModuleService{
    viewmodules:any;
    
    
    
    constructor(private myHttp:HttpClient){
        this.viewmodules=[]
          
    }
   
    getModules(moduleId:string):Observable<any>
    {
        console.log(moduleId);
        return this.myHttp.get("https://localhost:44389/api/DeveloperBug?moduleId="+moduleId+"&value=value");
    }}