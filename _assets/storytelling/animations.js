$(document).ready(function () {

    // video = {
    //     mp4: "_assets/storytelling/video.mp4",
    //     ogv: "_assets/storytelling/video.mp4",
    //     webm: "_assets/storytelling/video.mp4",
    //     poster: "",
    //     autoplay: true,
    //     loop: true,
    //     fullscreen: false
    // };

    // Hero background video
    // var videoBG = $('.wrapper').videoBG(video);

    var controller = $.superscrollorama();

    // Falling Baumgartner Hero
    controller.addTween(
        '#baumgartner',
        (new TimelineLite())
            .append([
                TweenMax.fromTo($('#baumgartner'), .5,
                    {css:{top: 70}, immediateRender:true},
                    {css:{top: -200}})
            ]),
        1000
    );

    window.scrollBy(0,1);
});