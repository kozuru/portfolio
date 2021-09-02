/*\\\\\\\\\\\\\\\\*/
/*hamburger menu*/
/*\\\\\\\\\\\\\\\*/
const elment = document.querySelector('.menuBtn');
const elment1 = document.querySelector('.nav-list');
const elment2 = document.querySelector('.animate span');
const elment3 = document.querySelector('.animate span:nth-of-type(2)');
const elment4 = document.querySelector('.animate span:nth-of-type(3)');
const elment5 = document.querySelector('.animate span:nth-of-type(4)');
const elment6 = document.querySelector('.animate span:nth-of-type(5)');
const elment7 = document.querySelector('.animate span:nth-of-type(6)');
const elment8 = document.querySelector('.animate span:nth-of-type(7)');
const elment9 = document.querySelector('.animate span:nth-of-type(8)');
const elment10 = document.querySelector('.animate span:nth-of-type(9)');
const elment11 = document.querySelector('.animate span:nth-of-type(10)');
const elment12 = document.querySelector('.animate span:nth-of-type(11)');
const elment13 = document.querySelector('.animate span:nth-of-type(12)');
const elment14 = document.querySelector('.animate span:nth-of-type(13)');
const elment15 = document.querySelector('.animate span:nth-of-type(14)');
const elment16 = document.querySelector('.animate span:nth-of-type(15)');
const elment17 = document.querySelector('.animate span:nth-of-type(16)');
const elment18 = document.querySelector('.animate span:nth-of-type(17)');
const elment19 = document.querySelector('.animate span:nth-of-type(18)');
const elment20 = document.querySelector('#message');

elment.addEventListener("click", ()=> {
  elment.classList.toggle('menuactive');
  elment1.classList.toggle('menuactive');
  elment2.classList.toggle('menuactive');
  elment3.classList.toggle('menuactive');
  elment4.classList.toggle('menuactive');
  elment5.classList.toggle('menuactive');
  elment6.classList.toggle('menuactive');
  elment7.classList.toggle('menuactive');
  elment8.classList.toggle('menuactive');
  elment9.classList.toggle('menuactive');
  elment10.classList.toggle('menuactive');
  elment11.classList.toggle('menuactive');
  elment12.classList.toggle('menuactive');
  elment13.classList.toggle('menuactive');
  elment14.classList.toggle('menuactive');
  elment15.classList.toggle('menuactive');
  elment16.classList.toggle('menuactive');
  elment17.classList.toggle('menuactive');
  elment18.classList.toggle('menuactive');
  elment19.classList.toggle('menuactive');
  elment20.classList.toggle('menuactive');
})

/*ここまで*/

/*------------------------*/
/*intersection-observer*/
/*------------------------*/
$(function(){
const target = document.querySelectorAll('.target');
const targetArray = Array.prototype.slice.call(target);
const options = {
  root: null,  //nullでブラウザ画面対照
  rootMargin: '80px 0px',  //画面の下から0pxの位置をターゲットと交差する位置に指定
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
});
/*ここまで*/
/*******************/
/*heading-animation*/
/*******************/
const CLASSNAME = "-visible";
const TIMEOUT = 100;
const $target = $(".heading");

setInterval(() => {
  $target.addClass(CLASSNAME);
  setTimeout(() => {
  }, TIMEOUT);
}, TIMEOUT * 2);
/*ここまで*/

