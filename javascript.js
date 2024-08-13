var courserdot = document.querySelector(".courser-dot");
var courseroutline = document.querySelector(".courser-outline");

window.addEventListener("mousemove", function(directiions){
    var positionX = directiions.clientX;
    var positionY = directiions.clientY;

    courserdot.style.left = `${positionX}px`;
    courserdot.style.top = `${positionY}px`;

// courseroutline.style.left = `${positionX}px`;
// courseroutline.style.top = `${positionY}px`;

courseroutline.animate({
    left:`${positionX}px`,
    top : `${positionY}px`
}, {duration: 500, fill :"forwards"});
});
