// Add jQuery
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

// Preview 1
$('.paper.preview-1 .item').click(function () {
    $('.paper.preview-1 .item').not(this).removeClass('active');
    $(this).toggleClass('active');
    if ($('.paper.preview-1')).hasClass('active')) {
    $('.paper.preview-1').addClass('item-active');
    }
    else {
        $('.paper.preview-1').removeClass('item-active');
    };
});
