const rotate=8;
const x = 16;
jQuery.fn.rotate = function(degrees) {
    $(this).css(
      {
      'transform' : 'rotate('+ degrees +'deg)'
      });
    return $(this);
};

$(function() {
  $(".dot").each(function(){
      console.log($(this).parent());
    $(this).css({
      'background-color': 'rgb('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+')',
      'margin-left': ($(this).parent().width()*0.5+Math.random()*10-5)+'px',
      'margin-top' : '-20px'
    });
  });
  $(".photo").rotate(Math.random()*2*rotate-rotate);
  $(".note").each( function()
  {
    let r = Math.random()*2*rotate-rotate;
    $(this).draggable();
    $(this).rotate(r);
  });
});