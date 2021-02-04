import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class ApiCallService
{
    // public static readonly API_ENDPOINT="https://api.spaceXdata.com/v3/launches";
    public static readonly API_ENDPOINT="api/launches";
    constructor(private http:HttpClient)
    {

    }

    getLaunches(params:any)
    {
        console.log(params);
        return this.http.get(ApiCallService.API_ENDPOINT,
            {
                params:params
            });
    }
}