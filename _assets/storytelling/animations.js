$(document).ready(function () {

    var controller = $.superscrollorama({
        triggerAtCenter: true,
        isVertical: true,
        playoutAnimations: false
    });

    var $baumgartner = $("#baumgartner");

    var start = 100;

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
                    {css:{top: -200}})
            ]),
        1000
    );

    controller.triggerCheckAnim(true);
});