/**************/
/*デジタル時計*/
/*************/
function showclock() {
  let today = new Date();
  let hours = today.getHours();
  let mins = today.getMinutes();
  let seconds = today.getSeconds();
  const addZero = num => {
    if(num < 10) { return '0' + num };
    return num;
  }
  $('#hour').text(addZero(hours));
  $('#min').text(addZero(mins));
  $('#second').text(addZero(seconds));
}
setInterval(showclock, 1000);
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
/**********************/
/*ページ内ナビ場所表示*/
/**********************/
if($('a[href^="#"]').length){
  $('a[href^="#"]').click(function() {
    $('html,body').animate({ scrollTop: $($(this).attr('href')).offset().top -60 }, 'slow','swing');
    return false;
  });
}
function onePageNav( switchName ) {
    const navSwitch = $(switchName);
    const deductHeight = 60;
    let navArr = [];


    navSwitch.each(function(i){
      let navSwitchHref = $(this).attr('href');
      let tgtOff = $(navSwitchHref).offset().top - deductHeight;
      navArr.push([]);
      navArr[i].switch = $(this);
      navArr[i].tgtOff = tgtOff;
    });
//        console.log(navArr);
    $(window).scroll(function () {
      for( let i = 0; i < navArr.length; i++ ){
        let scroll = $(window).scrollTop();
        let tgtKey = navArr[i];
        let tgtSwitch = tgtKey.switch;
        let tgtOff = tgtKey.tgtOff;
        if ( scroll >= tgtOff ) {
          navSwitch.removeClass('is-current');
          tgtSwitch.addClass('is-current');
        } else {
          tgtSwitch.removeClass('is-current');
        }
      }
    });
  }
  $(window).on('load resize',function(){
    onePageNav('.js-curnav-switch');
  });
/*ここまで*/
/********/
/*modal*/
/*******/
$(function(){
  $(".md-btn").each(function(){
    $(this).on('click',function(e){
      e.preventDefault();
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      $(modal).find('.md-overlay,.md-contents').fadeIn();
    });
  });
  $('.md-close').on('click',function(){
    $('.md-overlay,.md-contents').fadeOut();
  });
});
/*ここまで*/
/**********************/
/*スクロール中は非表示*/
/**********************/
$(function(){
	$(window).on("scroll touchmove", function(){ //スクロール中に判断する
			$("#navi-menu").stop(); //アニメーションしている場合、アニメーションを強制停止
			$("#navi-menu").css('display', 'none').delay(300).fadeIn('fast');
			//スクロール中は非表示にして、500ミリ秒遅らせて再び表示
	});
});
//fast:200,normal:400,slow:600
/*ここまで*/
