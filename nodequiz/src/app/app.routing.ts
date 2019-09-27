/*
; ============================================
; Title:  app.routing.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   26 Sep 2019
; Description: NodeQuiz
;=============================================
*/

import {Routes} from '@angular/router';
import {BaseLayoutComponent} from './shared';

export const AppRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      /*
        New components go here...
       */
    ]
  }
];
