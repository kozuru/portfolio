
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
/*ーーーーーーーーーー:/
/*テキストが入れ替わる*/
/*ーーーーーーーーーー*/
"use strict";
let words = document.querySelectorAll(".word");
words.forEach(word => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach(letter => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";
let rotateText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    // rotate out letters of current word
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    // reveal and rotate in letters of next word
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
rotateText();
setInterval(rotateText, 4000);

/*ここまで*/

/****************/
/*cursol stoker*/
/****************/
  // 「#hide-btn」要素のclickイベントをつくってください
  //マウスストーカー用のdivを取得
const storker = document.getElementById('storker');

//aタグにホバー中かどうかの判別フラグ
let hovFlag = false;

//マウスに追従させる処理 （リンクに吸い付いてる時は除外する）
document.addEventListener('mousemove', function (e) {
    if (!hovFlag) {
    storker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    }
});

//リンクへ吸い付く処理
const linkElem = document.querySelectorAll('a:not(.no_stick_)');
for (let i = 0; i < linkElem.length; i++) {
    //マウスホバー時
    linkElem[i].addEventListener('mouseover', function (e) {
        hovFlag = true;

        //マウスストーカーにクラスをつける
        storker.classList.add('hov_');

        //マウスストーカーの位置をリンクの中心に固定
        let rect = e.target.getBoundingClientRect();
        let posX = rect.left + (rect.width / 2);
        let posY = rect.top + (rect.height / 2);

        storker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';

    });
    //マウスホバー解除時
    linkElem[i].addEventListener('mouseout', function (e) {
        hovFlag = false;
        storker.classList.remove('hov_');
    });
}
/*ここまで*/
