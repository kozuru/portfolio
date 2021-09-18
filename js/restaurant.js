/*******************************************/
/*ドロワーメニューを閉じてページ内リンク移動*/
/*******************************************/
//チェックボックスのチェックを外す
$(function() {
	$('.nav-list a[href]').on('click', function(event) {
			 $('.menuBtn').trigger('click');
	 });
});
/*ここまで*/

/*---------------------------------*/
/*nacrollaviスクロールでナビバー色表示*/
/*---------------------------------*/
/*
$('a[href^="#"]').click(function(event) {
    var id = $(this).attr("href");
    var target = $(id).offset().top;
    $('html, body').animate({scrollTop:target}, 500);
    event.preventDefault();
  });

function getTargetTop(elem){
  var id = elem.attr("href");
  var offset = 60;
  return $(id).offset().top - offset;
}
  $(window).scroll(function(e){
    isSelected($(window).scrollTop())
  });

var sections = $('a[href^="#"]');
function isSelected(scrolledTo){
  var threshold = 100;
  var i;

  for (i = 0; i < sections.length; i++) {
    var section = $(sections[i]);
    var target = getTargetTop(section);

    if (scrolledTo > target - threshold && scrolledTo < target + threshold) {
      sections.removeClass("active");
      section.addClass("active");
    }
  };
}
*/
$(function() {

	/**
	 * 現在スクロール位置によるグローバルナビのアクティブ表示
	 */
	var scrollMenu = function() {
		// 配列宣言
		// ここにスクロールで点灯させる箇所のidを記述する
		// 数値は全て0でOK
		var array = {

			'#about': 0,
			'#menu': 0,
			'#service': 0,
			'#contact': 0,

		};

		var $globalNavi = new Array();

		// 各要素のスクロール値を保存
		for (var key in array) {
			if ($(key).offset()) {
				array[key] = $(key).offset().top - 10; // 数値丁度だとずれるので10px余裕を作る
				$globalNavi[key] = $('#header ul li a[href="' + key + '"]');
			}
		}

		// スクロールイベントで判定
		$(window).scroll(function () {
			for (var key in array) {
				if ($(window).scrollTop() > array[key] - 50) {
					$('#header ul li a').each(function() {
						$(this).removeClass('scroll-active');
					});
					$globalNavi[key].addClass('scroll-active');
				}
			}
		});
	}

	// 実行
	scrollMenu();
});
/*ここまで*/

/*------------*/
/*トップへ戻る*/
/*-------------*/
$(function(){
$(window).scroll(function(){
    if($(window).scrollTop()<50){
        $('#rocketmeluncur').slideUp(500);
    }else{
        $('#rocketmeluncur').slideDown(500);
    }
    var ftrocketmeluncur = jQuery("#ft")[0] ? jQuery("#ft")[0] : jQuery(document.body)[0];
    var scrolltoprocketmeluncur = $('rocketmeluncur');
var viewPortHeightrocketmeluncur = parseInt(document.documentElement.clientHeight);
var scrollHeightrocketmeluncur = parseInt(document.body.getBoundingClientRect().top);
var basewrocketmeluncur = parseInt(ftrocketmeluncur.clientWidth);
var swrocketmeluncur = scrolltoprocketmeluncur.clientWidth;
if (basewrocketmeluncur < 1000) {
var leftrocketmeluncur = parseInt(fetchOffset(ftrocketmeluncur)['left']);
leftrocketmeluncur = leftrocketmeluncur < swrocketmeluncur ? leftrocketmeluncur * 2 - swrocketmeluncur : leftrocketmeluncur;
scrolltoprocketmeluncur.style.left = ( basewrocketmeluncur + leftrocketmeluncur ) + 'px';
} else {
scrolltoprocketmeluncur.style.left = 'auto';
scrolltoprocketmeluncur.style.right = '10px';
}
});

$('#rocketmeluncur').click(function(){
    $("html, body").animate({ scrollTop: '0px',display:'none'},{
            duration: 600,
            easing: 'linear'
        });

    var self = this;
    this.className += ' '+"launchrocket";
    setTimeout(function(){
      self.className = 'showrocket';
    },800)
});
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
/*--------------*/
/*tab animation*/
/*--------------*/

const buttonElement = document.querySelectorAll('.tablinks');
const tabContent = document.querySelectorAll(".tabcontent");

tabContent[0].style.display = "block";

buttonElement.forEach(function (i) {
    i.addEventListener('click', function (event) {

        for (let x = 0; x < buttonElement.length; x++) {
            if (event.target.id == buttonElement[x].id) {
                buttonElement[x].className = buttonElement[x].className.replace(" tab-active", "");
                tabContent[x].style.display = "block";
                event.currentTarget.className += " tab-active";
            } else {
                tabContent[x].style.display = "none";
                buttonElement[x].className = buttonElement[x].className.replace(" tab-active", "");
            }
        }

    });
});

/*ここまで*/

/*----------------------*/
/*navbar scrollanimation*/
/*-----------------------*/
$(document).ready(function(){
  var docEl = $(document),

      headerEl = $('.logoLogo'),
      headerWrapEl = $('.menu'),
      navEl = $('.nav-link'),
      linkScroll = $('.nav-item');

  docEl.on('scroll', function(){
    if ( docEl.scrollTop() > 60 ){
      headerEl.addClass('fixed-to-top');
      headerWrapEl.addClass('fixed-to-top');
      navEl.addClass('fixed-to-top');
    }
    else {
      headerEl.removeClass('fixed-to-top');
      headerWrapEl.removeClass('fixed-to-top');
      navEl.removeClass('fixed-to-top');
    }
  });

  /*linkScroll.click(function(e){
      e.preventDefault();
      $('body, html').animate({
         scrollTop: $(this.hash).offset().top
      }, 500);
   });*/
});
/*ここまで*/

/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
/*ここまで*/
/*----------------------*/
/*scroll text-animation*/
/*----------------------*/
$(function(){
	ScrollReveal().reveal('.text2', {
	  duration: 1600,
	  scale: 1.4,
	  reset:false,
		viewOffset:{top:80}
	});

	ScrollReveal().reveal('.text3', {
	  duration: 1600,
	  origin: 'left',
	  distance: '50px',
	  reset:false,
		viewOffset:{top:80}
	});

	ScrollReveal().reveal('.text4', {
	  duration: 1600,
	  origin: 'right',
	  distance: '50px',
	  reset:false,
		viewOffset:{top:80}
	});

	ScrollReveal().reveal('.text5', {
	  duration: 1600,
	  origin: 'top',
	  distance: '50px',
	  reset:false,
		viewOffset:{top:80}
	});

	ScrollReveal().reveal('.text6', {
	  duration: 1600,
	  origin: 'bottom',
	  distance: '50px',
	  reset:false,
		viewOffset:{top:80}
	});
	ScrollReveal().reveal('.text7', {
	  duration: 1600,
	  scale: 0.1,
	  reset:false,
		viewOffset:{top:80}
	});

	ScrollReveal().reveal('.image1', {
	  duration: 1600,
	  scale:0.2,
	  reset:true,
		viewOffset:{top:80}
	});

	ScrollReveal().reveal('.image2', {
	  duration: 800,
	  reset:true
	});
});
/*ここまで*/
