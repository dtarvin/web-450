import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {


  // presentation: Presentation[];
  presentationName: string;
  presentations: any;
  images: any;

  constructor(private http: HttpClient) {
    // http.get('./assets/presentations')
    // .pipe(map(data => {}))
    // .subscribe(data => this.presentations = data);
  }

  // getPresentation(presentationName) {
  //   const presentation = this.presentations.filter(p => p.name === this.presentationName);
  //   return presentation.image;
  // }

  getPresentations() {
    return this.http.get('./assets/presentations.json');
  }

  // getPresentation(presentationName: string): Observable<Presentation[]> {
  //   return this.http.get<Presentation[]>('./assets/presentations.json').pipe(
  //     map(this.presentations.filter(p => p.name === presentationName)));
  // }

  // getPresentation(presentationName): Observable<any> {
  //   return this.http.get('./assets/presentations')
  //     .pipe(filter(p => p.name === this.presentationName);

  // }
}
