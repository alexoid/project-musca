$(document).ready(function () {

    // Hero background video
    var videoBG = $('#hero-wrapper').videoBG({
        mp4: "_assets/tempest/Tempest_Lightning-Musca_2000.mp4",
        ogv: "_assets/tempest/Tempest_Lightning-Musca_2000.mp4",
        webm: "_assets/tempest/Tempest_Lightning-Musca_2000.mp4",
        poster: "",
        autoplay: true,
        loop: true,
        fullscreen: true
    });


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
        "#infrastructure":  [183, 2000]
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

    window.scrollBy(0,1);

});