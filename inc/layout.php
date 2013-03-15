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

    <link href="/favicon.png" rel="shortcut icon" type="image/png"/>
    <link href="/share.png" rel="image_src" type="image/png"/>

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



<?php include "../inc/header.php"; ?>
<?php include "../".$_GET['include'].".php"; ?>

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

</body>

</html>


