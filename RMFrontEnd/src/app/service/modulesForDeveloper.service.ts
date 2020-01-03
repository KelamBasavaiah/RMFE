import {Modules} from "../model/modules.model";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ModulesForDeveloperService{
    //viewmodule:ViewModules[];
    views:any;
    username:string;
    projectName="Release Management System";


    constructor(private myHttp:HttpClient){
        this.views=[];
    }

    
     getModuleData(pname:string):Observable<any>{
         this.username=localStorage.getItem('username')

        return this.myHttp.get("https://localhost:44389/api/Developer?projectId="+pname+"&username="+this.username);
    }
}