import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ComponentsComponent } from './home-page/components/components.component';
import { SensorsComponent } from './home-page/sensors/sensors.component';
import { ActuatorsComponent } from './home-page/actuators/actuators.component';
import { SensorComponent } from './home-page/sensor/sensor.component';
import { ActuatorComponent } from './home-page/actuator/actuator.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ComponentsComponent,
    SensorsComponent,
    ActuatorsComponent,
    SensorComponent,
    ActuatorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
