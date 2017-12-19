

$(window).on('load',function(){


  var url = window.location.href;
  console.log(url);
  if(/#me/.test(url)){
    $('.filler').load("../views/me.html");
    $('.filler').css({zIndex:'200'});
    $('.menu li a').each(function(){
      if($(this).attr('href')=="#me"){
        $(this).css({color:'red'});
      }

    });
  }
  if(/#skills/.test(url)){
    $('.filler').load("../views/skills.html");
    $('.filler').css({zIndex:'200'});
    $('.menu li a').each(function(){
      if($(this).attr('href')=="#skills"){
        $(this).css({color:'red'});
      }

    });
  }
  if(/#schooling/.test(url)){
    $('.filler').load("../views/schooling.html");
    $('.filler').css({zIndex:'200'});
    $('.menu li a').each(function(){
      if($(this).attr('href')=="#schooling"){
        $(this).css({color:'red'});
      }

    });

  }
  if(/#experiance/.test(url)){
    $('.filler').load("../views/experiance.html");
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
var menuHeight = $('.menu').height();
$('.menu').css({top:halfWayHeight-(menuHeight/2)});



//align menu items
var windowWidth = $(window).width();

var ammountOfMenuItems = $('.menu li').length;

var liWidth = windowWidth/ammountOfMenuItems

$('.menu li').each(function(){

  $(this).css({width:liWidth});

});
//check session sessionStorage
if(sessionStorage.getItem('menuAnimation')=="Seen"){
  $('.menu').css({top:'0px',height:'+=10%'});
  $('.menu').css({width:'100%',left:'0',background:'#FFFF7F'});
  $('.menu li').css({paddingTop:"+=1%"});
  $('.title').css({top:"+=10%",zIndex:"100"});

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

  $('.filler').load("../views/me.html");
  $('.filler').css({zIndex:'200'});

  break;
  case "skills":

  $('.filler').load("../views/skills.html");
  $('.filler').css({zIndex:'200'});

  break;
  case "schooling":

$('.filler').load("../views/schooling.html");
$('.filler').css({zIndex:'200'});

  break;
  case "experiance":

$('.filler').load("../views/experiance.html");
$('.filler').css({zIndex:'200'});

  break;




}




});











});
