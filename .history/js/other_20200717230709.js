$(function(){
  // search
  $('.search_btn').on('click', function(){
    $('.search_form').css({transform: 'rotateX(0deg)'})
  })

  // pro menu 
  if(screen.width <= 1000){
    $('.pmn_items').on('click', function(){
      $(this).toggleClass('active');
      if($(this).hasClass('active')){
        $('.li_box').css({transform: 'rotateX(0deg)'});
        $('.li_box a').css({color: '#fff'});
      }else{
        $('.li_box,.li_box a').removeAttr('style');
      }
    })
    $('.icon-menuicons-menu').on('click', function(){
      $(this).toggleClass('icon-cross');
      if($(this).hasClass('icon-cross')){
        $('.mob_drop_box').css({transform: 'rotateX(0deg)'});
        $('.mob_drop_box a').css({color: '#fff'});
      }else{
        $('.mob_drop_box,.mob_drop_box a').removeAttr('style');
      }
    })
  }


})