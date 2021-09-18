
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
/*********/
/*FAQ切替*/
/*********/
$(function(){
  $('dt').click(function(){
    $(this).siblings('dd').slideToggle();
    $('dt').not($(this)).siblings('dd').slideUp();
  });
});
/*ここまで*/
/**************/
/*ｽｸﾛｰﾙｱﾆﾒｰｼｮﾝ*/
/*************/
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
/**********************/
/*スクロール中は非表示*/
/**********************/
$(function(){
	$(window).on("scroll touchmove", function(){ //スクロール中に判断する
			$(".side-btn").stop(); //アニメーションしている場合、アニメーションを強制停止
			$(".side-btn").css('display', 'none').delay(300).fadeIn('normal');
			//スクロール中は非表示にして、500ミリ秒遅らせて再び表示
	});
});
//fast:200,normal:400,slow:600
/*ここまで*/
