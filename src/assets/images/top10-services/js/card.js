const overlook = document.querySelector(".overlook");
const capabilities = document.querySelector(".capabilities");
const reviews = document.querySelector(".reviews");
const photoAndVideos = document.querySelector(".photoAndVideos");

const overlookButton = document.querySelector(".overlookButton");
const capabilitiesButton = document.querySelector(".capabilitiesButton");
const reviewsButton = document.querySelector(".reviewsButton");
const photoAndVideosButton = document.querySelector(".photoAndVideosButton");

let activeChapter = overlook;
let activeChapterButton = overlookButton;

if(overlook != null){
    overlookButton.addEventListener("click", () => {
        activeChapter.classList.remove("db");
        activeChapter.classList.add("dn");
        activeChapter = overlook;
        activeChapter.classList.remove("dn");
        activeChapter.classList.add("db");
    
        activeChapterButton.classList.remove("bg-blue-6");
        activeChapterButton.classList.remove("c-white-2");
        activeChapterButton.classList.remove("hbg-white");
        activeChapterButton.classList.remove("hc-blue-6");
        activeChapterButton.classList.add("bg-white");
        activeChapterButton.classList.add("c-blue-6");
        activeChapterButton.classList.add("hbg-blue-6");
        activeChapterButton.classList.add("hc-white-2");
        activeChapterButton = overlookButton;
        activeChapterButton.classList.add("bg-blue-6");
        activeChapterButton.classList.add("c-white-2");
        activeChapterButton.classList.add("hbg-white");
        activeChapterButton.classList.add("hc-blue-6");
        activeChapterButton.classList.remove("bg-white");
        activeChapterButton.classList.remove("c-blue-6");
        activeChapterButton.classList.remove("hbg-blue-6");
        activeChapterButton.classList.remove("hc-white-2");
    });
    
    capabilitiesButton.addEventListener("click", () => {
        activeChapter.classList.remove("db");
        activeChapter.classList.add("dn");
        activeChapter = capabilities;
        activeChapter.classList.remove("dn");
        activeChapter.classList.add("db");
    
        activeChapterButton.classList.remove("bg-blue-6");
        activeChapterButton.classList.remove("c-white-2");
        activeChapterButton.classList.remove("hbg-white");
        activeChapterButton.classList.remove("hc-blue-6");
        activeChapterButton.classList.add("bg-white");
        activeChapterButton.classList.add("c-blue-6");
        activeChapterButton.classList.add("hbg-blue-6");
        activeChapterButton.classList.add("hc-white-2");
        activeChapterButton = capabilitiesButton;
        activeChapterButton.classList.add("bg-blue-6");
        activeChapterButton.classList.add("c-white-2");
        activeChapterButton.classList.add("hbg-white");
        activeChapterButton.classList.add("hc-blue-6");
        activeChapterButton.classList.remove("bg-white");
        activeChapterButton.classList.remove("c-blue-6");
        activeChapterButton.classList.remove("hbg-blue-6");
        activeChapterButton.classList.remove("hc-white-2");
    });
    
    reviewsButton.addEventListener("click", () => {
        activeChapter.classList.remove("db");
        activeChapter.classList.add("dn");
        activeChapter = reviews;
        activeChapter.classList.remove("dn");
        activeChapter.classList.add("db");
    
        activeChapterButton.classList.remove("bg-blue-6");
        activeChapterButton.classList.remove("c-white-2");
        activeChapterButton.classList.remove("hbg-white");
        activeChapterButton.classList.remove("hc-blue-6");
        activeChapterButton.classList.add("bg-white");
        activeChapterButton.classList.add("c-blue-6");
        activeChapterButton.classList.add("hbg-blue-6");
        activeChapterButton.classList.add("hc-white-2");
        activeChapterButton = reviewsButton;
        activeChapterButton.classList.add("bg-blue-6");
        activeChapterButton.classList.add("c-white-2");
        activeChapterButton.classList.add("hbg-white");
        activeChapterButton.classList.add("hc-blue-6");
        activeChapterButton.classList.remove("bg-white");
        activeChapterButton.classList.remove("c-blue-6");
        activeChapterButton.classList.remove("hbg-blue-6");
        activeChapterButton.classList.remove("hc-white-2");
    });
    
    photoAndVideosButton.addEventListener("click", () => {
        activeChapter.classList.remove("db");
        activeChapter.classList.add("dn");
        activeChapter = photoAndVideos;
        activeChapter.classList.remove("dn");
        activeChapter.classList.add("db");
    
        activeChapterButton.classList.remove("bg-blue-6");
        activeChapterButton.classList.remove("c-white-2");
        activeChapterButton.classList.remove("hbg-white");
        activeChapterButton.classList.remove("hc-blue-6");
        activeChapterButton.classList.add("bg-white");
        activeChapterButton.classList.add("c-blue-6");
        activeChapterButton.classList.add("hbg-blue-6");
        activeChapterButton.classList.add("hc-white-2");
        activeChapterButton = photoAndVideosButton;
        activeChapterButton.classList.add("bg-blue-6");
        activeChapterButton.classList.add("c-white-2");
        activeChapterButton.classList.add("hbg-white");
        activeChapterButton.classList.add("hc-blue-6");
        activeChapterButton.classList.remove("bg-white");
        activeChapterButton.classList.remove("c-blue-6");
        activeChapterButton.classList.remove("hbg-blue-6");
        activeChapterButton.classList.remove("hc-white-2");
    });
}