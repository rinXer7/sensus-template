$(document).ready(function() {

  var aboutUsHeight = $('.home_about-us__paragraphs p:first-child').height();
  console.log(aboutUsHeight);
  $('.home_about-us__paragraphs').css('max-height', aboutUsHeight);

  $('.home_about-us__container a').click(function() {
    $('.home_about-us__paragraphs').addClass('showOthers');
    return false;
  });

  $('section.main-hero').owlCarousel({
    items: 1,
    nav: false
  });

  $('a.main-sidebar-menu__scrollableItem').click(function() {
    var href = $(this).attr('href'),
        scroll = $(href).offset().top;
    $('html, body').stop().animate({ scrollTop: scroll }, 500, 'swing');
    return false;
  });

  var prevButton = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30.5px" height="51.5px"><path fill-rule="evenodd" stroke="rgb(191, 191, 191)" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M23.500,47.500 L1.500,24.500 L24.500,2.500 "/></svg>';
  var nextButton = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="31.5px" height="55.5px"><path fill-rule="evenodd" stroke="rgb(191, 191, 191)" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M3.500,49.500 L25.500,26.500 L2.500,4.500 "/></svg>';

  $('.banner-slider__container').owlCarousel({
    items: 1,
    nav: true,
    navText: [prevButton, nextButton],
    dots: false
  });

  $('a.main-header__container__menu-button').click(function() {
    $('aside.main-sidebar-menu').addClass('visible');
    return false;
  });

  $('aside.main-sidebar-menu').click(function(e) {
    var target = $(e.target);
    console.log(target);
    if(!target.is('aside.main-sidebar-menu ul') && !target.is('aside.main-sidebar-menu ul *')) {
      $('aside.main-sidebar-menu').removeClass('visible');
    }
  });

  $('.home_gallery__container').masonry({
    itemSelector: '.home_gallery__item',
    columnWidth: '.home_gallery__item',
    percentPosition: true
  });

  $('.home_gallery__container .home_gallery__item a').simpleLightbox();

});