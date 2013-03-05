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


    var controller = $.superscrollorama();

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

    var showMoreInfo = function (tween) {
        tween.target.siblings('.more-content').fadeIn();
    };

    var clearTween = function (tween, callback) {
        controller.removeTween(tween);
        if (callback) {
            callback(tween);
        }
    };

    // controller.addTween('#pig', TweenMax.from( $('#pig'), 0.75, {css:{opacity:0}}), 0);
    controller.addTween('#pig', TweenMax.from( $('#pig'), 0.75,
        {
            css: {opacity:0, width:0},
            immediateRender: true,
            ease: Elastic.easeOut,
            onComplete: clearTween,
            onCompleteParams:["{self}", showMoreInfo]
        }),
        0,
        -100
    );


    controller.addTween('#oreo', TweenMax.from( $('#oreo'), 1.5, {css:{rotation: 720}, ease:Back.easeOut, onComplete:clearTween, onCompleteParams:["{self}"]}), 0);
    controller.addTween('#oreo-container', TweenMax.from( $('#oreo-container'), 1.5, {css:{right:-1000}, ease:Back.easeOut, onComplete:clearTween, onCompleteParams:["{self}"]}), 0);

    $falling = $('#falling-baumgartner');
    var dudeLoaded      = false,
        dudeGone        = false,
        dudeDoneLoading = false;
    $(document).scroll(function () {
        startOffset = 0.25;
        endOffset = 0.6;
        fromBottom = $(window).scrollTop() + $(window).height();
        if (!dudeLoaded && ($falling.offset().top + ($(window).height() * startOffset)) <= fromBottom) {
            dudeLoaded = true;
            TweenMax.fromTo( $falling, 2.5, {css:{opacity:0,top:-500}}, {css:{opacity:1,top:370}, ease:Elastic.easeInOut, onComplete: function() { dudeDoneLoading = true; }});
        }
    });
    controller.triggerCheckAnim(true);
});