import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ShowcaseComponent } from './home/showcase/showcase.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';


@NgModule({
  declarations: [HomeComponent,
  ShowcaseComponent,
ContactUsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    
  ]
})
export class HomeModule { }
