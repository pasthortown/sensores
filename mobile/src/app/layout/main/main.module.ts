import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { GaugeModule } from 'angular-gauge';
import { IonicModule } from '@ionic/angular';

import { MainPage } from './main.page';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ControlService } from './../../services/negocio/control.service';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GaugeModule.forRoot(),
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainPage],
  providers: [ScreenOrientation, ControlService]
})
export class MainPageModule {}
