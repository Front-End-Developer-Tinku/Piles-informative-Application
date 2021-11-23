$(document).ready(function(){



    // $(".VideObtnSec").click(function () {
    //     $(".pop_up_vdo1").show('slow');
    //     $(".vdo_onply1").addClass("vdo_onply_ad1");
    //     var Vdefrm = $(this).attr("data-atrshw");
    // $(".TstIfrmeSec").attr("src", Vdefrm);
    //     $(".TstIfrmeSec").attr("src", $(".TstIfrmeSec").attr("src").replace("autoplay=0", "autoplay=1"));
    // });

    // $(".ClseIfrmSec").click(function(){
    //     $(".pop_up_vdo1").hide('slow');
    //     $(".TstIfrmeSec").attr("src", $(".TstIfrmeSec").attr("src").replace("autoplay=1", "autoplay=0"));
    // });

  

    // $('.tabmnclr').click(function () {
    //     $('.tabmnclr').removeClass('actmnTbmn');
    //     $(this).addClass('actmnTbmn');
    //     var mnSwnTun = $(this).attr('data-mntab');
    //     $('.TblmCrvrSwn').slideUp('slow');
    //     $('.TblmCrvrSwn').each(function () {
    //         if($(this).attr('data-cntglmn') == mnSwnTun){
    //             $(this).slideDown('slow');
    //         }
    //     });    
    // });

    topHdr = $('header').innerHeight();
    $('main').css({ 'margin-top': topHdr });

    // $(".HdrArow").on("click", function () {
    //     $("#menu-off-canvas").show();
    //     $("body, .HdrArow, #menu-off-canvas").toggleClass("menu-active");
    //     // alert();
    // });
    // $("#menu-off-canvas").on("click", function (t) {
    //     $(this).hasClass("menu-active") && "menu-off-canvas" == $(t.target).attr("id") && $("body, .HdrArow, #menu-off-canvas").toggleClass("menu-active");
    // });

    // $(document).keyup(function (t) {
    //     "Escape" == t.key && $("body").hasClass("menu-active") && $("body, .HdrArow, #menu-off-canvas").toggleClass("menu-active");
    // });
    // $(".menu-close").on("click", function () {
    //     $("body, .HdrArow, #menu-off-canvas").toggleClass("menu-active");
    // });

   

//    $('.ClsmbtnSwn').click(function() {
//         $('.GlyPoumncvrSwn').slideUp('OpnPopCntct');
//    });

//    $('.cl4mnvrSwn').click(function() {
//         $('.GlyPoumncvrSwn').slideDown('OpnPopCntct');
//    });

//    $('.cl4mnvrSwn').click(function() {
//        alert();
//      var ImgArmnvr = $(this).children().find('img').attr('src');
//      $('.ImgApndMnvr').attr('src',ImgArmnvr);
//    });
//    $('.teamQryBtn').click(function() {
//        alert();
//     });

    // $('.teamQryBtn').click(function() {
    //     $('.teampop-wrapper').addClass('popShow');
    //     $('.abtLdrBx-wrap').hide();
    //     var thisIndex = $(this).attr('data-index');
    //     $('.teamQry-wrapBx').each(function() {
    //         if ($(this).attr('id') == thisIndex) {
    //             $('.teamQry-wrapBx').removeClass('active');
    //             $(this).addClass('active');                        
    //         }
    //     });
    // });

    // $('.popCls , .bckLyr').click(function(){
    //     $('.teampop-wrapper').removeClass('popShow');
    //     $('.teamQry-wrapBx').removeClass('active');
    //     $('.abtLdrBx-wrap').hide();
    // });

  
});