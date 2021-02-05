import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class AppSettingsService
{
    private isLoader=true; //For displaying and hiding the loader

    public showLoader()
    {
        this.isLoader=true;
    }

    public get isLoaderDisplaying():boolean
    {
        return this.isLoader;
    }

    public hideLoader()
    {
        this.isLoader=false;
    }
}