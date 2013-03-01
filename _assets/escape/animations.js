$(document).ready(function () {


    // Hero background video
    var videoBG = $('#hero-wrapper').videoBG({
        mp4: "_assets/escape/Dan_GreatEscape_2000.mp4",
        ogv: "_assets/escape/Dan_GreatEscape_2000.mp4",
        webm: "_assets/escape/Dan_GreatEscape_2000.mp4",
        poster: "_assets/escape/dan.png",
        autoplay: true
    });


    var controller = $.superscrollorama();

    // var pinDur = 4000;
    // // create animation timeline for pinned element
    // var pinAnimations = new TimelineLite();
    // pinAnimations
    //     .append([
    //         TweenMax.to($('#article'), .5, {css:{top:0}}),
    //         TweenMax.from($('#article .content:first'), .5, {css:{marginTop:'-600px'}})
    //     ], .5);
    
    // // pin element, use onPin and onUnpin to adjust the height of the element
    // controller.pin($('#article'), pinDur, {
    //     anim:pinAnimations, 
    //     onPin: function() {
    //         console.log('starting pin');
    //     }, 
    //     onUnpin: function() {
    //         console.log('end pin');
    //     }
    // });

    controller.addTween('#sarah-rotman', TweenMax.from( $('#sarah-rotman'), .75, {css:{right:'1000px', rotation: -100}, ease:Quad.easeInOut}), 0, -200);
    controller.addTween('#jp-rangaswami', TweenMax.from( $('#jp-rangaswami'), .75, {css:{right:'1000px', rotation: -540}, ease:Quad.easeInOut}), 0, -50);
    controller.addTween('#vivek-wadhwa', TweenMax.from( $('#vivek-wadhwa'), .75, {css:{left:'1000px', rotation: 180}, ease:Quad.easeInOut}), 0, -20);
    controller.addTween('#david-sobotta', TweenMax.from( $('#david-sobotta'), .75, {css:{left:'1000px', rotation: 120}, ease:Quad.easeInOut}), 0, -100);
    controller.addTween('#alan-cohen', TweenMax.from( $('#alan-cohen'), .75, {css:{left:'1000px', rotation: 240}, ease:Quad.easeInOut}), 0, -150);
});