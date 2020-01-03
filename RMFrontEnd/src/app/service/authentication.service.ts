import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { Modules } from '../model/modules.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Modules>;
    public currentUser: Observable<Modules>;
  

    constructor(private http: HttpClient,private router:Router) {
        
        
    }

    public get currentUserValue(): Modules {
        return this.currentUserSubject.value;
    }

    login(user:Modules):Observable<any> {
        // return this.http.post<HttpResponse<Object>>(`${environment.apiUrl}/api/Login`,user,{observe:'response'}).pipe(
        //     tap(resp=>console.log('header',resp.headers.get("JWT_TOKEN")))
            
        // );
        
         return this.http.post<any>(`${environment.apiUrl}/api/Login`,user).pipe(tap(user => {
        //     // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
            
         console.log(user)
         localStorage.setItem('currentUser',user);
        //     user = window.btoa(user.Username + ':' + user.Password);
        //     //console.log('headers',user.headers.get('JWT_TOKEN'));
        //     localStorage.setItem('currentUser', user.headers.get('JWT_TOKEN'));
        //     this.currentUserSubject.next(user);
        //     return user;
    
        }))
            
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('username');
        this.router.navigate(['login-page'])
    }
}
