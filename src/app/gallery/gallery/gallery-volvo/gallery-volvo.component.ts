import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { GalleryService } from '../../gallery.service';

@Component({
  selector: 'app-gallery-volvo',
  templateUrl: './gallery-volvo.component.html',
  styleUrls: ['./gallery-volvo.component.scss']
})
export class GalleryVolvoComponent implements OnInit {
  albums: Array<Album> = []

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
   this.albums= this.galleryService.getAlbums()
  }
}
