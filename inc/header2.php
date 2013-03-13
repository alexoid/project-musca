<header id="navigation">

    <div class="menu">
        <div class="nav">
            <a href="./"><i class="icon-home"></i></a>
            <a href="./pub-letter.php"><i class="icon-info-sign remove-mobile"></i></a>
            <a href="#" onclick="prevPage()"><i class="icon-arrow-left"></i></a>
            <a href="#" onclick="nextPage()"><i class="icon-arrow-right"></i></a>
            <?php /* <a href="./toc.php"><i class="icon-reorder"></i></a> */ ?>
        </div>

        <div class="url">
            <a href="http://saymedia.com" title="Say Media" class="remove-mobile" target="blank">SayMedia.com </a>
        </div>

        <div class="logo">
            <a href="./" title="Say Quarterly">Say Quarterly<span class="remove-mobile"> &middot;
                    Spring/Summer 2013</span></a>
        </div>
    </div>

</header>


<script>
    var pageArr = ['index.php', 'pub-letter.php', 'feature-escape.php', 'feature-storytelling.php', 'feature-unusual.php', 'article-adart.php', 'article-savoring.php', 'article-canon.php', 'article-kate.php', 'article-london.php', 'article-tempest.php', 'article-xovain.php', 'sceneheard.php'];

    function getFileName() {
        var url = document.location.href;
        url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
        url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
        url = url.substring(url.lastIndexOf("/") + 1, url.length);
        return url;
    }

    function nextPage() {
        var name = getFileName();
        var next;
        for (var c = 0; c < pageArr.length; c++) {
            if (pageArr[c] == name) {
                if (c == pageArr.length - 1) {
                    next = 0;
                } else {
                    next = c + 1;
                }
                location.href = pageArr[next];
                return;
            }
        }
    }

    function prevPage() {
        var name = getFileName();
        var next;
        for (var c = 0; c < pageArr.length; c++) {
            if (pageArr[c] == name) {
                if (c == 0) {
                    next = pageArr.length - 1;
                } else {
                    next = c - 1;
                }
                location.href = pageArr[next];
                return;
            }
        }
    }
</script>

