/*
; ============================================
; Title:  quiz-summary-dialog.component.ts
; Author: David Tarvin
; Date:   13 Oct 2019
; Description: NodeQuiz
;=============================================
*/

import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-quiz-summary-dialog',
  templateUrl: './quiz-summary-dialog.component.html',
  styleUrls: ['./quiz-summary-dialog.component.css']
})
export class QuizSummaryDialogComponent implements OnInit {

  quizSummary: any;
  correctAnswers: any;
  selectedAnswers: any;
  employeeId: string;

  constructor(private dialogRef: MatDialogRef<QuizResultDialogComponent>, @Inject(MAT_DIALOG_DATA) DataCue, private cookieService: CookieService) {

  }

  ngOnInit() {
  }

}
