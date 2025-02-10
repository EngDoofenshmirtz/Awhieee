const cursor = document.querySelector(".cursor");

// Function to update cursor position
function updateCursor(x, y) {
    cursor.style.left = x - 100 + "px";
    cursor.style.top = y - 100 + "px";
}

// Mouse movement for desktop
window.addEventListener("mousemove", function (e) {
    updateCursor(e.clientX, e.clientY);
});

// Touch movement for mobile
window.addEventListener("touchmove", function (e) {
    let touch = e.touches[0]; // Get the first touch point
    updateCursor(touch.clientX, touch.clientY);
});
