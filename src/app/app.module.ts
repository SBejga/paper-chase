import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { RoutesPage } from '../pages/routes/routes';
import { TabsPage } from '../pages/tabs/tabs';
import {HistoryPage} from "../pages/history/history";
import {CurrentPage} from "../pages/current/current";
import { UserService } from '../providers/user-service';
import { PathService } from '../providers/path-service';
import { PathListComponent } from '../components/path-list/path-list';
import { GeoLocationService } from '../providers/geo-location-service';
import { DeviceOrientationService } from '../providers/device-orientation-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    RoutesPage,
    TabsPage,
    HistoryPage,
    CurrentPage,
    PathListComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    RoutesPage,
    TabsPage,
    HistoryPage,
    CurrentPage,
    PathListComponent
  ],
  providers: [
    PathService,
    UserService,
    GeoLocationService,
    DeviceOrientationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
