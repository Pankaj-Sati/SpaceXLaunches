import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppSettingsService } from './services/app-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SpaceXLaunch';

  constructor(public appSettings:AppSettingsService)
  {
    if(environment.production && window)
    {
      window.console.log=()=>{}; //Disabling console log on production
    }
  }

}
