import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Title, Meta } from '@angular/platform-browser';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})


export class GalleryComponent implements OnInit {

  settings = {
    counter: false,
    controls: true,
    download: false, 
    plugins: [lgZoom]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  GlyrSldmnvr: OwlOptions  = {
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
    margin: 0,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
 

  id:any = "one";
  tabChange(ids:any){
    this.id = ids;
  }

  GlrySldrmnvr:boolean=false;
  // GalryPoup(){
  //   this.GlrySldrmnvr=true;
  // }

  public myGalleryFunction(message : string){
    this.GlrySldrmnvr=true;
    // alert(message);
    $('.ImgApndMnvr').attr('src',message);
}

  ClseGlymn(){
    this.GlrySldrmnvr=false;
  }

  title = 'Gallery';
  constructor(
    private titleService: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  	this.meta.updateTag({name: 'keywords', content: 'Gallery'});
    this.meta.updateTag({name: 'description', content: 'Gallery'});
    this.meta.updateTag({name: 'author', content: 'Gallery'});
    this.meta.updateTag({name: 'robots', content: 'index, follow'});
    $('.cl4mnvrSwn').click(function() {
      
      // var ImgArmnvr = $(this).attr("1");
      // var ImgArmnvr = '1';
      // alert();
      // $('.ImgApndMnvr').attr('src', ImgArmnvr);
    });
  }

}
