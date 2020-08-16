import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import {AidocComponent} from './projects/aidoc.component';


const routes: Routes = [
  { path: 'aidoc', component: AidocComponent},
]; // sets up routes constant where you define your routes


@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule { }
