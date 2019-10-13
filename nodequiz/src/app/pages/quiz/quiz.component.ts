/*
; ============================================
; Title:  quiz.component.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/

import { filter } from 'rxjs/operators';
// import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from './quiz.service';
// import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizName: string;
  quizzes: any;
  quiz: any;
  questions: any;
  q: any;
  qs: any;
  // question: any;

  // quizId: number;
  // employeeId: number;
  // quizResults: any;

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private quizService: QuizService,
    private router: Router) {
      this.quizName = route.snapshot.paramMap.get('name');
      console.log('The quiz name is ', this.quizName);
      // this.quizId = parseInt(this.route.snapshot.paramMap.get('quizId'), 10);
      // this.employeeId = parseInt(this.cookieService.get('employeeId'), 10);
      console.log('Running getQuizzes from component');
      this.quizService.getQuizzes()
      .subscribe(res => {
        this.quizzes = res;
        console.log('The quizzes are as follows:', this.quizzes);
        this.questions = this.quizzes.filter(q => q.name === this.quizName)[0].questions;
        // this.quiz = this.quizzes.filter(q => q.quizId === this.quizId)[0];
        console.log(this.questions);
      })
  }

  goToQuiz(quizName) {
    this.quizName = quizName;
    console.log('The quiz name is ' + this.quizName);
    this.router.navigate(['/dashboard/quizzes/' + this.quizName]);
  }

  returnToPresentation(quizName) {
    this.quizName = quizName;
    this.router.navigate(['/dashboard/presentation/' + this.quizName]);
  }

  radioChange(value) {
    console.log(" Value is " + value);
  }
  // onSubmit(form) {
  //   this.quizResults = form;
  //   this.quizResults['employeeId'] = this.employeeId; // add the employeeId to the quizResults object
  //   this.quizResults['quizId'] = this.quizId; // add the quizId to the quizResults object

    // const dialogRef = this.dialog.open(QuizResultDialogComponent, {
    //   data: {
    //     quizResults: this.quizResults
    //   },
    //   disableClose: true,
    //   width: "800px"
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result === "confirm") {
    //     console.log(this.quizResults);
    //   }
    // });
  // }

  ngOnInit() {

  }

}
