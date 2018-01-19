const text = document.querySelector('.mainText');
const mainContainer = document.querySelector('.container');

mainContainer.addEventListener("mousemove", runEvent);

// Event handler
function runEvent(e) {
    e.preventDefault();
    // Print coordinates of the mouse on move on the target element
    text.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;

    // Change body background color taking the coordinates as values of rgb;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, 180, ${e.offsetY})`;
}
