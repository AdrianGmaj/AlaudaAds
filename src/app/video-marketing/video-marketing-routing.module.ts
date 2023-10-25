import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoMarketingComponent } from './video-marketing/video-marketing.component';



const routes: Routes = [
{path:'video-marketing', component: VideoMarketingComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoMarketingRoutingModule { }
