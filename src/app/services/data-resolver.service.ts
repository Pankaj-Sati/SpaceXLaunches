import { isPlatformServer } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { makeStateKey, TransferState } from "@angular/platform-browser";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { first, tap } from "rxjs/operators";
import { SpaceXProgram } from "../model/program.data";
import { ApiCallService } from "./api-call.service";

@Injectable({providedIn:'root'})
export class LaunchDataResolver implements Resolve<any>
{
    private isPlatformServer=false;

    constructor(private apiService:ApiCallService,
            @Inject(PLATFORM_ID) platformId:string,
            private stateTransfer:TransferState
        )
    {
        this.isPlatformServer=isPlatformServer(platformId); //To know where our code is running
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> | Promise<any> {
        
        const KEY=makeStateKey<any>('launchItems');
        if(this.stateTransfer.hasKey(KEY))
        {
            //If already our data is available, we will use it
            const data=this.stateTransfer.get(KEY,[]);
            this.stateTransfer.remove(KEY); //Remove the data once we have used it
            return of(data);
        }
        else
        {
            //Key not available, get the data 
            return this.apiService.getLaunches(route.queryParams).pipe(
                first(),
                tap(data=>
                {
                    console.log('Tapping data');
                    if(this.isPlatformServer)
                    {
                        //On server, we will set the data in Transfer State
                        this.stateTransfer.set(KEY,data);
                    }

                }))
        }
    }

    
}