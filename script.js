// Typing animation for name
function writeText(element, content) {
    if (!element) return;
    element.textContent = "";
    let contentArray = content.split("");
    let current = 0;
    let interval = setInterval(() => {
        if (current < contentArray.length) {
            element.textContent += contentArray[current++];
        } else {
            clearInterval(interval);
        }
    }, 80);
}

document.addEventListener("DOMContentLoaded", () => {
    writeText(document.getElementById("holder"), "Vishwanath Kokare");

    // WOW.js animation
    if (typeof WOW !== "undefined") new WOW().init();
});
