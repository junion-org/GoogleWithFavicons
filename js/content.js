var timer = 0;
var delay = 100;
$(document).bind('DOMNodeInserted', function(event) {
    if (timer) return;
    timer = setTimeout(function() {
        $('h3.r>a:first-child').each(function() {
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
    }, delay);
});
