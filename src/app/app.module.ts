import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {AidocComponent} from './aidoc/aidoc.component';
import { ProjectComponent } from './project/project.component';
import { IntroComponent } from './intro/intro.component';
import { WorkexpComponent } from './workexp/workexp.component';
import { EducationComponent } from './education/education.component';
import { ReferralsComponent } from './referrals/referrals.component';

@NgModule({
  declarations: [
    AppComponent,
    AidocComponent,
    ProjectComponent,
    IntroComponent,
    WorkexpComponent,
    EducationComponent,
    ReferralsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
