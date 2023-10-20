import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryRoutingModule } from './galler-routing.module';
import { GalleryVolvoComponent } from './gallery/gallery-volvo/gallery-volvo.component';



@NgModule({
  declarations: [GalleryComponent,
  GalleryVolvoComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule
  
  ]
})
export class GalleryModule { }
