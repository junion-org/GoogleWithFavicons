// 検索結果にfaviconを追加する
var timer = 0;
$(document).bind('DOMNodeInserted', function(event) {
    // timerが未初期化の場合は動作しない
    if (timer) return;
    // 検索結果のAタグ前にfaviconを追加する
    timer = setTimeout(function(){
        $('h3.r>a:first-child').each(function(){
            // 追加済みでない場合のみ追加する
            if (!$(this).children('img')[0]) {
                var domain  = $(this).attr('href').split('/')[2];
                var favicon = $('<img>').attr({
                    'src': '//www.google.com/s2/favicons?domain=' + domain,
                    'class': 'google-with-favicons',
                });
                $(this).prepend(favicon);
            }
        });
        timer = 0;
    }, 100);
});

