import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  BlogDtlSldrMnVr: OwlOptions  = {
    loop: false,
    items: 3,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 2000,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    smartSpeed: 2000,
    navText: ['<div class="lftCr"></div>', '<div class="rgtCr"></div>'],
    autoplay: true,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  constructor() { }
  ngOnInit(): void {
  
  }

}
