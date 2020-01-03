import{Modules} from '../model/modules.model'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class Userloginservice{
    userlogin:any;
    result:string;
    constructor(private myHttp:HttpClient){}
    adduser(userlogin:Modules){
         return this.myHttp.get("https://localhost:44368/api/values?username="+userlogin.Username+"&password="+userlogin.Password+"&role="+"role")
        //     console.log(res);
            
        //     this.userlogin=res.toString();
        // })
        //debugger;
        console.log(userlogin);
        //return this.userlogin;
        // return true;
        

    }


    

}