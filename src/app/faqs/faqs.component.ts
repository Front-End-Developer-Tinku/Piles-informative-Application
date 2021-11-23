import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  title = 'Faqs';
  constructor(
    private titleService: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  	this.meta.updateTag({name: 'keywords', content: 'Faqs'});
    this.meta.updateTag({name: 'description', content: 'Faqs'});
    this.meta.updateTag({name: 'author', content: 'Faqs'});
    this.meta.updateTag({name: 'robots', content: 'index, follow'});
    $('.HdingPlumnvr').click(function() {  
      $(this).parents('.WhsNtRpntmnvr').siblings().find('.CntSliduvrSwn').slideUp('slow');
      $(this).parents('.WhsNtRpntmnvr').siblings().find('.bckPlmvr').removeClass('MinusAdd');
      $(this).parents('.WhsNtRpntmnvr').siblings().find('.HdingPlumnvr').removeClass('ActeTab');
      $(this).parents('.WhsNtRpntmnvr').find('.CntSliduvrSwn').slideToggle('slow');
      $(this).find('.bckPlmvr').toggleClass('MinusAdd');
      $(this).toggleClass('ActeTab');
  });
  }

}
