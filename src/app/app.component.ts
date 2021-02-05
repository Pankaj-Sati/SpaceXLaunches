import { Component } from '@angular/core';
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

  }

}
