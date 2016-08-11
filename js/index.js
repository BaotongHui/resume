FastClick.attach(document.body);
var winW = document.documentElement.clientWidth;
document.documentElement.style.fontSize = winW / 640 * 100 + "px";


//

var music = document.getElementById("music");
   var   musicAudio = document.getElementById("musicAudio");

window.setTimeout(function () {
    musicAudio.play();
    musicAudio.addEventListener("canplay", function play () {
        music.style.display = "block";
        music.className = "music move";
    }, false);
}, 1000);

music.addEventListener("click", function stopmove () {
    if (musicAudio.paused) {
        musicAudio.play();
        music.className = "music move";
        return;
    }
    musicAudio.pause();
    music.className = "music";
}, false);

new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    onSlidePrevEnd: over,
    onSlideNextEnd: over
});



//
function over(swiper) {
    var n = swiper.activeIndex;
      var  page = swiper.slides;
    for (var i = 0; i < page.length; i++) {
        var newpage = page[i];
        if (i == n) {

            if (n == 1 ||n>6) {
                newpage.id = 'page1';
                return
            }else{
                newpage.id = 'page'+n;
                return
            };
            if (n ==0||n==6) {
                newpage.id = 'page6';
                return
            }
        }
        newpage.id = null;
    }

}



















