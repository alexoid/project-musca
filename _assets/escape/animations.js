$(document).ready(function () {
    var controller = $.superscrollorama();

    controller.addTween('#sarah-rotman', TweenMax.from( $('#sarah-rotman'), .25, {css:{right:'1000px'}, ease:Quad.easeInOut}), 0, -200);
    controller.addTween('#jp-rangaswami', TweenMax.from( $('#jp-rangaswami'), .25, {css:{right:'1000px'}, ease:Quad.easeInOut}), 0, -100);
    controller.addTween('#vivek-wadhwa', TweenMax.from( $('#vivek-wadhwa'), .25, {css:{left:'1000px'}, ease:Quad.easeInOut}), 0, -20);
    controller.addTween('#david-sobotta', TweenMax.from( $('#david-sobotta'), .25, {css:{left:'1000px'}, ease:Quad.easeInOut}), 0, -100);
    controller.addTween('#alan-cohen', TweenMax.from( $('#alan-cohen'), .25, {css:{left:'1000px'}, ease:Quad.easeInOut}), 0, -150);
});