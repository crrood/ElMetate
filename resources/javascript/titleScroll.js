$(function(){
  $('.title-container').data('size','big');
});

$(window).scroll(function(){
  if($(document).scrollTop() > 75)
{
    if($('.title-container').data('size') == 'big')
    {
        $('.title-container').data('size','small');
        $('.title-container').stop().animate({
            height:'7%'
        },600);
        $('.title').stop().animate({
            fontSize:'4.5vh'
        },600);
        $('.subtitle').stop().animate({
            fontSize:'1.25vh',
            marginTop:'1.5%'
        },600);
    }
}
else
  {
    if($('.title-container').data('size') == 'small')
      {
        $('.title-container').data('size','big');
        $('.title-container').stop().animate({
            height:'20%'
        },600);
        $('.title').stop().animate({
            fontSize:'12vh'
        },600);
        $('.subtitle').stop().animate({
            fontSize:'2.5vh',
            marginTop:'0px'
        },600);
      }  
  }
});