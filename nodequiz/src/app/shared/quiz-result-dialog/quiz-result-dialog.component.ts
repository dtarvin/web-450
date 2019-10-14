import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-quiz-result-dialog',
  templateUrl: './quiz-result-dialog.component.html',
  styleUrls: ['./quiz-result-dialog.component.css']
})
export class QuizResultDialogComponent implements OnInit {

  quizSummary: any;
  correctAnswers: any;
  selectedAnswers: any;
  employeeId: string;

  constructor(private dialogRef: MatDialogRef<QuizResultDialogComponent>, @Inject(MAT_DIALOG_DATA) data, private cookieService: CookieService) {
    this.quizSummary = data.quizSummary;
    console.log(data);
    this.correctAnswers = this.quizSummary.correctAnswers;
    this.selectedAnswers = this.quizSummary.selectedAnswers;
    this.employeeId = this.cookieService.get('employeeId');

  }

  ngOnInit() {
  }

}
