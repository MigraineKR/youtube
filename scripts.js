const menuIcon = document.getElementById("video-list-button");
const videoList = document.getElementById("video-list");

menuIcon.addEventListener("click", () => {
    if (videoList.classList.contains("hidden")) {
        videoList.classList.remove("hidden");
    } else {
        videoList.classList.add("hidden");
    }
});
