// ==UserScript==
// @name        lazyProgrammers
// @namespace   me.0xDeMoN.com
// @description Displays any commented out PHP code
// @include     *
// @version     1
// @grant       none
// ==/UserScript==


function lazyProgrammers()
{
  if(results = document.documentElement.innerHTML.match(/<\?(php)?(.|[\r\n])+\?>/gmi))
  {
    for(i = 0; i < results.length; i++)
      alert(results[i]);
  }
}

window.onload = lazyProgrammers();
