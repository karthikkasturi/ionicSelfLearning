import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SwFilmsReorderPage } from './sw-films-reorder.page';

const routes: Routes = [
  {
    path: '',
    component: SwFilmsReorderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SwFilmsReorderPage]
})
export class SwFilmsReorderPageModule {
}
