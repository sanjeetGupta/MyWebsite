import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import {AidocComponent} from './aidoc/aidoc.component';
import {ProjectComponent} from './project/project.component';
import {IntroComponent} from './intro/intro.component';
import {WorkexpComponent} from './workexp/workexp.component';
import {EducationComponent} from './education/education.component';
import {ReferralsComponent} from './referrals/referrals.component';


const routes: Routes = [
  { path: 'aidoc', component: AidocComponent},
  { path: 'projects', component: ProjectComponent},
  {path: 'intro', component: IntroComponent},
  {path: 'workexp', component: WorkexpComponent},
  {path: 'education', component: EducationComponent},
  {path: 'referrals', component: ReferralsComponent}
]; // sets up routes constant where you define your routes


@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule { }
