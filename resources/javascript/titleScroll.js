$(function(){
  $('.title-container').data('size','big');
});

$(window).scroll(function(){
  if($(document).scrollTop() > 0)
{
    if($('.title-container').data('size') == 'big')
    {
        $('.title-container').data('size','small');
        $('.title-container').stop().animate({
            height:'7%'
        },600);
        $('.title').stop().animate({
            fontSize:'53px'
        },600);
        $('.subtitle').stop().animate({
            fontSize:'18px',
            marginTop:'32px'
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
            fontSize:'160px'
        },600);
        $('.subtitle').stop().animate({
            fontSize:'35px',
            marginTop:'0px'
        },600);
      }  
  }
});