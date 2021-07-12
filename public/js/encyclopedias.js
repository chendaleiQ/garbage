/*
 * @Author: your name
 * @Date: 2021-03-31 16:53:06
 * @LastEditTime: 2021-04-04 14:22:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \代码\src\js\encyclopedias.js
 */
// console.log($(window).scrollTop())
$(window).scroll(function(){
    var num =272-$(window).scrollTop();
    if($(window).scrollTop()<272){
        $('[id="active-s"]').removeAttr('id','active-s')
        $('[href="#one"]').attr('id','active-s')
        $('.right').css('top',num+'px')
    }else{
        $('.right').css('top','0px')
    }
    if($(window).scrollTop()>=648){
        $('[id="active-s"]').removeAttr('id','active-s')
        $('[href="#two"]').attr('id','active-s')
    }
    if($(window).scrollTop()>=1076){
        $('[id="active-s"]').removeAttr('id','active-s')
        $('[href="#three"]').attr('id','active-s')
    }
    if($(window).scrollTop()>=1840){
        $('[id="active-s"]').removeAttr('id','active-s')
        $('[href="#four"]').attr('id','active-s')
    }
    if($(window).scrollTop()>=3019){
        $('[id="active-s"]').removeAttr('id','active-s')
        $('[href="#five"]').attr('id','active-s')
    }
    if($(window).scrollTop()>=3081){
        $('[id="active-s"]').removeAttr('id','active-s')
        $('[href="#a"]').attr('id','active-s')
    }
    if($(window).scrollTop()>=3604){
        $('[id="active-s"]').removeAttr('id','active-s')
        $('[href="#b"]').attr('id','active-s')
    }
    if($(window).scrollTop()>=4157){
        $('[id="active-s"]').removeAttr('id','active-s')
        $('[href="#c"]').attr('id','active-s')
    }
    if($(window).scrollTop()>=4296){
        $('[id="active-s"]').removeAttr('id','active-s')
        $('[href="#d"]').attr('id','active-s')
    }
    if($(window).scrollTop()>=4473){
        $('[id="active-s"]').removeAttr('id','active-s')
        $('[href="#six"]').attr('id','active-s')
    }
    if($(window).scrollTop()>=5643){
        $('[id="active-s"]').removeAttr('id','active-s')
        $('[href="#seven"]').attr('id','active-s')
    }
}
);

