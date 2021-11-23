import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() setPageMeta = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
    $(document).ready(function(){
      $('.teamQryBtn').click(function() {
        $('.teampop-wrapper').addClass('popShow');
        $('.abtLdrBx-wrap').hide();
        var thisIndex = $(this).attr('data-index');
        $('.teamQry-wrapBx').each(function() {
            if ($(this).attr('id') == thisIndex) {
                $('.teamQry-wrapBx').removeClass('active');
                $(this).addClass('active');                        
            }
        });
    });
      $('.popCls').click(function(){
          $('.teampop-wrapper').removeClass('popShow');
          $('.teamQry-wrapBx').removeClass('active');
          $('.abtLdrBx-wrap').hide();
      });  
    
    $('.QuiKeQy').click(function() {
      let txtChmgr = " Submit";
      const hdcngemn = "Quick inquiry";
      $('.hdchngrmn').text(hdcngemn);
      $('.BtnSubSecShow').children('span').text(txtChmgr);
    });

    });
  }

  MenuFnt:boolean=false;
  bacmnvr:boolean=false;
  MenuClnmn(){
    this.MenuFnt=true;
    this.bacmnvr=true;
  }
  header_variable=false; 
  ClseBtm(){
    this.MenuFnt=false;
    this.bacmnvr=false;
  }
  setMeta(){
    this.setPageMeta.emit();
  }
  @HostListener("document:scroll")
  scrollfuntion(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.header_variable=true;
    }else{
      this.header_variable=false;
    }
  }
}
