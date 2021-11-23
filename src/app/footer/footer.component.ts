import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.formcntl,input, textarea').focusout(function() {
      if ($(this).val() != '') {
          $(this).siblings('label').addClass('hasVal')
      } else {
          $(this).siblings('label').removeClass('hasVal')
      }
  });
    $('.QuiKeQy,.EnqPhone,.BtnGetQuote, .CstClsmntvr').click(function(e) {
      e.preventDefault();
     $('.PopContntBx').addClass('OpnPopCntct');
  });
  $('.PopBxCls').click(function() {
    $('.PopContntBx').removeClass('OpnPopCntct');
 });

 $('.CstClsmntvr').click(function() {
   let txtChmgr = "Get Cost Estimate Now";
   const hdcngemn = "Piles Treatments Cost Calculator";
   $('.hdchngrmn').text(hdcngemn);
   $('.BtnSubSecShow').children('span').text(txtChmgr);
 });

  }

}
