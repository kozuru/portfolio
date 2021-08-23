<?php
/*******************************
確認ページから戻ってきた場合のデータの受け取り
*******************************/
if (isset($_POST["backbtn"])) {
 //確認ページ（confirm.php）から戻ってきた場合にはデータを受け取る
 $kaisya  = $_POST["kaisya"];    //会社名
 $namae		= $_POST["namae"];		//お名前
 $mailaddress	= $_POST["mailaddress"];	//メールアドレス
 $naiyou		= $_POST["naiyou"];		//お問合せ内容

 //危険な文字列を入力された場合にそのまま利用しない対策
 $kaisya		= htmlspecialchars($kaisya, ENT_QUOTES);
 $namae		= htmlspecialchars($namae, ENT_QUOTES);
 $mailaddress	= htmlspecialchars($mailaddress, ENT_QUOTES);
 $naiyou		= htmlspecialchars($naiyou, ENT_QUOTES);
} else {
 //確認ページから戻ってきた場合でなければ、変数の値は必ず空となる
 $kaisya  = '';     //会社名
 $namae		= '';				//お名前
 $mailaddress	= '';				//メールアドレス
 $naiyou		= '';				//お問合せ内容
}
?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="keywords" content="Web制作におけるディレクション、デザイン、HTML・CSSコーディング、スマートフォンサイト" />
  <meta name="description" content="鹿児島のフリーランスのWeb制作を行う小水流　英昭のポートフォリオサイトです。" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta name="format-detection" content="telephone=no">
  <meta name="msvalidate.01" content="90990EA574D939D0491B518CE86C8C88" />
  <title>contact|小水流英昭 Hideaki Kozuru/ポートフォリオ</title>
  <link rel="canonical" href="" />
  <link rel="stylesheet" type="text/css" href="../../../css/reset-min.css">
  <link rel="stylesheet" type="text/css" href="../../../css/web_common.css">
  <link rel="stylesheet" type="text/css" href="../../../css/web_contact.css">
  <link rel="stylesheet" type="text/css" href="../../../css/web_commonSp.css">
  <link rel="icon" href="../imgs/favicon/favicon-b.png" data-alt="../imgs/favicon/favicon-a.png">
  <link rel="apple-touch-icon" href="../../../imgs/favicon/apple-touch-icon-180x180.png" sizes="180x180">
  <link rel="icon" type="image/png" href="../../../imgs/favicon/android-chrome-192x192.png" sizes="192x192">
  <!--<link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.2.1/font-awesome-animation.min.css">-->

  <script src="https://www.google.com/recaptcha/api.js" async defer></script>

  <meta name="google-site-verification" content="XvPiLm4HHB8latpnyDmiV1HjOLk2YdE1Uh0alHo_Jdw" />

</head>
<body>

  <!--header-->
  <header>
    <div class="container">
      <div class="header-wrapper">
        <div class="header-lef">
          <h2><a class="logo" href="https://wazzedo.hippy.jp/business/hp/">WAZZEDO</a></h2>
        </div>
        <div class="header-right">
          <nav>
            <ul class="nav-list">
              <li class="nav-item changeText"><a class="nav-link" href="https://wazzedo.hippy.jp/business/hp/"><span>top</span><span>トップ</span></a></li>
              <li class="nav-item changeText"><a class="nav-link" href="../about/index.html"><span>about</span><span>私について</span></a></li>
              <li class="nav-item changeText"><a class="nav-link" href="../works/index.html"><span>works</span><span>活動実績</span></a></li>
              <li class="nav-item changeText"><a class="nav-link" href="mailto:h-kozuru@live.jp?subject=お問い合わせ"><span>contact</span><span>問合わせ</span></a></li>
              <li class="nav-item changeText homeBtn"><a class="nav-link" href="https://wazzedo.hippy.jp/"><span>コーポレートサイト</span></a></li>
              <li>
                <ul class="snsBtns">
                  <li class="nav-item sns1"><a class="nav-link" href="https://www.facebook.com/sharer/sharer.php?u=http://wazzedo.hippy.jp/"><i class="fab fa-twitter-square fa-lg"></i></a></li>
                  <li class="nav-item sns2"><a class="nav-link" href="https://twitter.com/wazzedo2236"><i class="fab fa-facebook-square fa-lg"></i></a></li>
                  <li class="nav-item sns3"><a class="nav-link" href="https://social-plugins.line.me/lineit/share?url=http://wazzedo.hippy.jp/"><i class="fab fa-line fa-lg"></i></a></li>
                </ul>
              </li>

              <li class="animate">
                <span>小</span><span>水</span><span>流</span>&nbsp;&nbsp;<span>英</span><span>昭</span><br />
                <span>H</span><span>i</span><span>d</span><span>e</span><span>a</span><span>k</span><span>i</span>&nbsp;<span>K</span><span>o</span><span>z</span><span>u</span><span>r</span><span>u</span>
              </li>
              <li class="navBar">
                <!--<input type="checkbox" id="menu-btn-check">-->
                <div class="menuBtn"><span></span><span></span><span></span></div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!--ヘッダーはここまで-->
  <!--本文-->
  <main>
    <section id="contact-form">
      <div class="container">
        <div class="contact-container">
          <h3 class="mail">メールでのお問い合わせ</h3>
          <form  method="post" action="confirm.php">
            <script src="https://www.google.com/recaptcha/api.js?render=6Lc1hRoaAAAAAFmEMIoaurNMyC-486fxci7o-thx"></script>
            <script>
              grecaptcha.ready(function() {
              grecaptcha.execute('6Lc1hRoaAAAAAFmEMIoaurNMyC-486fxci7o-thx', {action: 'homepage'}).then(function(token) {
               var recaptchaResponse = document.getElementById('recaptchaResponse');
              recaptchaResponse.value = token;
                });
              });
            </script>

            <p><label>会社名：<br>
              <input type="text" maxlength="255" name="kaisya" value="<?=$kaisya?>">
              </label></p>

            <p><label>お名前：<br>
              <input type="text" maxlength="255" name="namae" value="<?=$namae?>">
              </label></p>

            <p><label>メールアドレス：<br>
              <input type="email" size="30" maxlength="255" name="mailaddress" value="<?=$mailaddress?>">
              </label></p>

            <p><label>お問合せ内容：<br>
              <textarea name="naiyou" cols="36" rows="10"><?=$naiyou?></textarea>
              </label></p>

            <br/>
             <p><input type="hidden" name="recaptchaResponse" id="recaptchaResponse"  /></p>

            <p><input type="submit" value="入力内容を確認する" class="submit"></p>
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <p class="copyright">&copy2021&nbsp;WAZZEDO.</p>
  </footer>

  <script src="https://kit.fontawesome.com/245704263b.js" crossorigin="anonymous"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
  <script src="../../../js/web_common.js"></script>
  <script>
    $('a')
      .bind('touchstart', function(){
      $(this).addClass('hover');
      }).bind('touchend', function(){
      $(this).removeClass('hover');
    });
  </script>

</body>
</html>
