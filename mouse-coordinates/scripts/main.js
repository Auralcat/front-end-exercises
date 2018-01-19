// TODO
// - Use jQuery
// - Refactor for style

var script = document.createElement("script");
script.src = "http://code.jquery.com/jquery-3.2.1.min.js";
script.type = "text/javascript";
document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function() {
    $("button").click(function () {
        alert("Everything's fine");
    });

    // Now we'll get to the actual work, I guess I needed to reload the file
    // and not the page...?
    $(".container").mousemove(function (e) {
        e.preventDefault();

        $("body").css({
            'background-color': 'rgb(' + e.offsetX + ', 180, ' + e.offsetY + ')'
        });

        $(".mainText").text('MouseX: ' + e.offsetX + '; MouseY: ' + e.offsetY);
    });
});
