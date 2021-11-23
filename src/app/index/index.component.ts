import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  MainSliderHomePage: OwlOptions  = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 2000,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    smartSpeed: 2000,
    navText: ['', ''],
    autoplay: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  PatentsSlider: OwlOptions  = {
    loop: true,
    items: 3,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 2000,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    smartSpeed: 2000,
    navText: ['', ''],
    autoplay: true,
    margin: 20,
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
    nav: false
  }

  ReviewSlidr: OwlOptions  = {
    loop: true,
    items: 1,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 2000,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    smartSpeed: 2000,
    navText: ['<div class="lftCr"></div>', '<div class="rgtCr"></div>'],
    autoplay: false,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  AwrdSlider: OwlOptions  = {
    loop: true,
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
    autoplay: false,
    margin: 100,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      400: {
        items: 1,
        margin: 0,
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
    $('.QuiKeQy,.EnqPhone,.BtnGetQuote').click(function(e) {
      e.preventDefault();
     $('.PopContntBx').addClass('OpnPopCntct');
  });
  $('.PopBxCls').click(function() {
    $('.PopContntBx').removeClass('OpnPopCntct');
 });
  }

  VdeoGlyPup:boolean=false;
    public myVideoFunction(message : string){
      this.VdeoGlyPup=true;
      $(".TstIfrmeSec").attr("src", message);
  }
  ClseVideoGly(){
    this.VdeoGlyPup=false;
    $(".TstIfrmeSec").attr("src", '');
  }

}
