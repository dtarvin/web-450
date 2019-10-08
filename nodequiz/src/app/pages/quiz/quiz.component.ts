/*
; ============================================
; Title:  quiz.component.ts
; Author: David Tarvin
; Date:   7 Oct 2019
; Description: NodeQuiz
;=============================================
*/

import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from './quiz.service';

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

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private quizService: QuizService,
    private router: Router) {
      this.quizName = route.snapshot.paramMap.get('name');
      console.log('Running getQuizzes from component');
      this.quizService.getQuizzes()
      .subscribe(res => {
        this.quizzes = res;
        console.log(this.quizzes);
        this.questions = this.quizzes.filter(p => p.name === this.quizName)[0].questions;
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
    console.log(" Value is " + value );
  }

  ngOnInit() {

  }

}
