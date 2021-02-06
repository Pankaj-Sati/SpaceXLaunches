import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {catchError, map} from 'rxjs/operators';
import { AppSettingsService } from "../services/app-settings.service";

@Injectable(
    {
        providedIn:'root'
    })
export class ResponseInterceptor implements HttpInterceptor
{
    count=0;

    constructor(private appSettings:AppSettingsService)
    {

    }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {
  
        return next.handle(req).pipe(
            
            catchError((err,event)=>
                {
                    console.log('Caught error',err);
                    if(err instanceof HttpErrorResponse)
                    {
                        this.count--;
                        if(this.count<=0)
                        {
                            this.appSettings.hideLoader();
                            this.count=0; //Reset the counter
                        }
                        console.log('Intercepting error response',this.count,this.appSettings.isLoaderDisplaying);
                    }
                    else
                    {
                        console.log('In else');
                    }
                    return new Observable<HttpEvent<any>>();
                }),

            map((event:HttpEvent<any>)=>
                {
                    if(event instanceof HttpResponse)
                    {
                        //Response
                        this.count--;
                        if(this.count<=0)
                        {
                            this.appSettings.hideLoader();
                            this.count=0; //Reset the counter
                        }
                       
                    }
                    else
                    {
                        //Request
                        this.count++;
                        this.appSettings.showLoader();
                      
                    }
                    return event;
                })
        )   
        
    }
    
}