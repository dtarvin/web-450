/*
; ============================================
; Title:  quiz-summary-dialog.component.spec.ts
; Author: David Tarvin
; Date:   13 Oct 2019
; Description: NodeQuiz
;=============================================
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSummaryDialogComponent } from './quiz-summary-dialog.component';

describe('QuizSummaryDialogComponent', () => {
  let component: QuizSummaryDialogComponent;
  let fixture: ComponentFixture<QuizSummaryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizSummaryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSummaryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
