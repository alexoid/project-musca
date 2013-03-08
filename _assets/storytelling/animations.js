$(document).ready(function () {


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


    var $container = $('oreo-container');
    controller.addTween('#oreo', TweenMax.from( $('#oreo'), 2, {css:{rotation: 720}, ease:Back.easeOut, onComplete:clearTween, onCompleteParams:["{self}", showMoreInfo]}), 0);
    controller.addTween('#oreo-container', TweenMax.from( $('#oreo-container'), 2,
        {
            css: {right:-1000},
            ease:Back.easeOut,
            onComplete: clearTween,
            onCompleteParams:["{self}"]
        }), 0);

    $falling = $('#falling-baumgartner');
    var dudeLoaded = false;
    $(document).scroll(function () {
        startOffset = 0.5;
        fromBottom = $(window).scrollTop() + $(window).height();
        if (!dudeLoaded && ($falling.offset().top + ($(window).height() * startOffset)) <= fromBottom) {
            dudeLoaded = true;
            TweenMax.fromTo( $falling, 2, {css:{opacity:0,top:-500, left:-100}}, {css:{opacity:1,top:280,left:0}, ease:Back.easeOut, onComplete: showMoreInfo, onCompleteParams: ["{self}"]});
        }
    });
    controller.triggerCheckAnim(true);
});