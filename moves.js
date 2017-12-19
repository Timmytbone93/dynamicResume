

$(window).on('load',function(){


  var url = window.location.href;
  console.log(url);
  if(/#me/.test(url)){
    $('.filler').load("me.html");
    $('.filler').css({zIndex:'200'});
    $('.menu li a').each(function(){
      if($(this).attr('href')=="#me"){
        $(this).css({color:'red'});
      }

    });
  }
  if(/#skills/.test(url)){
    $('.filler').load("skills.html");
    $('.filler').css({zIndex:'200'});
    $('.menu li a').each(function(){
      if($(this).attr('href')=="#skills"){
        $(this).css({color:'red'});
      }

    });
  }
  if(/#schooling/.test(url)){
    $('.filler').load("schooling.html");
    $('.filler').css({zIndex:'200'});
    $('.menu li a').each(function(){
      if($(this).attr('href')=="#schooling"){
        $(this).css({color:'red'});
      }

    });

  }
  if(/#experiance/.test(url)){
    $('.filler').load("experiance.html");
    $('.filler').css({zIndex:'200'});
    $('.menu li a').each(function(){
      if($(this).attr('href')=="#experiance"){
        $(this).css({color:'red'});
      }

    });
  }




});



$(function(){

  //click handler for dynamically loaded in links











//align menu middle of screen

var windowHeight = $(window).height();
var halfWayHeight = windowHeight/2;
var dockHeight = $('.topDock').height();
$('.topDock').css({top:halfWayHeight-(dockHeight/2)});


  
  
  



//check session sessionStorage
if(sessionStorage.getItem('menuAnimation')=="Seen"){
  $('.topDock').css({top:'0px',height:'+=10%'});
  $('.topDock').css({background:'#FFFF7F'});


}





//menu controller
$('.menu li a').on('click',function(){


//color current menu item to show nav
$(".menu li a").each(function(){

  $(this).css('color','#1EAEDB');


});

$(this).css({color:'red'});





//check session var
if(sessionStorage.getItem("menuAnimation")!="Seen"){

  $('.menu').animate({top:'0px',height:'+=10%'},700);
  $('.menu').css({width:'100%',left:'0',background:'#FFFF7F'});
  $('.menu li').css({paddingTop:"+=1%"});
  $('.title').animate({top:"+=10%",zIndex:"100"});
  sessionStorage.setItem("menuAnimation","Seen");
}



var href = $(this).attr('href');
href = href.replace("#","");

switch(href){

  case "me":

  $('.filler').load("me.html");
  $('.filler').css({zIndex:'200'});

  break;
  case "skills":

  $('.filler').load("skills.html");
  $('.filler').css({zIndex:'200'});

  break;
  case "schooling":

$('.filler').load("schooling.html");
$('.filler').css({zIndex:'200'});

  break;
  case "experiance":

$('.filler').load("experiance.html");
$('.filler').css({zIndex:'200'});

  break;




}




});











});
