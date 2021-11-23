import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-treatments-details',
  templateUrl: './treatments-details.component.html',
  styleUrls: ['./treatments-details.component.css']
})
export class TreatmentsDetailsComponent implements OnInit {

  TrSldrmnVrSwmvr: OwlOptions  = {
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
    margin: 15,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
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

  TrMnSldrMnvr: OwlOptions  = {
    loop: true,
    items: 2,
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
        items: 2
      }
    },
    nav: true
  }

  WhyCausPilemn: OwlOptions  = {
    loop: false,
    items: 5,
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
    margin: 10,
    responsive: {
      0: {
        items: 2,
        dots: true,
      },
      400: {
        items: 3
      },
      740: {
        items: 2
      },
      940: {
        items: 5
      }
    },
    nav: false
  }

  title = 'Treatments Details ';
  constructor(
    private titleService: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  	this.meta.updateTag({name: 'keywords', content: 'Treatments Details'});
    this.meta.updateTag({name: 'description', content: 'Treatments Details'});
    this.meta.updateTag({name: 'author', content: 'Treatments Details'});
    this.meta.updateTag({name: 'robots', content: 'index, follow'});
    $('.TblinUlmn ul li').click(function () {
      $('.TblinUlmn ul li').removeClass('actmn');
      $(this).addClass('actmn');
      var mnSwnTun = $(this).attr('data-attmntr');
      $('.tdmnvrSwnvr').slideUp('slow');
      $('.tdmnvrSwnvr').each(function () {
          if($(this).attr('data-trmnswn') == mnSwnTun){
              $(this).slideDown('slow');
          }
      });    
  });
  }

}
