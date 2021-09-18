
/*******************************************/
/*ドロワーメニューを閉じてページ内リンク移動*/
/*******************************************/
//チェックボックスのチェックを外す
$(function() {
  $('.drawer-item>a').click(function() {
    $('#menu-btn-check').removeAttr('checked').prop('checked', false).change();
  });
});
/*ここまで*/
/**/
/**/
/**/
$(function(){
  $('dt').click(function(){
    $(this).siblings('dd').slideToggle();
    $('dt').not($(this)).siblings('dd').slideUp();
  });
});
/*ここまで*/
/**/
/*ｽｸﾛｰﾙｱﾆﾒｰｼｮﾝ*/
/**/
$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 100){
				$(this).addClass('scroll');
			}
		});
		$(window).scroll(function (){
			$('.slideleft').each(function(){
				var elemPos = $(this).offset().top;
				var scroll = $(window).scrollTop();
				var windowHeight = $(window).height();
				if (scroll > elemPos - windowHeight + 100){
					$(this).addClass('scroll');
				}
			});
		});
		$(window).scroll(function (){
			$('.slideright').each(function(){
				var elemPos = $(this).offset().top;
				var scroll = $(window).scrollTop();
				var windowHeight = $(window).height();
				if (scroll > elemPos - windowHeight + 100){
					$(this).addClass('scroll');
				}
			});
		});
    $(window).scroll(function (){
			$('.zoom').each(function(){
				var elemPos = $(this).offset().top;
				var scroll = $(window).scrollTop();
				var windowHeight = $(window).height();
				if (scroll > elemPos - windowHeight + 100){
					$(this).addClass('scroll');
				}
			});
		});
	});
});
/*ここまで*/
/**************/
/*slick-slider*/
/**************/
$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed:3000,
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 600,//スライドのスピード。初期値は300。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    cssEase: 'ease-in-out',
    centerMode: true,//要素を中央ぞろえにする
    centerPadding: '10%',
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: false,//下部ドットナビゲーションの表示
    prevArrow: '<div class="slide-arrow prev-arrow"></div>',
    nextArrow: '<div class="slide-arrow next-arrow"></div>',
    pauseOnFocus: false,
    pauseOnHover: false,
    waitForAnimate: false,
    responsive: [
    {
      breakpoint: 780,
      settings: {
        arrows:false
      }
    }
  ]
  });
/*ここまで*/
/******************/
/*スライダーシュー*/
/*****************/
$(function () {
	//画像の数を「isCount」に代入。
	var isCount = 4;
	//「interval」に「4秒」を代入。
	var interval = 4200;
	//「$items」に「.slide」を代入。
	var $items = $(".slide");

	//4秒ごとにくりかえす処理を変数「slideTimer」にいれます。
	var slideTimer = function () {
		//「items」から「.is-old」をとる。
		$items.removeClass("isOld");
		//「items」に対して「eq」を実行。「isCount」を取得。
		//「.isNow」をとり、「.isOld」を与える。
		$items.eq(isCount).removeClass("isNow").addClass("isOld");
		//「items」に対して「eq」を実行。
		//「isCount」が「4」だったら、「isCount」に「0」を代入。
		//そうでなければ「isCount」に「1」を足す。
		//「.isNow」を与える。
		$items.eq(isCount == 4 ? isCount = 0 : ++isCount).addClass("isNow");
	};
	//変数「slideTimer」の処理を4秒ごとにくりかえす。
	setInterval(slideTimer, interval);
});
$(function () {
	//画像の数を「isCount」に代入。
	var isCount = 4;
	//「interval」に「4秒」を代入。
	var interval = 4200;
	//「$items」に「.slide」を代入。
	var $items = $(".slide1");

	//4秒ごとにくりかえす処理を変数「slideTimer」にいれます。
	var slideTimer = function () {
		//「items」から「.is-old」をとる。
		$items.removeClass("isOld1");
		//「items」に対して「eq」を実行。「isCount」を取得。
		//「.isNow」をとり、「.isOld」を与える。
		$items.eq(isCount).removeClass("isNow1").addClass("isOld1");
		//「items」に対して「eq」を実行。
		//「isCount」が「4」だったら、「isCount」に「0」を代入。
		//そうでなければ「isCount」に「1」を足す。
		//「.isNow」を与える。
		$items.eq(isCount == 4 ? isCount = 0 : ++isCount).addClass("isNow1");
	};

	//変数「slideTimer」の処理を4秒ごとにくりかえす。
	setInterval(slideTimer, interval);
});
$(function () {
	//画像の数を「isCount」に代入。
	var isCount = 4;
	//「interval」に「4秒」を代入。
	var interval = 4200;
	//「$items」に「.slide」を代入。
	var $items = $(".slide2");

	//4秒ごとにくりかえす処理を変数「slideTimer」にいれます。
	var slideTimer = function () {
		//「items」から「.is-old」をとる。
		$items.removeClass("isOld2");
		//「items」に対して「eq」を実行。「isCount」を取得。
		//「.isNow」をとり、「.isOld」を与える。
		$items.eq(isCount).removeClass("isNow2").addClass("isOld2");
		//「items」に対して「eq」を実行。
		//「isCount」が「4」だったら、「isCount」に「0」を代入。
		//そうでなければ「isCount」に「1」を足す。
		//「.isNow」を与える。
		$items.eq(isCount == 4 ? isCount = 0 : ++isCount).addClass("isNow2");
	};

	//変数「slideTimer」の処理を4秒ごとにくりかえす。
	setInterval(slideTimer, interval);
});

/*ここまで*/
/**********/
/*文字装飾*/
/**********/
$(".colorful").children().addBack().contents().each(function(){
	if (this.nodeType == 3) {
				var $this = $(this);
				$this.replaceWith($this.text().replace(/(\S)/g, "<span>$&</span>"));
	}
});
/*ここまで*/
/*******/
/*modal*/
/*******/
$(document).ready(function() {

  // Cuando le dan click a cualquier de los modales y body se le agrega la clase "no-scroll-y" para que no se le pueda hacer scroll a la página
  // Y se reproduce un sonido
  //let soundModal = new Audio('https://grupoamsi.com/Test-Grupo-Amsi/Test-Grupo-Amsi/sounds/sound-modals/sound-modals.mp3');
  $('.btn-show-modal').on('click', function() {
    $('body').addClass('no-scroll-y');
    let temp = $($(this).attr('data-modal'));
    temp.addClass('show-modal');
    soundModal.play();
  });

  $('.btn-close-modal, .btn-close-footer-modal').on('click', function() {
    let temp = $($(this).attr('data-modal'));
    temp.removeClass('show-modal');
  });

  // Si le da la tecla Escape cierra el modal
  $(document).on('keydown keyup', function(e) {
    if (e.which == 27) {
      $('.btn-close-modal').trigger('click');
    }
  });

});
/*ここまで*/
