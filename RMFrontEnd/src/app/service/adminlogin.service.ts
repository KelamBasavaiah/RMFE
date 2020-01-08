import {Modules} from '../model/modules.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {from,observable, Observable } from 'rxjs'

@Injectable()
export class AdminValueService{
    constructor(private myHttp:HttpClient){}

    addInsert(admin){
        console.log(admin)
        return this.myHttp.post("https://localhost:44389/api/Admin",admin)

    }
    getEmployee():Observable<any>{
        return this.myHttp.get("https://localhost:44389/api/Admin")
    }
    update(employee):Observable<any>{
        return this.myHttp.put("https://localhost:44389/api/admin",employee)
    }
    getdata(empid:string):Observable<any>{
        return this.myHttp.get("https://localhost:44389/Values?empId="+empid);
    }
    
}