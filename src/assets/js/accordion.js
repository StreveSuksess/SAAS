const accordions = document.querySelectorAll(".accordion");

accordions.forEach(accordion => {
    let accordionButton = accordion.querySelector(".accordionButton");
    let accordionArray = accordionButton.querySelector("img");
    let accordionInner =accordion.querySelector(".accordionInner");
    accordionButton.addEventListener("click", () => {
        accordionInner.classList.toggle("dn");
        accordionInner.classList.toggle("mxh-0");
        accordionArray.classList.toggle("transorm-rotate");
    })
})