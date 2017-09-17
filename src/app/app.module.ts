import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ComponentsComponent} from './home-page/components/components.component';
import {SensorsComponent} from './home-page/components/sensors/sensors.component';
import {ActuatorsComponent} from './home-page/components/actuators/actuators.component';
import {SensorWidgetComponent} from './home-page/components/sensors/sensor-widget/sensor-widget.component';
import {ActuatorWidgetComponent} from './home-page/components/actuators/actuator-widget/actuator-widget.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FlowsComponent} from './home-page/flows/flows.component';
import {FlowComponent} from './home-page/flows/flow/flow.component';
import {HttpClientModule} from '@angular/common/http';
import {PopoverModule} from 'ngx-popover';
import {ComponentsService} from './home-page/components/components-service/components.service';
import {RouterModule, Routes} from '@angular/router';
import {ComponentDetailComponent} from './home-page/components/component-detail/component-detail.component';

const appRoutes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'component/:id', component: ComponentDetailComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ComponentsComponent,
    SensorsComponent,
    ActuatorsComponent,
    SensorWidgetComponent,
    ActuatorWidgetComponent,
    NavbarComponent,
    FlowsComponent,
    FlowComponent,
    ComponentDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    PopoverModule
  ],
  providers: [
    ComponentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
