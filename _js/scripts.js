$(document).ready(function($) {

    $('items').isotope({ layoutMode : 'masonry' });

    $('.tempest .video').videoBG({
        mp4:'_assets/tempest/tempest.mp4',
        position:"absolute",
        zIndex:500,
        scale: true,
        autoplay: true,
        loop: true,
        opacity: 1
    });

});

// EOF