import {Modules} from "../model/modules.model";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';

@Injectable()
export class ProjectsForDeveloperService{
    projects:any;
    username:string;
    constructor(private myHttp:HttpClient){
        this.projects=[];
    }
    getProjectDataFromAPI(){
        this.username=localStorage.getItem('username')
       return this.myHttp.get("https://localhost:44389/api/Developer?username="+this.username);
    }
    getUserData():Observable<any>{
        return this.getProjectDataFromAPI()
    }
}