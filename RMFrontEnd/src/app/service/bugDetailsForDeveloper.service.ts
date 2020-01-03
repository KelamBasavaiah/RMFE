import{ Modules } from "../model/modules.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {  from,Observable } from 'rxjs';

@Injectable()
    

export class BugService{
    bugs:any;
    username:string
    constructor(private myHttp:HttpClient){
        this.bugs=[];
    }
    getDataFromAPI(){
        this.username=localStorage.getItem('username')
        return this.myHttp.get("https://localhost:44389/api/DeveloperBug?username="+this.username);
    }
    getAllModuleNamesAndBugNames(para):Observable<any>
    {
      return this.getDataFromAPI();
    }
    getBugs(bmodulename:string):Modules{
        var bug:Modules=null;
        for(var i=0;i<this.bugs.length;i++){
        if(this.bugs[i].Modulename==bmodulename)
        {
            bug=this.bugs[i];
            break;
        }
    }
    return bug;
}
getAllBugs():Modules[]{
    return this.bugs;
 }

}