import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Presentation {
  name: string;
  image: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PresentationService {

  // presentation: Presentation[];
  presentationName: string;
  presentations;

  constructor(private http: HttpClient) { 
    // http.get('./assets/presentations')
    // .pipe(map(data => {}))
    // .subscribe(data => this.presentations = data);
  }
  
  // getPresentation(presentationName) {
  //   const presentation = this.presentations.filter(p => p.name === this.presentationName);
  //   return presentation.image;
  // }

  getPresentation(presentationName) {
    this.http.get('./assets/presentations.json')
    .subscribe(res => {
      this.presentations = res;
      this.presentations.filter(p => this.presentations.name === this.presentationName);  
      return this.presentations.image.name;
    })   
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
