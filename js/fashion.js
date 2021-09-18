/*----------------------*/
/*メニューアニメーション*/
/*----------------------*/
$(function(){
	var
	  winW = $(window).width(),
		winH = $(window).height(),
		nav = $('#mainnav ul a'),
		curPos = $(this).scrollTop();

	if (winW > 880){
		var headerH =20;
	}
	else{
		var headerH =60;
	}

	$(nav).on('click', function(){
		nav.removeClass('active');
  	var $el = $(this),
		id = $el.attr('href');
 		$('html, body').animate({
   		scrollTop: $(id).offset().top - headerH
 		}, 500);
		$(this).addClass('active');
		if (winW < 880){
			$('#menuWrap').next().slideToggle();
			$('#menuBtn').removeClass('close');
		}
 		return false;
	});

	/*$('.panel').hide();
	$('#menuWrap').toggle(function(){
		$(this).next().slideToggle();
		$('#menuBtn').toggleClass('close');
	},
	function(){
		$(this).next().slideToggle();
		$('#menuBtn').removeClass('close');
	});*/
});
/*ここまで*/
/*------------------------*/
/*intersection-observer*/
/*------------------------*/
const target = document.querySelectorAll('.target');
const targetArray = Array.prototype.slice.call(target);
const options = {
  root: null,  //nullでブラウザ画面対照
  rootMargin: '0px 0px',  //画面の下から0pxの位置をターゲットと交差する位置に指定
  threshold: 0 };  //指定した要素が画面に0%入るとコールバッイベント発生
const observer = new IntersectionObserver(callback, options);
targetArray.forEach(tgt => {
  observer.observe(tgt);
});
function callback(entries) {
  entries.forEach(function (entry, i) {
    const target = entry.target;
    if (entry.isIntersecting && !target.classList.contains('is-active')) {
      const delay = i * 100;
      setTimeout(function () {
        target.classList.add('is-active');
      }, delay);
    }
  });
};
/*ここまで*/
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
/*************************/
/*Distortion Hover Effect*/
/*************************/
Array.from(document.querySelectorAll('.photo__item-img')).forEach((el)=>{
  const imgs = Array.from(el.querySelectorAll('img'));
  new hoverEffect({
      parent: el,
      intensity: el.dataset.intensity || undefined,
      speedIn: el.dataset.speedin || undefined,
      speedOut: el.dataset.speedout || undefined,
      easing: el.dataset.easing || undefined,
      hover: el.dataset.hover || undefined,
      image1: imgs[0].getAttribute('src'),
      image2: imgs[1].getAttribute('src'),
      displacementImage: el.dataset.displacement
  });
}
);
/*ここまで*/
