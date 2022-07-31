var dropdown = document.getElementById("nav-tutorials");
var isOpen = false;

dropdown.addEventListener("click", toggle);
dropdown.addEventListener("mouseover", mouseOver);
dropdown.addEventListener("mouseleave", mouseLeave);

document.body.addEventListener('click', hideOnClickOutsite, true); 

function hideOnClickOutsite(event){
    const isClickInside = document.getElementById("nav-dropdown").contains(event.target);

    if (!isClickInside && isOpen) {
        document.getElementById("nav-dropdown").style.visibility = "hidden";
        opened = false;
    }
}
function toggle(event){
    isOpen = !isOpen;
    if (isOpen) {
        document.getElementById("nav-dropdown").style.visibility = "visible";
    } else {
        document.getElementById("nav-dropdown").style.visibility = "hidden";
    }
}

function mouseOver(event){
    if (!isOpen) document.getElementById("nav-dropdown").style.visibility = "visible";
}

function mouseLeave(event){
    if (!isOpen) document.getElementById("nav-dropdown").style.visibility = "hidden";
}