"use strict";

// TODO
// - Use jQuery
// - Refactor for style

const text = document.querySelector('.mainText');
const mainContainer = document.querySelector('.container');

// Event handler
mainContainer.addEventListener('mouseover', function(e) {
    e.preventDefault();
    // Print coordinates of the mouse on move on the target element
    text.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;

    // Change body background color taking the coordinates as values of rgb;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, 180, ${e.offsetY})`;
});

// jQuery part
$('.container').mouseover(function(e) {
    e.preventDefault();
    $(body).css({"background-color" : `rgb($e.offsetX), 180, offsetY`});
});
