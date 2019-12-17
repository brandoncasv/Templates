import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CameraCordovaPage } from './camera-cordova.page';

const routes: Routes = [
  {
    path: '',
    component: CameraCordovaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CameraCordovaPageRoutingModule {}
