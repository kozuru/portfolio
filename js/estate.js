/*****************/
/*hamburger-menu*/
/****************/
$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('open');

    if ($(this).hasClass('open')) {
        $('nav').addClass('open');
        $('nav').fadeIn(1000);
    } else {
        $('nav').removeClass('open');
        $('nav').fadeOut(1000);
    }
  });

  $('nav a').click(function () {
    $('nav').removeClass('open');
    $('nav').fadeOut(1500);
    $('.hamburger').removeClass('open');
  });
});
/*ここまで*/
/*************/
/*back to top*/
/*************/
$( window ).scroll( function() {
  if ( $( this ).scrollTop() > 800 ) {
    $( '.back-to-top' ).addClass( 'show-back-to-top' );
  } else {
    $( '.back-to-top' ).removeClass( 'show-back-to-top' );
  }
});

// Click event to scroll to top.
$( '.back-to-top' ).click( function() {
  $( 'html, body' ).animate( { scrollTop : 0 }, 800 );
  return false;
});
/*ここまで*/
/***********************/
/*intersection-observer*/
/***********************/
document.addEventListener('DOMContentLoaded', function() {
  var targets = document.querySelectorAll('.target'); //監視対象を選択
  var targetsArray = Array.prototype.slice.call(targets); //監視対象を配列に変換（IE対策）

  //IntersectionObserverに渡すコールバック関数
  var cb = function(entries, observer) {
    entries.forEach(entry => {
      console.log(targets.innerText);

      if(entry.isIntersecting) { //画面内に入った時に処理開始
        entry.target.classList.add('show'); //画面内に入った要素にshowクラスを付与
        observer.unobserve(entry.target); //一度発火した後監視を止める
      }

    });
  }
  //IntersectionObserverに渡すオプション
  var options = {
    rootMargin: '-60px 0px'
  }

  //IntersectionObserver初期化
  var io = new IntersectionObserver(cb, options);

  targetsArray.forEach(el => {
    io.observe(el);
  });

});
/**/
