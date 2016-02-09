// ==UserScript==
// @name        ShadowLift
// @namespace   me.0xDeMoN.com
// @description Display all hidden input boxes
// @include     *
// @version     1
// @grant       none
// ==/UserScript==
function liftShadows()
{
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++)
  {
    if (inputs[i].getAttribute('type') == 'hidden')
    inputs[i].setAttribute('type', 'text');
  }
}
window.onload = liftShadows();
