import {Modules} from "../model/modules.model"
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable()
export class CompletedModuleService{
    modules:Modules[]
    projects:Modules[]
    modulecount:number
    username:string

    constructor(private myHttp:HttpClient){
        this.modules=[
           
        ];
        this.projects=[];
        
    }
    
    getModules():Observable<any>{

      this.username=localStorage.getItem('username')
        console.log(this.username)
        return this.myHttp.delete("https://localhost:44389/api/CompletedProject?userName="+this.username);
    }
    updatepassword(employee:Modules):Observable<any>{
        console.log(employee)
        console.log("hii")
        return this.myHttp.put("https://localhost:44389/api/Password",employee)

    }
 
    
}