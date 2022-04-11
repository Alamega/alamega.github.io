const MAX_IMG_COUNT = 8;

function getRandInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

var firstRandImg =  getRandInt(MAX_IMG_COUNT);
var secondRandImg =  getRandInt(MAX_IMG_COUNT);

while (firstRandImg == secondRandImg) {
    secondRandImg = getRandInt(MAX_IMG_COUNT);
}

function getRandFon() {
    if(window.matchMedia('(max-width: 750px)').matches){
        document.getElementById('body').style.background = "url(images/chika" + firstRandImg + ".png) top left/100% repeat-y fixed";
    } else {
        document.getElementById('body').style.background = "url(images/chika" + firstRandImg + ".png) top left/60vh 100vh repeat-y fixed, url(images/chika" + secondRandImg + ".png) top right/60vh 100vh repeat-y fixed";
    }
}

document.addEventListener("DOMContentLoaded", function()
{
    window.onresize = function() {getRandFon()};
    window.onload = function() {getRandFon()};
});

