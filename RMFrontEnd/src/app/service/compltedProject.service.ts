import {Modules} from "../model/modules.model"
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable()
export class CompletedProjectService{
    projects:Modules[]
    username:string

    constructor(private myHttp:HttpClient){       
        this.projects=[];
        
    }
     getProjects():Observable<any>{
         this.username=localStorage.getItem('username');
        return this.myHttp.get("https://localhost:44389/api/Login?username="+this.username);
     }
    }