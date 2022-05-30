console.log($);

$(document).ready(function(){

    $(".top").click(function(){
      $(".lower").slideToggle();
    });

    $(".bottom").click(function(){
      $(".lower").slideToggle();
    });


    $(".close").click(function(){
        if(screen.width < 740){
            $(".lower").slideUp();
        }
    })

    var num = 40; //number of pixels before modifying styles

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {
            $('.lower').addClass('fixedL');
        } else {
            $('.lower').removeClass('fixedL');
        }
    });


    var y = 100;
    $(window).bind('scroll', function () {

        if ($(window).scrollTop() > y) {
            $('.admission').addClass('fixed2');
        } else {
            $('.admission').removeClass('fixed2');
        }
    });

   
    var x = 40;
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > x ) {
            $('.hamburger-list').addClass('fixed');
        } else {
            $('.hamburger-list').removeClass('fixed');
        }
    });
  


    $(".hamburger-list").click(function(){
       
    });

});


//********************PROGRESS BAR*********************** 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



//***************C/P : javaScript : imageCrausla*************** 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
}



