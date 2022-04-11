const MAX_IMG_COUNT = 8;
const SPAM_COUNT = 10;

function spam(count) {
    for (let i = 0; i < count; i++) {
        document.getElementById("spamer").insertAdjacentHTML('beforeend',"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>");
        document.getElementById("spamer").insertAdjacentHTML('beforeend',"<a href=\"/index.html\">Ссылка</a>"); 
    }
}spam(SPAM_COUNT);

function getRandInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

var firstRandImg =  getRandInt(MAX_IMG_COUNT);
var secondRandImg =  getRandInt(MAX_IMG_COUNT);

if (firstRandImg == secondRandImg){
    if (secondRandImg!=MAX_IMG_COUNT) {
        secondRandImg = 1;
    } else {
        secondRandImg++;
    }
}

function getRandFon() {
    if(window.matchMedia('(max-width: 750px)').matches){
        document.getElementById('body').style.background = "url(images/chika"+ firstRandImg +".png) top left/100% repeat-y fixed";
      } else {
        document.getElementById('body').style.background = "url('images/chika"+ firstRandImg +".png') top left/60vh 100vh repeat-y fixed, url('images/chika"+ secondRandImg +".png') top right/60vh 100vh repeat-y fixed";
    }
}

document.addEventListener("DOMContentLoaded", function(event)
{
    window.onresize = function() {getRandFon()};
    window.onload = function() {getRandFon()};
});