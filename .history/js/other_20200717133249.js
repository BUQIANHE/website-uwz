$(function(){

  // pro menu 
  if(screen.width <= 1000){
    $('.pmn_items').on('click', function(){
      $('.li_box').css({transform: 'rotateX(0deg)'});
      $('.li_box a').css({color: '#fff'});
    })
  }


})

// banner

// console=window.console || {dir:new Function(),log:new Function()};
// var active=0,
// as=document.getElementById('pagenavi').getElementsByTagName('a');
// for(var i=0;i<as.length;i++){
//   (function(){
//     var j=i;
//     as[i].onclick=function(){
//       t4.slide(j);
//       return false;
//     }
//   })();
// }
// var t4=new TouchSlider('slider4',{speed:600, direction:0, interval:6000, fullsize:true});
// t4.on('before',function(m,n){
//   as[m].className='';
//   as[n].className='active';
// })