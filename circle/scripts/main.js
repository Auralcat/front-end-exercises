// Add jQuery
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-3.2.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

// http://www.colourlovers.com/palette/4550733/Refined_Cranberry
var refined_cranberry = "#454556, #d2283f, #f16475, #991b25";

// http://www.colourlovers.com/palette/4550741/SEA_BREEZE_II
var sea_breeze = "#4989c8, #82ceed, #ccd405, #00a767";

// http://www.colourlovers.com/palette/4550735/Rainbow_Ride
var rainbow_ride = "#b3bbd7, #f9e0ea, #f8eed3, #ecefff";

// Common jQuery method
$(document).ready(function() {
    var original_palette = "#ef4dbc,#bc4bfd,#5c9cfe,#24cffb";
    var toggled = false;
    var start = "#454556, #D2283F, #F16475, #991B25";

    $("button").click(function() {
        if (toggled === false) {
            toggled = true;
            $(".circle").css({
                "background-image" : "linear-gradient(to right, " + original_palette + ")"
            });
        } else {
            $(".circle").css({
                "background-image" : "linear-gradient(to right), " + start + ")"
            });
        }
    });
});
