$(function(){

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

  /*=================================================
  フェード表示
  ===================================================*/
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      // 要素（inviewクラス）が表示されたらshowクラスを追加する
      $(this).stop().addClass("show");
    }
  });

  /*=================================================
  スクロール時のイベント
  ===================================================*/
  $(window).scroll(function() {
    // スクロール位置を取得
    let scroll = $(window).scrollTop();

    /*=================================================
    メインビジュアルの拡大・縮小
    ===================================================*/
    mv_scale(scroll);

    /*=================================================
    ロゴ、ハンバーガーメニューの表示
    ===================================================*/
    // スクロール位置が520pxを超えた場合
    if (scroll > 520) {
      // ロゴとハンバーガ―メニュをfadeInで表示する
      $('.logo').fadeIn(500);
      $('.menuBtn').fadeIn(500);
    // スクロール位置が520px未満の場合
    } else {
      // ロゴとハンバーガ―メニュをfadeOutで非表示にする
      $('.logo').fadeOut(500);
      $('.menuBtn').fadeOut(500);
    }

    /*=================================================
    サイドボタンを表示
    ===================================================*/
    // 画面下から#galleryまでの距離を取得
    let gallery_position = $('#gallery').offset().top - $(window).height();
    // 画面下から#accessまでの距離を取得
    let access_position = $('#access').offset().top - $(window).height();

    // window.innerWidthで画面幅を取得
    // PC表示の場合の処理（画面幅が900pxより大きい場合　※900pxはCSSのブレークポイントとあわせる）
    if (window.innerWidth > 900) {
      // #galleryが表示された場合（スクロール位置が、画面下から#galleryまでの距離を超えた場合）
      if(scroll > gallery_position){
        // #accessが表示されるまでの間は、#side-btnを横からスライドさせて表示する
        if(scroll < access_position){
          $('.sideBtn-wrapper').css({
            'transform': 'rotate(-90deg) translateY(0)'
          });
        // #accessが表示されたら、#side-btnをスライドさせて非表示にする
        } else {
          $('.sideBtn-wrapper').css({
            'transform': 'rotate(-90deg) translateY(60px)'
          });
        }
      // #galleryが表示される前は、#side-btnをスライドさせて非表示にする
      } else {
        $('.sideBtn-wrapper').css({
          'transform': 'rotate(-90deg) translateY(60px)'
        });
      }
    }

    /*=================================================
    Accessの背景画像を表示
    ===================================================*/
    // 画面下から#contactまでの距離を取得
    let contact_position = $('#contact').offset().top - $(window).height();

    // #accessが表示された場合
    if(scroll > access_position){
      // #contactが表示されるまでの間は、背景画像をfadeInで表示する
      if(scroll < contact_position){
        $('.bg').fadeIn(500);
      } else {
        $('.bg').fadeOut(500);
      }
    // #accessが表示される前の場合
    } else {
      // 背景画像を表示しない
      $('.bg').fadeOut(500);
    }
  });

  /*=================================================
  画面読み込み時と画面幅変更時のイベント
  ===================================================*/
  $(window).on('load resize', function() {
    // スクロール位置を取得
    let scroll = $(window).scrollTop();

    /*=================================================
    メインビジュアルの拡大・縮小
    ===================================================*/
    mv_scale(scroll);
  });
});

/*=================================================
メインビジュアルの拡大・縮小（共通処理）
===================================================*/
function mv_scale(scroll) {
  // window.innerWidthで画面幅を取得
  // PC表示の場合の処理（画面幅が900pxより大きい場合　※900pxはCSSのブレークポイントとあわせる）
  if (window.innerWidth > 900) {
    // メインビジュアルのCSS（width）を変更する
    // widthの値をスクロール量にあわせて増やすことで画像を拡大させる
    $('.main-photos img ').css({
      'width': 100/3 + scroll/10  + '%'
    });
  // スマホ表示の場合の処理（画面幅が900px以下の場合）
  } else {
    // メインビジュアルのCSS（width）を変更する
    // widthの値をスクロール量にあわせて減らすことで画像を縮小させる
    $('.main-photos img ').css({
      'width': 100 - scroll/10  + '%'
    });
  }
}

/*************/
/*inkとliquid*/
/*************/
$(function(){
  const liquifyTriggers =[...document.querySelectorAll('.js-liquify-trigger')];
  const textTriggers = [...document.querySelectorAll('p')];
  const inkTriggers = [...document.querySelectorAll('.js-ink-trigger')];

  const controller = new ScrollMagic.Controller();
  liquifyTriggers.forEach(liquifyTrigger => {
  const sceneAuthorLiquid = new ScrollMagic.Scene({
      triggerElement: liquifyTrigger,
      triggerHook: 'onEnter',
    })
    .setTween('#liquid',2 , {
      attr: {
        scale: '0'
      },
      ease: Power4.easeOut,
      delay: 0.1,
    })
    .reverse(false)
    .addTo(controller);

  const sceneAuthorTransition = new ScrollMagic.Scene({
      triggerElement: liquifyTrigger,
      triggerHook: 'onEnter',
    })
    .setTween(liquifyTrigger, 3, {
      opacity: 1,
      y: 1,
      ease: Power4.easeOut,
      delay: 0.1,
    })
    .reverse(true)
    .addTo(controller);
  });
  textTriggers.map(text => {
    const isBelowScreen = (text.getBoundingClientRect().top > window.innerHeight) ? true : false;
    const dataDealy = (text.getAttribute('data-delay') === null || isBelowScreen) ? 0.5 : text.getAttribute('data-delay');
    const sceneText = new ScrollMagic.Scene({
      triggerElement: text,
      triggerHook: 'onEnter',
    })
    .setTween(text, 1.5, {
      y: 0,
      opacity: 1,
      ease: Power4.easeOut,
      delay: dataDealy,
    })
    .reverse(true)
    .addTo(controller);
  });

  inkTriggers.map(ink => {
    const sceneInk = new ScrollMagic.Scene({
      triggerElement: ink,
      triggerHook: 'onEnter',
    })
    .setClassToggle(ink, 'is-active')
    .reverse(false)
    .addTo(controller);
  });
});
/*ここまで*/
/*******************************************/
/*ドロワーメニューを閉じてページ内リンク移動*/
/*******************************************/
//チェックボックスのチェックを外す
$('#menu a[href]').on('click', function(event) {
        $('.menuBtn').trigger('click');
    });
/*ここまで*/
