import{Modules} from "../model/modules.model";
import {element} from 'protractor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CreateService{
    managers:any;
    username:string;
    constructor(private myHttp:HttpClient){
        this.managers=[];
    }
     addProject(create:Modules):Observable<any>
     {
         this.username=localStorage.getItem('username')
        return this.myHttp.post("https://localhost:44389/api/Password?username="+this.username,create)
 }
    }