import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ComponentsComponent} from './home-page/components/components.component';
import {SensorsComponent} from './home-page/components/sensors/sensors.component';
import {ActuatorsComponent} from './home-page/components/actuators/actuators.component';
import {SensorComponent} from './home-page/components/sensors/sensor/sensor.component';
import {ActuatorComponent} from './home-page/components/actuators/actuator/actuator.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FlowsComponent} from './home-page/flows/flows.component';
import {FlowComponent} from './home-page/flows/flow/flow.component';
import {HttpClientModule} from '@angular/common/http';
import {PopoverModule} from 'ngx-popover';
import {ComponentsService} from './home-page/components/components.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ComponentsComponent,
    SensorsComponent,
    ActuatorsComponent,
    SensorComponent,
    ActuatorComponent,
    NavbarComponent,
    FlowsComponent,
    FlowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PopoverModule
  ],
  providers: [
    ComponentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
