const rotate=8;
const x = 16;
let colors = ["note","PinkNote","GNote","PurpleNote"];
jQuery.fn.rotate = function(degrees) {
    $(this).css(
      {
      'transform' : 'rotate('+ degrees +'deg)'
      });
    return $(this);
};
jQuery.fn.randomize = function() {
  let c=colors[Math.trunc(Math.random()*4)];
  let classes = $(this).attr("class").split(" ");
  let s="";
  for(var i =0;i<classes.length;i++)
  {
    if(classes[i].localeCompare("note")==0)
      classes[i]=c;

    s+=classes[i]+" ";
  }
  $(this).attr("class",s);
/*  $(this).css(
    {
      'background-color': '#'+c,

    });*/
  return $(this);
};
$(function() {
  $(".dot").each(function(){
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
    $(this).randomize();
  });
  $(".photo").each( function()
  {
    let r = Math.random()*2*rotate-rotate;
    $(this).draggable();
    $(this).rotate(r);
    $(this).randomize();
  });
});
