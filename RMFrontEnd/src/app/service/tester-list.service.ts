import { Modules } from "../model/modules.model";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {from,observable, Observable } from 'rxjs'

@Injectable()
export class TesterService{
    testers:any;
    
    constructor(private myHttp:HttpClient){
        this.testers=[
            

        ];
    }
    grtModulesFromAPI(){
        return this.myHttp.get("https://localhost:44389/api/Values");
    }
    getTesters():Observable<any>{
        return this.grtModulesFromAPI();
    }
    assignTester(testerdetails:Modules){
        console.log(testerdetails);
        return this.myHttp.post("https://localhost:44389/api/Values",testerdetails)

    }
}