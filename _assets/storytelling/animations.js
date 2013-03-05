$(document).ready(function () {

    // Hero background video
    video = {
        mp4: "_assets/storytelling/Great_Storytelling_600x300_5000.mp4",
        ogv: "_assets/storytelling/Great_Storytelling_600x300_5000.mp4",
        webm: "_assets/storytelling/Great_Storytelling_600x300_5000.mp4",
        poster: "",
        autoplay: true,
        loop: true,
        fullscreen: true,
        height: 500
    };

    // Hero background video
    // var videoBG = $('#hero-wrapper').videoBG(video);


    var controller = $.superscrollorama({
        triggerAtCenter: true,
        isVertical: true,
        playoutAnimations: false
    });

    var $baumgartner = $("#baumgartner");

    var start = 120;

    startScroll = $(window).height() / 2;
    offsetPercent = $baumgartner.offset().top / startScroll;
    start = start + ((1 - offsetPercent) * 200);

    // Falling Baumgartner Hero
    controller.addTween(
        $baumgartner,
        (new TimelineLite())
            .append([
                TweenMax.fromTo($baumgartner, 0.5,
                    {css:{top: start}, immediateRender:true},
                    {css:{top: -50}})
            ]),
        1000
    );

    controller.triggerCheckAnim(true);
});