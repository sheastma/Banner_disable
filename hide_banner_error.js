// ==UserScript==
// @name Banner Disable
// @namespace sheastma
// @description This script will automagically blah blah blah
// @include *
// ==/UserScript==
var checkforbanner = setInterval(function() {
  if(document.getElementById('banner:error')){
    var imgs = document.getElementById('banner:error');
    imgs.style.visibility = 'hidden';
    clearInterval(checkforbanner);
  }
},100);
