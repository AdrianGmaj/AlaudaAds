import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoMarketingRoutingModule } from './video-marketing-routing.module';
import { VideoMarketingComponent } from './video-marketing/video-marketing.component';



@NgModule({
  declarations: [VideoMarketingComponent],
  imports: [
    CommonModule,
    VideoMarketingRoutingModule
  
  ]
})
export class VideoMarketingModule { }
