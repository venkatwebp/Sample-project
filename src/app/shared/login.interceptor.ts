import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const startTime = (new Date()).getTime();
    return next.handle(request).pipe(
      map((event: any) => {
        if(event instanceof HttpResponse){
          const endTime = (new Date()).getTime();
          const difference = endTime - startTime;
          console.log(event.url + 'Url completes ' + difference + ' milli seconds');
        }
          
          return event;
      })
    )
  }
}
