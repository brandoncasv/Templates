import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CameraCordovaPageRoutingModule } from './camera-cordova-routing.module';

import { CameraCordovaPage } from './camera-cordova.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraCordovaPageRoutingModule
  ],
  declarations: [CameraCordovaPage]
})
export class CameraCordovaPageModule {}
