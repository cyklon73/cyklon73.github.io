var txt = document.getElementById("nav-tutorials");


txt.addEventListener("mouseover", mouseOver);
txt.addEventListener("mouseleave", mouseLeave);

function mouseOver(event){
    console.log(event.target);
    document.getElementById("dropdown").style.visibility = "visible";
}

function mouseLeave(event){
    console.log(event.target);
    document.getElementById("dropdown").style.visibility = "hidden";
}