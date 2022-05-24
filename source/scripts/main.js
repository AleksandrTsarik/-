'use strict'

var random = Math.floor(Math.random() * 4);

$('.b-info__item').on('click', function(e) {
   e.preventDefault();
   var news_id = $(this).data('news');
   $('.b-header-slide').removeClass('show');
   $('.b-header-slide[data-news-content='+news_id+']').addClass('show');
   if(!$('.b-info__item.active').length) {
      $(this).addClass('active');
   } else if($(this).hasClass('active')) {
      return;
   } else {
      $('.b-info__item').removeClass('active');
      $(this).addClass('active');
   }
});

$('.b-info__item:nth('+random+')').addClass('active');
$('.b-header-slide:nth('+random+')').addClass('show');



$(window).on('load resize', function () {
   if ($(this).width() > 1023) {
      $('.owl-carousel').trigger('destroy.owl.carousel');
      $('.header-slider__inner').removeClass('owl-carousel');
   } else {
      $('.header-slider__inner').addClass('owl-carousel');
      $('.header-slider__inner').owlCarousel({
         items: 1,
         loop: true,
         animateOut: 'fadeOut',
         pagination: true,
         dots: true,
         center: true,
         margin: 0         
      });
      
   }
});
$('.js-active-parent').on('click', function(e){
   e.preventDefault;
   $(this).parent().toggleClass('_active')
})


$('.js-active').on('click', function(e){
   e.preventDefault;
   $('.js-active').removeClass('_active')
   $(this).addClass('_active')
   // $(this).toggleClass('_active')

});

// $(window).resize(function () {
//    if($(window).width() >= 1023){
//        $('.content-wrapper--mobile').removeClass('.content-wrapper');
//    };
// })
$('a.scroll-to').on('click', function(e){
   e.preventDefault();
   var anchor = $(this).attr('href');
   $('html, body').stop().animate({
         scrollTop: $(anchor).offset().top - 60
   }, 800);
});
