import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {

  title = 'Treatments';
  constructor(
    private titleService: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  	this.meta.updateTag({name: 'keywords', content: 'Treatments'});
    this.meta.updateTag({name: 'description', content: 'Treatments'});
    this.meta.updateTag({name: 'author', content: 'Treatments'});
    this.meta.updateTag({name: 'robots', content: 'index, follow'});
    $('.QuiKeQy,.EnqPhone,.BtnGetQuote').click(function(e) {
      e.preventDefault();
      let txtChmgr = " Submit";
      const hdcngemn = "Quick inquiry";
      $('.hdchngrmn').text(hdcngemn);
      $('.BtnSubSecShow').children('span').text(txtChmgr);
      $('.PopContntBx').addClass('OpnPopCntct');
    });
    $('.PopBxCls').click(function() {
      $('.PopContntBx').removeClass('OpnPopCntct');
  });
  }

}
