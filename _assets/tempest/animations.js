$(document).ready(function () {

    var controller = $.superscrollorama();

    var animationOffset = 100;
    var animationDuration = 300;
    var tweenDuration = 0.25;

    layers = {
        "#content":         [60, 300],
        "#community":       [86, 600],
        "#community-cover": [86, 600],
        "#commerce":        [86, 800],
        "#marketing":       [60, 1000],
        "#distribution":    [116, 1200],
        "#data":            [150, 1500],
        "#infrastructure":  [184, 2000]
    };

    $.each(layers, function (key, value) {
        controller.addTween(
            '.modules',
            (new TimelineLite())
                .append([
                    TweenMax.fromTo($(key), tweenDuration,
                        {css:{top: value[1]}, immediateRender:true, ease:Quad.easeOut},
                        {css:{top: value[0]}, ease:Quad.easeOut})
                ]),
            animationDuration,
            animationOffset
        );
    });

    // Fix the scroll position of the box when it reaches the top of the page
    $(document).ready(function(){
        var topMargin = 90;
        var $modules = $("#modules");
        var modulesTop = $modules.offset().top;

        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            if((scrollTop + topMargin) > modulesTop) {
                $modules.css('position', 'fixed');
            }
            else {
                $modules.css('position', 'relative');
            }
        });
    });

    controller.triggerCheckAnim(true);

});