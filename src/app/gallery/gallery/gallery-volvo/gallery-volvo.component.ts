import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { GalleryService } from '../../gallery.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-gallery-volvo',
  templateUrl: './gallery-volvo.component.html',
  styleUrls: ['./gallery-volvo.component.scss']
})
export class GalleryVolvoComponent implements OnInit {
  album: Album
  id: string

  constructor(private galleryService: GalleryService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')

      this.album = this.galleryService.getAlbums().find((element) => element.link == this.id)

      console.log(this.id)
      console.log(this.album)
      console.log(params)
    })



  }
}
