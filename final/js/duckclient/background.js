const light = document.querySelector(".light");
const grid = document.querySelector("#hex-grid");

grid.addEventListener("mousemove", function (e) {
    light.style.left = `${e.clientX}px`;
    if (e.clientY > 200) {
        light.style.top = `${e.clientY}px`;
    }
});