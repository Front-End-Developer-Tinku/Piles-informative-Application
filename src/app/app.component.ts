import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Goyal Piles';
  constructor(
    private titleService: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
  	this.titleService.setTitle(this.title);
  	this.meta.updateTag({name: 'keywords', content: 'Goyal Piles Home'});
    this.meta.updateTag({name: 'description', content: 'Goyal Piles Home '});
    this.meta.updateTag({name: 'author', content: 'rsgitech Home'});
    this.meta.updateTag({name: 'robots', content: 'index, follow'});
  }

  pageMeta(){
    this.ngOnInit();
  }
  
}
