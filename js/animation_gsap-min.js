/*!
 * ScrollMagic v2.0.5 (2015-04-29)
 * The javascript library for magical scroll interactions.
 * (c) 2015 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 *
 * @version 2.0.5
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic GSAP Animation Plugin.
 *
 * requires: GSAP ~1.14
 * Powered by the Greensock Animation Platform (GSAP): http://www.greensock.com/js
 * Greensock License info at http://www.greensock.com/licensing/
 */
(function(n,t){typeof define=="function"&&define.amd?define(["ScrollMagic","TweenMax","TimelineMax"],t):typeof exports=="object"?(require("gsap"),t(require("scrollmagic"),TweenMax,TimelineMax)):t(n.ScrollMagic||n.jQuery&&n.jQuery.ScrollMagic,n.TweenMax||n.TweenLite,n.TimelineMax||n.TimelineLite)})(this,function(n,t,i){"use strict";var r="animation.gsap",u=window.console||{},f=Function.prototype.bind.call(u.error||u.log||function(){},u);n||f("("+r+") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");t||f("("+r+") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs.");n.Scene.addOption("tweenChanges",!1,function(n){return!!n});n.Scene.extend(function(){var u=this,n,f=function(){u._log&&(Array.prototype.splice.call(arguments,1,0,"("+r+")","->"),u._log.apply(this,arguments))},e;u.on("progress.plugin_gsap",function(){e()});u.on("destroy.plugin_gsap",function(n){u.removeTween(n.reset)});e=function(){if(n){var t=u.progress(),i=u.state();n.repeat&&n.repeat()===-1?i==="DURING"&&n.paused()?n.play():i==="DURING"||n.paused()||n.pause():t!=n.progress()&&(u.duration()===0?t>0?n.play():n.reverse():u.tweenChanges()&&n.tweenTo?n.tweenTo(t*n.duration()):n.progress(t).pause())}};u.setTween=function(r,o,s){var l,p,w,a,v,h,y,c;arguments.length>1&&(arguments.length<3&&(s=o,o=1),r=t.to(r,o,s));try{l=i?new i({smoothChildTiming:!0}).add(r):r;l.pause()}catch(b){return f(1,"ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"),u}if(n&&u.removeTween(),n=l,r.repeat&&r.repeat()===-1&&(n.repeat(-1),n.yoyo(r.yoyo())),u.tweenChanges()&&!n.tweenTo&&f(2,"WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."),n&&u.controller()&&u.triggerElement()&&u.loglevel()>=2&&(p=t.getTweensOf(u.triggerElement()),w=u.controller().info("vertical"),p.forEach(function(n){var t=n.vars.css||n.vars,i=w?t.top!==undefined||t.bottom!==undefined:t.left!==undefined||t.right!==undefined;if(i)return f(2,"WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"),!1})),parseFloat(TweenLite.version)>=1.14)for(a=n.getChildren?n.getChildren(!0,!0,!1):[n],v=function(){f(2,"WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")},h=0;h<a.length;h++)y=a[h],c!==v&&(c=y.vars.onOverwrite,y.vars.onOverwrite=function(){c&&c.apply(this,arguments);v.apply(this,arguments)});return f(3,"added tween"),e(),u};u.removeTween=function(t){return n&&(t&&n.progress(0).pause(),n.kill(),n=undefined,f(3,"removed tween (reset: "+(t?"true":"false")+")")),u}})})
