import { Modules } from "../model/modules.model";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {from,observable, Observable } from 'rxjs'

@Injectable()
export class DeveloperService{
    testers:any;
    
    constructor(private myHttp:HttpClient){
        this.testers=[
            

        ];
    }
    getModulesFromAPI(){
        return this.myHttp.get("https://localhost:44389/api/Values");
    }
    getDeveloper():Observable<any>{
        return this.getModulesFromAPI();
    }
    assignDeveloper(Developerdetails:Modules){
        console.log(Developerdetails);
        return this.myHttp.post("https://localhost:44389/api/CompletedProject?",Developerdetails)

    }
}