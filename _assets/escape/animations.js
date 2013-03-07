$(document).ready(function () {

    var controller = $.superscrollorama();

    controller.addTween('#sarah-rotman', TweenMax.from( $('#sarah-rotman'), .75, {css:{right:'1000px', rotation: -100}, ease:Quad.easeInOut}), 0, -200);
    controller.addTween('#jp-rangaswami', TweenMax.from( $('#jp-rangaswami'), .75, {css:{right:'1000px', rotation: -540}, ease:Quad.easeInOut}), 0, -50);
    controller.addTween('#vivek-wadhwa', TweenMax.from( $('#vivek-wadhwa'), .75, {css:{left:'1000px', rotation: 180}, ease:Quad.easeInOut}), 0, -20);
    controller.addTween('#david-sobotta', TweenMax.from( $('#david-sobotta'), .75, {css:{left:'1000px', rotation: 120}, ease:Quad.easeInOut}), 0, -100);
    controller.addTween('#alan-cohen', TweenMax.from( $('#alan-cohen'), .75, {css:{left:'1000px', rotation: 240}, ease:Quad.easeInOut}), 0, -150);

    window.scrollBy(0,1);

});