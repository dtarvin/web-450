/*
; ============================================
; Title:  app.module.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   26 Sep 2019
; Description: NodeQuiz
;=============================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './shared';
import { CumulativeSummaryComponent } from './pages/cumulative-summary/cumulative-summary.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';

import { AuthGuard } from './shared/guards/auth.guard';
import { CookieService } from 'ngx-cookie-service';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    CumulativeSummaryComponent,
    DashboardComponent,
    LoginComponent,
    NotFoundComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: false }),
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
              AuthGuard, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
