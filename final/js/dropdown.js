var dropdown = document.getElementById("nav-tutorials");
var open = false;

dropdown.addEventListener("click", toggle);
dropdown.addEventListener("mouseover", mouseOver);
dropdown.addEventListener("mouseleave", mouseLeave);

document.body.addEventListener('click', hideOnClickOutsite, true); 

function hideOnClickOutsite(event){
    const isClickInside = document.getElementById("nav-dropdown").contains(event.target);

    if (!isClickInside && open) {
        document.getElementById("nav-dropdown").style.visibility = "hidden";
        opened = false;
    }
}
function toggle(event){
    open = !open;
    if (open) {
        document.getElementById("nav-dropdown").style.visibility = "visible";
    } else {
        document.getElementById("nav-dropdown").style.visibility = "hidden";
    }
}

function mouseOver(event){
    if (!open) document.getElementById("nav-dropdown").style.visibility = "visible";
}

function mouseLeave(event){
    if (!open) document.getElementById("nav-dropdown").style.visibility = "hidden";
}