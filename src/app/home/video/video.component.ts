import { Component, OnInit } from '@angular/core';
import { VideoService } from './video.service';
import { Videos } from './videos';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor(private videosService: VideoService) { }
  videos: Array<Videos>
  ngOnInit() {
   this.videos = this.videosService.getVideos()
  }

}
