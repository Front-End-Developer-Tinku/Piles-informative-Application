import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  title = 'Blog';
  constructor(
    private titleService: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  	this.meta.updateTag({name: 'keywords', content: 'Blog'});
    this.meta.updateTag({name: 'description', content: 'Blog'});
    this.meta.updateTag({name: 'author', content: 'Blog'});
    this.meta.updateTag({name: 'robots', content: 'index, follow'});
    $('.Slctbx').click(function () {
      $('.BlogDrpden').slideToggle('slow');
  });
  $('.BlogDrpden li a').click(function (){
       var texvrmn = $(this).text();
       $('.DrpSlmn').text(texvrmn);
       $('.BlogDrpden').slideUp('slow');

  });
  }

}
