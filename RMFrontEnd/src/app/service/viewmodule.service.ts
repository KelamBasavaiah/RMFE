import {Module} from "../model/viewmodule.model";
import {HttpClient} from "@angular/common/http";
import{Injectable} from '@angular/core';
import { from, Observable } from 'rxjs';
@Injectable()
export class viewmoduleService{
    modules:any;
    projName:string;
    constructor(private myHttp:HttpClient){
        this.modules=[];
    }

    
    
      
    }