import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ShowcaseComponent } from './home/showcase/showcase.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatButtonModule} from '@angular/material/button';
import { VideoComponent } from './video/video.component';


@NgModule({
  declarations: [HomeComponent,
    ShowcaseComponent,
    ContactUsComponent,
  VideoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    TextFieldModule,
    MatButtonModule
    
    


  ]
})
export class HomeModule { }
