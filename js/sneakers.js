/*******************************************/
/*ドロワーメニューを閉じてページ内リンク移動*/
/*******************************************/
//チェックボックスのチェックを外す
$('.nav-list a[href]').on('click', function(event) {
        $('.menuBtn').trigger('click');
    });
/*ここまで*/

/*\\\\\\\\\\\\\\\\*/
/*hamburger menu*/
/*\\\\\\\\\\\\\\\*/
const elment = document.querySelector('.menuBtn');
const elment1 = document.querySelector('.nav-list');

elment.addEventListener("click", ()=> {
  elment.classList.toggle('active');
  elment1.classList.toggle('active');
})
/*ここまで*/
/*menu icon jump*/
/*=================================================
 スムーススクロール
 ===================================================*/
 // ページ内リンクのイベント
 $('a[href^="#"]').click(function(){
   // リンクを取得
   let href= $(this).attr("href");
   // ジャンプ先のid名をセット
   let target = $(href == "#" || href == "" ? 'html' : href);
   // トップからジャンプ先の要素までの距離を取得
   let position = target.offset().top;
   // animateでスムーススクロールを行う
   // 600はスクロール速度で単位はミリ秒
   $("html, body").animate({scrollTop:position}, 600, "swing");
   return false;
 });
 /*ここまで*/
 /*-----------------------*/
 /*スクロールアニメーション*/
 /*-----------------------*/
ScrollReveal().reveal('.fadeIn1', {
  duration: 1600,
  scale: 2,
  reset: true
});
ScrollReveal().reveal('.fadeIn2', {
  duration: 1600,
  origin: 'left',
  distance: '50px',
  reset: true
});

ScrollReveal().reveal('.fadeIn3', {
  duration: 1600,
  origin: 'right',
  distance: '50px',
  reset: true
});

ScrollReveal().reveal('.fadeIn4', {
  duration: 1600,
  origin: 'top',
  distance: '50px',
  reset: true
});

ScrollReveal().reveal('.fadeIn5', {
  duration: 1600,
  origin: 'bottom',
  distance: '50px',
  reset: true
});
ScrollReveal().reveal('.fadeIn6', {
  duration: 1600,
  scale: 0.1,
  reset: true
});

ScrollReveal().reveal('.fadeIn7', {
  duration: 1600,
  reset: true
});
ScrollReveal().reveal('.fadeIn8', {
  duration: 1600,
  rotate: { x: 0, y: 0, z: 300 },
  reset: true
});
ScrollReveal().reveal('.fadeIn9', {
  duration: 1600,
  origin: 'left',
  distance: '600px',
  rotate: { x: 0, y: 0, z: 500 },
  reset: true
});
ScrollReveal().reveal('.fadeIn10', {
  duration: 1200,
  origin: 'bottom',
  distance: '-80px',
  reset: false
});
/*ここまで*/
/**************/
/*slick slider*/
/**************/
$(document).ready(function(){
  "use strict";

  //------- Initialising Slick Slider
  $('.item-slider').slick({
    arrows: false,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });

  //------- Custom Arrows click functionality
  $(document).on('click', '.prevSlide', function(){
    $('.item-slider').slick('slickPrev');
  });

  $(document).on('click', '.nextSlide', function(){
    $('.item-slider').slick('slickNext');
  });

  //------- Click to filter slides according to user's choice

  $(document).on('click', '.filter-option li a', function(){
      $('.filter-option li a').removeClass('active');
        $(this).addClass('active');

        var cat = $(this).attr('data-category');

        if(cat !== 'all'){
          $('.item-slider').slick('slickUnfilter');

          $('.item-slider li').each(function(){
            $(this).removeClass('slide-shown');
          });

          $('.item-slider li[data-match='+ cat +']').addClass('slide-shown');

          $('.item-slider').slick('slickFilter', '.slide-shown');
        }

        else{
          $('.item-slider li').each(function(){
            $(this).removeClass('slide-shown');
          });
          $('.item-slider').slick('slickUnfilter');
        }
      });

});
/*ここまで*/
