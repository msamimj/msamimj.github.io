let sectionsSwitch = document.getElementById("sections-switch");
let sectionsList = document.getElementsByClassName("section");
let content = document.getElementById("content")


let currentSection = 0;
let sectionsCount = sectionsList.length;

document.body.classList.add("js-enabled");

sectionsSwitch.addEventListener("click", () => {
    content.scroll({
        top: 0,
        left: (sectionsList[0].clientWidth*((++currentSection)%sectionsCount)),
        behavior: 'smooth'
    });
})