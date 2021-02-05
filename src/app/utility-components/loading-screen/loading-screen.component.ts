import { Component } from "@angular/core";
import { AppSettingsService } from "src/app/services/app-settings.service";

@Component(
    {
        selector:'loading-screen',
        styleUrls:['./loading-screen.style.scss'],
        templateUrl:'./loading-screen.html'
    })

export class LoadingScreenComponent
{
    constructor(public appSettings:AppSettingsService)
    {

    }
}