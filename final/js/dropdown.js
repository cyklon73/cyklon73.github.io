var dropdown = document.getElementById("nav-tutorials");

dropdown.addEventListener("mouseover", mouseOver);
dropdown.addEventListener("mouseleave", mouseLeave);

function mouseOver(event){
    console.log(event.target);
    document.getElementById("nav-dropdown").style.visibility = "visible";
}

function mouseLeave(event){
    console.log(event.target);
    document.getElementById("nav-dropdown").style.visibility = "hidden";
}