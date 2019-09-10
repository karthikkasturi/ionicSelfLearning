import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SwInfinitePage } from './sw-infinite.page';

const routes: Routes = [
  {
    path: '',
    component: SwInfinitePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SwInfinitePage]
})
export class SwInfinitePageModule {
  
}
