import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public youtubeUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=0';
  public youtubeId= 'dQw4w9WgXcQ';
  public embedUrl= 'https://www.youtube.com/embed/';
  public autoPlay = '?autoplay=0'
  videoUrl: string;

  constructor() {
    this.videoUrl =  this.embedUrl + this.youtubeId;
   }

  ngOnInit() { 
  }

}
