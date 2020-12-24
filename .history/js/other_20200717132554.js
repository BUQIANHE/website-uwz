$(function(){

  // pro menu 
  if(ScreenOrientation.width <= 1000){
    $('.pmn_items').toggle(function(){
      $(this).find('.li_box').css({transform: 'rotate(0deg)'})
    })
  }


})
