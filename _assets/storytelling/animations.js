$(document).ready(function () {
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