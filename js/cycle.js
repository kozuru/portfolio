
/*********************/
/*ztextアニメーション*/
/********************/
$(function(){
var ztxt = new Ztextify ('.heading', {
	depth: "80px",//default1rem
  layers: 7,//defaulr10
	perspective:"500px",//default500px
  fade: true,
  direction: "backwards",//fowards,backwards,both,default:both
  event: "pointer",//none,pointer,scroll,default:none
  eventRotation: "35deg",//default30deg
	eventDirection: "default"
});
});
/*ここまで*/
/****************************/
/*スクロールカーテン画像開閉*/
/***************************/
(function() {
  const image = document.querySelectorAll('.img-wrap');
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('img-animation');
      } else {
        entry.target.classList.remove('img-animation');
      }
    });
  });
  Array.prototype.forEach.call(image, function(img) {
    observer.observe(img);
  });
})();
/*ここまで*/
/**************/
/*water-ripple*/
/**************/
try {
  $(".top-wrapper.first").ripples({
    resolution: 256,
    dropRadius: 30,
    perturbance: 0.01,
	  interactive: false
  });
} catch (e) {
  $(".error")
    .show()
    .text(e);
}
setTimeout(function() {
  var $el = $(".first");
  var x = $el.outerWidth()/2;
  var y = $el.outerHeight()/2;
  var dropRadius = 30;
  var strength = 0.20 + Math.random() * 0.20;
  $el.ripples("drop", x, y, dropRadius, strength);
}, 1500);
/*ここまで*/
/***********/
/*view-more*/
/***********/
$(function () {
    $('.viewBtn').prevAll().hide();
    $('.viewBtn').click(function () {
        if ($(this).prevAll().is(':hidden')) {
            $(this).prevAll().slideDown();
            $(this).text('CLOSE').addClass('close');
        } else {
            $(this).prevAll().slideUp();
            $(this).text('VIEW MORE').removeClass('close');
        }
    });
});
/*ここまで*/
