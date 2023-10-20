import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { Album } from './album';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  albums: Array<Album> = []

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
   this.albums= this.galleryService.getAlbums()
  }

}
