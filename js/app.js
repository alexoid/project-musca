function setColor(){
    var pal;
    var dominant;
    var tmpImg = new Image();
    var url = $('body').css("background-image").split('url(')[1];
    url = url.substring(0,url.length-1);
    tmpImg.onload = function(){
        pal = createPalette(tmpImg, 5);
        //dominant = getDominantColor(tmpImg);
        console.log(pal);
        //console.log(dominant);
        $('h1').css("color","rgb(" + pal[2][0] + "," + pal[2][1] + "," + pal[2][2] +" )" );
        $('p.dek').css("color","rgb(" + pal[1][0] + "," + pal[1][1] + "," + pal[1][2] +" )" );
        $('h2').css("color","rgb(" + pal[0][0] + "," + pal[0][1] + "," + pal[0][2] +" )" );
    };
    tmpImg.src = url;
}

function processBreakouts(){
    // This needs to be called once we know the height of the blocks. Might need to wait for all images to laod.

    // Reset all the maring-tops. If we need to user margin-top in the CSS we'll need to read and store it here.
    $('.block').css('margin-top','');

    $('.breakout').each(function(){

        var breakoutTop = $(this).offset().top;
        var breakoutBottom = breakoutTop + $(this).outerHeight();

        console.log("Checking Breakout " + breakoutTop +','+ breakoutBottom );

        $('.block').each(function(){

            var blockTop = $(this).offset().top;
            var blockBottom = blockTop + $(this).outerHeight();

            console.log("Checking Block " + $(this).attr('id') + ': ' + blockTop +','+blockBottom);

            if( (blockTop >= breakoutTop && blockTop <= breakoutBottom) || (blockTop <= breakoutTop && blockBottom >= breakoutTop) ) {
                console.log("Adjusting block: " + $(this).attr('id') );
                console.log(breakoutTop+','+breakoutBottom+','+blockTop+','+blockBottom);
                var dY = (breakoutBottom - blockTop + 60 )+"px";
                var mTop = $(this).css('margin-top');
                var margin = ( parseInt(dY) + parseInt(mTop) ) + "px";
                $(this).css('margin-top', margin);
            }
            $(this).css('opacity', 1);
        });
    });
}

var breakPoints = [0,740,1060,1360];

$(document).ready(function(){
    // Add our custom breakpoints for Javascript
    Response.create({
        prop: "width"  // "width" "device-width" "height" "device-height" or "device-pixel-ratio"
        , prefix: "min-width- r src"  // the prefix(es) for your data attributes (aliases are optional)
        , breakpoints: breakPoints  // min breakpoints (defaults for width/device-width)
        , lazy: true // optional param - data attr contents lazyload rather than whole page at once
    });

    // Handle the breakpoint crossovers
    Response.crossover(function(){
        // Following only required if we want to get the current band. Not efficient.
        breakPoints.sort(function(a,b){return a-b});
        var w = Response.viewportW();
        var band;
        for(var b=0;b<breakPoints.length;b++){
            if( w >= breakPoints[b] ){
                band = breakPoints[b];
            }
        }
        console.log(band);

        processBreakouts();
    },'width');


    // Dynamically extract hero color palette
//  setColor();
});

$(window).load(function(){
   processBreakouts();
});