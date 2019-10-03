import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PresentationService {

  constructor(private http: HttpClient) { }

  getPresentations() {
    return this.http.get('./assets/presentations.json');
  }

}
