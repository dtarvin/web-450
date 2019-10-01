import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  presentationName: string;
  images: any[];

  constructor(private route: ActivatedRoute) { 
    this.presentationName = route.snapshot.params.name;
  }

  ngOnInit() {
  }

}
