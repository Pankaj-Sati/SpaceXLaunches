import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchesComponent } from './launches/launches.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UtilityModule } from './utility-components/utility.module';
import { ResponseInterceptor } from './interceptors/response.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    UtilityModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ResponseInterceptor,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
