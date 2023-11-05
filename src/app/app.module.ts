import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryModule } from './gallery/gallery.module';
import { VideoMarketingComponent } from './video-marketing/video-marketing/video-marketing.component';
import { VideoMarketingModule } from './video-marketing/video-marketing.module';
import { AboutUsModule } from './about-us/about-us.module';
import { FooterComponent } from './footer/footer.component';
import { ContactModule } from './contact/contact.module';


@NgModule({
  declarations: [		
    AppComponent,
      ToolbarComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    HomeModule,
    GalleryModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    VideoMarketingModule,
    AboutUsModule,
    ContactModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
