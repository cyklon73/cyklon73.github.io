let youtubeSelectToggeld = false;

function toggleFooterYoutubeSelect() {
    if (youtubeSelectToggeld) {
        youtubeSelectToggeld = false;
        document.getElementById("footer-youtube-selection").style.visibility = "hidden";
    } else {
        youtubeSelectToggeld = true;
        getSubscribers();
        document.getElementById("footer-youtube-selection").style.visibility = "visible";
    }
}