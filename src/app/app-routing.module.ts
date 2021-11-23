import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TreatmentsDetailsComponent } from './treatments-details/treatments-details.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'faqs',
    component: FaqsComponent
  },
  {
    path: 'treatments',
    component: TreatmentsComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: 'blog-details',
    component: BlogDetailsComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'treatments-details',
    component: TreatmentsDetailsComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  { path: '', redirectTo: '/index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
