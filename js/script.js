/*********/
/*lazy-js*/
/*********/
function lazyLoadScript(scriptSrc) {
    //一回だけ実行するためにおく変数
    var scrollFirstTime = 1;

    //スクロールで発火
    window.addEventListener("scroll", oneTimeFunction, false);

    function oneTimeFunction() {
        if (scrollFirstTime === 1) {

            //2回以上実行されないように変数の変更
            scrollFirstTime = 0;

            //スクリプトタグの作成と src 値の設定
            var adScript = document.createElement("script");
            adScript.src = scriptSrc;

            //async 属性の付与 いらない場合は行ごと削除
            adScript.setAttribute("async", "async");

            //スクリプトタグの挿入
            document.body.appendChild(adScript);

            //念のためスクロールイベント自体を削除
            window.removeEventListener("scroll", oneTimeFunction, false);
        }
    }
}

//使い方
lazyLoadScript("js/chart-min.js");

//2個以上 JavaScript ファイルを読み込みたい場合は lazyLoadScript 関数をその個数呼ぶ
lazyLoadScript("http://example.jp/sample2.js");
lazyLoadScript("http://example.jp/sample3.js");
/*ここまで*/
