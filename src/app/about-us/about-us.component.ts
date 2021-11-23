import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  
  title = 'About Us';
  constructor(
    private titleService: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  	this.meta.updateTag({name: 'keywords', content: 'About Us'});
    this.meta.updateTag({name: 'description', content: 'About Us'});
    this.meta.updateTag({name: 'author', content: 'About'});
    this.meta.updateTag({name: 'robots', content: 'index, follow'});
  }

  id:any;
  tabTeamChange(ids:any){
    this.id = ids;
  }
  ClseTeam(){
    $('.teamQry-wrapBx').removeClass('active');
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

  TeamSldrmnvr: OwlOptions  = {
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
    autoplay: false,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
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

  EgumntSlider: OwlOptions  = {
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
    autoplay: false,
    margin: 40,
    responsive: {
      0: {
        items: 1,
        margin: 10
      },
      400: {
        items: 2,
        margin: 10
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

  AcevrntSemnvr: OwlOptions  = {
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
    margin: 50,
    center: true,
    responsive: {
      0: {
        items: 2,
        margin: 20
      },
      400: {
        items: 2,
        margin: 20
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


  

}
