import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceRegistrationPage } from './service-registration';

@NgModule({
  declarations: [
    ServiceRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceRegistrationPage),
  ],
})
export class ServiceRegistrationPageModule {}
