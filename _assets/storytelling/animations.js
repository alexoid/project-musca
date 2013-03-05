$(document).ready(function () {

    video = {
        mp4: "_assets/storytelling/video.mp4",
        ogv: "_assets/storytelling/video.mp4",
        webm: "_assets/storytelling/video.mp4",
        poster: "",
        autoplay: true,
        loop: true,
        fullscreen: false
    };

    // Hero background video
    var videoBG = $('#hero-wrapper').videoBG(video);

    var controller = $.superscrollorama();

    // Falling Baumgartner Hero
    controller.addTween(
        '#baumgartner-capsule',
        (new TimelineLite())
            .append([
                TweenMax.fromTo($('#baumgartner'), .5, 
                    {css:{top: 500}, immediateRender:true}, 
                    {css:{top: 150}})
            ]),
        1000
    );




    window.scrollBy(0,1);
});