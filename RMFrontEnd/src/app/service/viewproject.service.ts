import {Project} from "../model/viewproject.model";
import {HttpClient}from "@angular/common/http";
import{Injectable} from '@angular/core';
import { from, Observable,BehaviorSubject } from 'rxjs';
@Injectable()
export class viewprojectsService{
    projectName:string;
  username:string;
    constructor(private myHttp:HttpClient){
        
    }

    getProjectDetailsFromAPI(){
        this.username=localStorage.getItem('username')
        return this.myHttp.get("https://localhost:44389/api/ManagerFirst?username="+this.username);
        
    }
    getProjectData():Observable<any>
    { 
       return this.getProjectDetailsFromAPI()
    }

      getModuleData(projectid:string):Observable<any>{
        return this.myHttp.delete("https://localhost:44389/api/ManagerFirst?projectId="+projectid);
    }
}
    

      
    