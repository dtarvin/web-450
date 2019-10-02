import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PresentationService } from './presentation.service';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Presentation {
  name: string;
  image: string[];
}

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  // presentation;
  presentationName: string;
  // slides: any[];
  presentation: any;
  rest: any;
  valueStream: any;
  waterfall: any;

  // constructor(private route: ActivatedRoute, private http: HttpClient,
  //             private presentationService: PresentationService) {
  //   this.presentationName = route.snapshot.paramMap.get('name');
  //   this.presentation = this.presentationService.getPresentation(this.presentationName);
  //       .filter(p => p.name === this.presentationName);
        
  // }  

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    
    this.presentationName = route.snapshot.paramMap.get('name'); 
    if (this.presentationName = 'rest-and-the-web') {
      this.presentation = 'rest';
    } else if (this.presentationName = 'technology-value-stream') {
      this.presentation = 'valueStream';
    } else {
      this.presentation = 'waterfall';
    }

    this.rest = [
      { name: "Slide1"}, { name: "Slide2"}, { name: "Slide3"}, { name: "Slide4"},
      { name: "Slide1"}, { name: "Slide6"}, { name: "Slide7"}, { name: "Slide8"},
      { name: "Slide9"}, { name: "Slide10"}, { name: "Slide11"}, { name: "Slide12"},
      { name: "Slide13"}, { name: "Slide14"}, { name: "Slide15"}
    ];
    this.valueStream = [
      { name: "Slide1"}, { name: "Slide2"}, { name: "Slide3"}, { name: "Slide4"},
      { name: "Slide1"}, { name: "Slide6"}, { name: "Slide7"}, { name: "Slide8"},
      { name: "Slide9"}, { name: "Slide10"}, { name: "Slide11"}, { name: "Slide12"},
      { name: "Slide13"}
    ];
    this.waterfall = [
      { name: "Slide1"}, { name: "Slide2"}, { name: "Slide3"}, { name: "Slide4"},
      { name: "Slide1"}, { name: "Slide6"}, { name: "Slide7"}, { name: "Slide8"},
      { name: "Slide9"}, { name: "Slide10"}, { name: "Slide11"}, { name: "Slide12"},
      { name: "Slide13"}, { name: "Slide14"}, { name: "Slide15"}, { name: "Slide16"},
      { name: "Slide17"}, { name: "Slide18"}, { name: "Slide19"}, { name: "Slide20"},
      { name: "Slide21"}, { name: "Slide22"}, { name: "Slide23"}
    ];
  }

  ngOnInit() {
  }

}
