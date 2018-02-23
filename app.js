var color;

$(".color").click(function(e){
  color = $(this).css("background-color");
});


$('.pixel').mousedown(function() {
    $(this).css('background', color);

    $('.pixel').bind('mousemove', function() {
      $(this).css('background', color);
    });
  });

  $('.pixel').mouseup(function() {
    $('.pixel').unbind('mousemove');
  });

$('.reset').click(function(){
  $('.pixel').css('background', 'white');
});
