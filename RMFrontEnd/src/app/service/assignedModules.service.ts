import{Modules} from "../model/modules.model";
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from,observable, Observable } from 'rxjs'
@Injectable()
export class ModuleService{
    modules:any;
    module:string="Hiii" 
    username:string;  
    constructor(private myHttp:HttpClient){
        this.modules=[]


    }

    
    getModulesFromAPI(){
        this.username=localStorage.getItem('username')
        return this.myHttp.get("https://localhost:44389/api/Values?username="+this.username);
    }
    getModules():Observable<any>{
        return this.getModulesFromAPI()
    }
    
    moduleStatus(moduleName:string,module:Modules):Observable<any>{
        debugger;
console.log(moduleName);
console.log(module);
return this.myHttp.put("https://localhost:44389/api/Values?modulename="+moduleName,module);

    }

}