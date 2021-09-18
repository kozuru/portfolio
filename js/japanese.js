
/*------------*/
/*オープニング*/
/*-----------*/
$(window).on('load',function(){
  $("#splash").delay(3200).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(3000).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});
/*ここまで*/

/*------------------------------------------*/
/*スクローロでロゴがハンバーガーメニュー切替え*/
/*-------------------------------------------*/
jQuery(function($){
  $(window).on('scroll', function(){
    if ($(window).scrollTop() > 150) {
      $('#site-icon1').fadeOut(400);
    } else {
      $('#site-icon1').fadeIn(400);
    }
  });
/*});
jQuery(function($){*/
  $(window).on('scroll', function(){
    if ($(window).scrollTop() > 150) {
      $('#site-icon2').fadeIn(400);
    } else {
      $('#site-icon2').fadeOut(400);
    }
  });
});
/*ここまで*/

/*---------------*/
/*hamburger-menu*/
/*--------------*/
$(function(){
const elment = document.querySelector('.menuBtn');
const elment1 = document.querySelector('.nav-contents');

elment.addEventListener("click", ()=> {
  elment.classList.toggle('nav-active');
  elment1.classList.toggle('nav-active');
})
/*ここまで*/
/*--------------------------*/
/*スクロールでアイコン色替え*/
/*--------------------------*/
if('CSS' in window && 'supports' in window.CSS) {
    var support = window.CSS.supports('mix-blend-mode','difference');
  // tests for mix-blend-mode support
    support = support?'mix-blend-mode':'no-mix-blend-mode';
document.documentElement.className += support;
}
});
/*ここまで*/

/*----------------*/
/*flex-box-gallery*/
/*-----------------*/
$(document).ready(function(){
  $('#view-photos').flexgal();
});

(function($) {
  $.fn.flexgal = function(){
    $('body').prepend('<div id="fullimage" style="display: none"></div>')
    $(this).addClass('flex-gallery');
    $('img', this).parent().addClass('image-rate');

   $('.image-rate').click(function() {
     $('img', this).clone().prependTo('#fullimage');
     $( "#fullimage" ).fadeIn("slow");
   });

   $('#fullimage').click(function() {
     $(this).fadeOut( "slow", function() {
       $('img',this).remove();
     });
   });
 }
}(jQuery));
/*ここまで*/
/*--------------------*/
/*自動スライダーショー*/
/*---------------------*/
$('.slider').slick({
   arrows: false,//左右の矢印はなし
   autoplay: true,//自動的に動き出すか。初期値はfalse。
   autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
   speed: 22000,//スライドのスピード。初期値は300。
   infinite: true,//スライドをループさせるかどうか。初期値はtrue。
   pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
   pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
   cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
   slidesToShow: 1.5,//スライドを画面に4枚見せる
   slidesToScroll: 1,//1回のスライドで動かす要素数
   responsive: [
     {
     breakpoint: 769,//モニターの横幅が769px以下の見せ方
     settings: {
       slidesToShow: 1.5,//スライドを画面に2枚見せる
     }
   },
   {
     breakpoint: 426,//モニターの横幅が426px以下の見せ方
     settings: {
       slidesToShow: 1,//スライドを画面に1.5枚見せる
     }
   }
 ]
 });
/*ここまで*/
/*---------------------------------*/
/*スクロールで画像とテキストが合体*/
/*---------------------------------*/
$(window).scroll(function() {
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.sectionMenu');
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);
  $('.sectionMenu').removeClass('menu-active');
  $panel.each(function () {
    var $this = $(this);
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
      $this.addClass('menu-active');
    }
  });
}).scroll();
/*ここまで*/

/*-------------------------*/
/*フェードインアニメーション*/
/*-------------------------*/
$(function(){

    var effect_btm = 300; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 50; // どのぐらい要素を動かすか(px)
    var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

    //親要素と子要素のcssを定義
    $('.scroll-fade-row').css({
        opacity: 0
    });
    $('.scroll-fade-row').children().each(function(){
        $(this).css({
            opacity: 0,
            transform: 'translateY('+ effect_move +'px)',
            transition: effect_time + 'ms'
        });
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        var effect_pos = scroll_btm - effect_btm;

        //エフェクトが発動したとき、子要素をずらしてフェードさせる
        $('.scroll-fade-row').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
                $(this).children().each(function(i){
                    $(this).delay(100 + i*200).queue(function(){
                        $(this).css({
                            opacity: 1,
                            transform: 'translateY(0)'
                        }).dequeue();
                    });
                });
            }
        });
    });

});
/*ここまで*/
/*------------------------------*/
/*画像のスクロールシャッター開閉*/
/*------------------------------*/
$(function () {
  $('.feature-photo').on('inview', function (event, isInView, visiblePartY) {
    if (visiblePartY === 'top') {
      console.log('inview');
      $(this).addClass('is-active');
    }
  });
});
/*ここまで*/
