
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { SpaceXProgram } from "../model/program.data";

@Injectable({
    providedIn:'root'
})
export class ApiCallService
{
    public static readonly API_ENDPOINT="https://api.spaceXdata.com/v3/launches"; 
    constructor(private http:HttpClient)
    {

    }

    getLaunches(params:any)
    {
        console.log('IN getLaunches()',params);
        return this.http.get(ApiCallService.API_ENDPOINT,
            {
                params:params
            })
            .pipe(map((data:any)=>
                {
                    console.log('Getting data to map');
                    try{
                        let trimmedResponse=[];
                        data.forEach((launchItem) => {
                          let item:SpaceXProgram={
                                flight_number:launchItem.flight_number==null?'Not Available':launchItem.flight_number,
                                mission_name:launchItem.mission_name==null?'Not Available':launchItem.mission_name,
                                mission_id:launchItem.mission_id==null?[]:launchItem.mission_id,
                                launch_year:launchItem.launch_year==null?'Not Available':launchItem.launch_year,
                                launch_success:launchItem.launch_success==null?'Not Available':launchItem.launch_success,
                                images:{
                                    small:launchItem.links.mission_patch_small,
                                    large:launchItem.links.mission_patch
                                },
                                land_success:launchItem.rocket.first_stage.cores[0].land_success==null?'Not Available':launchItem.rocket.first_stage.cores[0].land_success
                            };
                          trimmedResponse.push(item);
                        });
                        return trimmedResponse;
                      }
                      catch(error)
                      {
                        console.log(error);
                        // res.send(response.data);
                        return [];
                      }
                }));
    }
}