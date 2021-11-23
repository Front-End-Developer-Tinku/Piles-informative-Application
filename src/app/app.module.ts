import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TreatmentsDetailsComponent } from './treatments-details/treatments-details.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LightgalleryModule } from 'lightgallery/angular';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    AboutUsComponent,
    ContactUsComponent,
    FaqsComponent,
    TreatmentsComponent,
    BlogsComponent,
    BlogDetailsComponent,
    GalleryComponent,
    TreatmentsDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    LightgalleryModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
