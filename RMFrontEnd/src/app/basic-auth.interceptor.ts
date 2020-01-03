import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../app/service/authentication.service';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        const currentUser = localStorage.getItem('currentUser');
        console.log(currentUser);
        if (currentUser!=null) {
            request = request.clone({
                headers:request.headers.set('JWT_TOKEN',localStorage.getItem('currentUser'))
            }
            );
        }

        return next.handle(request);
    }
}
