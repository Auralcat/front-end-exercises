// Add jQuery
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

// Checking if jQuery is working:
if ('undefined' == typeof window.jQuery) {
    // jQuery not present
    alert("jQuery not working");
} else {
    // jQuery present
    alert("jQuery working");
}

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

// Preventing closing when click inside counter
$('.minus, .plus').click(function(a) {
    a.stopPropagation();
});

// Adding counter [Preview 1]
$('.paper.preview-1, .plus').click(function() {
    $(this).parent().find('.number').html(function (y, val) {
        return val * 1 + 1;
    });
});

$('.paper-preview-1 .minus').click(function() {
    var increased = parseInt($(this).parent().find('.number').text());
    if (isNaN(increased) || increased > 0) {
        $(this).parent().find('.number').html(function(t, val) {
            return val * 1 - 1;
        });
    } else {
        return false;
    }
});

$('paper.preview-1 .plus, .paper.preview-1 .minus').click(function() {
    var increased = parseInt($(this).parent().find('.number').text());

    var itemsTotal = 0;
    $('.paper.preview-1 .number').each(function() {
        itemsTotal += ($(this).html() * 1);
    });
    $('.paper.preview-1 .items-total').html(itemsTotal);

    var itemsTotalAll = parseInt($('.paper.preview-1 .items-total').text());
    if (isNaN(itemsTotalAll) || itemsTotalAll <= 0) {
        $('.paper.preview-1 .action').hide();
    } else {
        $('.paper.preview-1 .action').show();
    }

    if (isNaN(increased) || increased <= 0) {
        $(this).parent().find('.number').hide();
    } else {
        $(this).parent().find('.number').show();
    }
});
