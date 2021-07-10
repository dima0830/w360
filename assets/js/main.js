$(document).ready(function(){

  var contador = 1;
  $('.menu_bar').click(function(){
    // $('nav').toggle();
    if(contador == 1){
      $('nav').animate({
        left: '0'
      });
      contador = 0;
    } else {
      contador = 1;
      $('nav').animate({
        left: '-100%'
      });
    }

  });
///

  $(".oculto").hide();
$(".btnVerMas").click(function(){
   var self = $(this); 
  self.next().toggle("slow");
/////  
  if(self.val()=="Ver más"){
    self.val("Ver menos");
  } else {
    $(self).val ("Ver más");
  }
});

 $('.sliderlogo').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 2500,
    arrows: true,
    dots: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    },
     {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
  });

  $('.sliderlogo2').slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
      }
    },
     {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
  });


    $("#hide-map").on('click', function() {
        $("#element-map").hide();
        return false;
    });
 
    $("#mirar").on('click', function() {
        $("#element-map").show();
        return false;
    });

// scroll
$('a[data-scroll]').click(function(e) {
  e.preventDefault();
  //Set Offset Distance from top to account for fixed nav
  var offset = 10;
  var target = ( '#' + $(this).data('scroll') );
  var $target = $(target);
  //Animate the scroll to, include easing lib if you want more fancypants easings
  $('html, body').stop().animate({
      'scrollTop': $target.offset().top - offset
  }, 800, 'swing');
}); 


});

$(document).ready(function() {
  
  var slideStart;

  function startSlide() {
    slideStart = setInterval(slideShow, 10000);
  };
  function slideShow() {

    var slideCurrent = $(".bn-active");
    var slideNext = slideCurrent.next();
    

    if (slideNext.length == 0) {
      slideNext = $(".bn").first();
    }

    var slideIndex = slideNext.index();

    $('.bn').css({
      'transform': 'translate(-' + (slideIndex) * 100 + '%)'
    });

    $('.bn').removeClass('bn-active');
    slideNext.addClass('bn-active');

    var captionNext = slideNext.find(".caption");
    
    

  };
  function parallaxX() {
    var scrollTop = window.pageYOffset

    $(window).on("scroll resize", function() {
      scrollTop = window.pageYOffset;
    });

    $(".bn").each(function() {
      var parallaxImage = $(this);
      var parallaxOffset = parallaxImage.offset().top;
      var yPos;
      var coords;

      $(window).on("scroll resize", function() {
        yPos = -(parallaxOffset - scrollTop) / 2;
        coords = '50% ' + yPos + 'px';

        parallaxImage.css({
          backgroundPosition: coords
        });
      });
    });
  };


  $('.bn-indicator li').on("click", function() {

    clearInterval(slideStart);
    var goToSlide = $(this).index();

    $('.bn-indicator li').removeClass('active');
    $('.bn').removeClass('bn-active');
    $('.bn').eq(goToSlide).addClass('bn-active');
    $(this).addClass('active');

    $('.bn').css({
      'transform': 'translate(-' + (goToSlide) * 100 + '%)'
    });
    startSlide();
  });

  startSlide();
  parallaxX();
  siteNav();

});

