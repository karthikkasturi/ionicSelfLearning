import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'page2', loadChildren: './page2/page2.module#Page2PageModule' },
  { path: 'session-page', loadChildren: './session-page/session-page.module#SessionPagePageModule' },
  { path: 'sw-films', loadChildren: './sw-films/sw-films.module#SwFilmsPageModule' },
  { path: 'sw-film-details/:id', loadChildren: './sw-film-details/sw-film-details.module#SwFilmDetailsPageModule' },
  { path: 'sw-infinite', loadChildren: './sw-infinite/sw-infinite.module#SwInfinitePageModule' },
  { path: 'sw-session', loadChildren: './sw-session/sw-session.module#SwSessionPageModule' },
  { path: 'navparams', loadChildren: './navparams/navparams.module#NavparamsPageModule' },
  { path: 'navparams-page', loadChildren: './navparams-page/navparams-page.module#NavparamsPagePageModule' },
  { path: 'sw-films-reorder', loadChildren: './sw-films-reorder/sw-films-reorder.module#SwFilmsReorderPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
