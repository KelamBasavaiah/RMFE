import {Modules} from '../model/modules.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inherits } from 'util';
@Injectable()
export class Adminloginservice{
    adminlogin:any;
    result:string;
    constructor(private myHttp:HttpClient){}
    addUser(adminlogin:Modules)
    {
       return this.myHttp.get("https://localhost:44389/api/Login?username="+adminlogin.Username+"&password="+adminlogin.Password)
        //debugger;
        //console.log(adminlogin);
    
        //return this.result;

    }
}