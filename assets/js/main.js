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
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 2500,
    arrows: true,
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
        slidesToShow: 3,
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


//

 function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $('.scroll-animations .animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('fadeInLeft');
      }
    });
  });

  // Click Animations
  $('button').on('click', function() {
    /*
    If any input is empty make it's border red and shake it. After the animation is complete, remove the shake and animated classes so that the animation can repeat.
    */
    
    // Check name input
    if ($('#name').val() === '') {
      $('#name').addClass('form-error animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated shake');
      });
    } else {
      $('#name').removeClass('form-error');
    }
    
    // Check email input
    if ($('#email').val() === '') {
      $('#email').addClass('form-error animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated shake');
      });
    } else {
      $('#email').removeClass('form-error');
    }

    // Check message textarea
    if ($('#message').val() === '') {
      $('#message').addClass('form-error animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated shake');
      });
    } else {
      $('#message').removeClass('form-error');
    }

  });
  
  // Activate hinge effect when h4 is click in last section
  $('.funky-animations h4').on('click', function() {
    $(this).addClass('animated hinge').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated hinge');
      });
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
