import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class BugStatusService{
    mod:any;
    constructor(private myHttp:HttpClient){

}

UpdateStatus(bugstatus:string){
    console.log(bugstatus);
}

getModulesStatus(moduleId:string):Observable<any>
{
console.log(moduleId);
return this.myHttp.put("https://localhost:44389/api/DeveloperBug?value="+moduleId,this.mod);
}
       
}