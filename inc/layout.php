<!DOCTYPE html>

<!--[if lt IE 7]>
<html class="lt-ie9 lt-ie8 lt-ie7"><![endif]--><!--[if IE 7]>
<html class="lt-ie9 lt-ie8"><![endif]--><!--[if IE 8]>
<html class="lt-ie9"><![endif]--><!--[if gt IE 8]><!-->
<html class=""><!--<![endif]-->

<head>

    <meta charset="utf-8"/>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta http-equiv="cleartype" content="on"/>

    <title>DEV: Say Quarterly</title>

    <meta name="copyright" content="2013 SAY Media, Inc."/>
    <meta name="description"/> <!-- TODO: missing description -->

    <meta name="HandheldFriendly" content="True"/>
    <meta name="MobileOptimized" content="320"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no"/>
    <meta name="format-detection" content="address=no"/>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="js/response.js"></script>
    <script src="js/quantize.js"></script>
    <script src="js/color-thief.js"></script>
    <script src="js/app.js"></script>
    <script src="js/modernizr.dev.js"></script> <!-- TODO: Production version or kill -->
    <script src="js/conditionizr.js"></script> <!-- TODO: Production version or kill -->


    <!-- form original site -->

    <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.8.4/TweenMax.min.js"></script>
    <script src="js/jquery.superscrollorama.js"></script>
    <script src="js/jquery.videoBG.js"></script>
    <script src="js/scripts.js"></script>
    <script src="./_js/fresco.js"></script>

    <link href="/favicon.png" rel="shortcut icon" type="image/png"/>
    <link href="/share.png" rel="image_src" type="image/png"/>

    <style type="text/css" media="screen">
            /*@import url("//grid.ohmylovely.com/1/24/0/768/960/1200/");*/
        @import url("../css/fresco.css");

    </style>

    <style type="text/css" media="screen">
            /* @import url("//grid.ohmylovely.com/1/24/0/768/960/1200/"); */
            /* http://project-musca.medialab.extdev.saymedia.com/_assets/cover/styles.css   TODO:what is this */

            /*  @import url("css/lovely-grid.css");*/
    </style>

    <!-- Replaced @import with this for LiveReloading -->
    <!--<link rel="stylesheet" type="text/css" href="css/styles.css" />-->


    <!-- end form original site -->

    <script>
        conditionizr({
            debug: true,
            ieLessThan: {
                active: true,
                version: '9',
                scripts: false,
                styles: false,
                classes: true,
                customScript: '//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.1/html5shiv.js'//, //cdnjs.cloudflare.com/ajax/libs/respond.js/1.1.0/respond.min.js'
            }
        });
    </script>

    <link rel="stylesheet" href="css/app.css"/>

    <script type="text/javascript" src="//use.typekit.net/ynl1uag.js"></script> <!-- TODO: form original site -->
    <script type="text/javascript">try {Typekit.load();} catch (e) {}</script>
</head>

<body id="<?php echo $_GET['include']; ?>">

<div id="fb-root"></div>



<?php

require_once '../libs/Mobile_Detect.php';

$detect = new Mobile_Detect;

$deviceType = ($detect->isMobile() ? ($detect->isTablet() ? 'tablet' : 'phone') : 'computer');

    $ismobile = false;
    if($detect->isMobile() || $detect->isTablet() ) {
        $ismobile = true;
    }

include "../inc/header.php";
include "../".$_GET['include'].".php";

?>




<div id="fb-root"></div>
<script>(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>

<script type="text/javascript">
    (function() {
        var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
        po.src = 'https://apis.google.com/js/plusone.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
    })();
</script>

<script>!function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = "//platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
        }
    }(document, "script", "twitter-wjs");</script>

<script type="text/javascript">
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-1778701-12']);
    _gaq.push(['_setDomainName', 'sayquarterly.com']);
    _gaq.push(['_trackPageview']);
    (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
</script>

</body>

</html>


