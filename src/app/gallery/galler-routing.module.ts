import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryVolvoComponent } from './gallery/gallery-volvo/gallery-volvo.component';


const routes: Routes = [
{path:'gallery', component: GalleryComponent},
{path:'gallery/volvo', component: GalleryVolvoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
