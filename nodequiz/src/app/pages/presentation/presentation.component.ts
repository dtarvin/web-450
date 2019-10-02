import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PresentationService } from './presentation.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  presentationName: string;
  slides: any[];

  constructor(private route: ActivatedRoute, private http: HttpClient,
              private presentationService: PresentationService) {
    this.presentationName = route.snapshot.paramMap.get('name');
    this.presentationService.getPresentations()
        .subscribe(data => {

        })
  }


  ngOnInit() {
  }

}
