/**
 * Created by liuyangdong on 2016/7/4.
 */
$(function(){
    $('.btn').click(function(){
        var btnDisplay = $(this).siblings('.box').css('display');
       if(btnDisplay == "block" ){
           $('.box').css('display','none')
           $('.bottom').css('display','none')
       }
       if(btnDisplay == "none") {
           $('.box').css('display','none')
           $('.bottom').css('display','none')
           $(this).siblings('.box').toggle();
           $(this).find('.bottom').toggle();
       }
    })
})