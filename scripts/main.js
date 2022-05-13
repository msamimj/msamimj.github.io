let sectionsSwitch = document.getElementById("sections-switch");
let sectionsList = document.getElementsByClassName("section");
let content = document.getElementById("content")


let currentSection = 0;
let sectionsCount = sectionsList.length;

document.body.classList.add("js-enabled");

sectionsSwitch.addEventListener("click", () => {
    currentSection = (++currentSection)%sectionsCount;
    sectionWidth = sectionsList[0].clientWidth;
    content.scroll({
        left: sectionWidth*currentSection,
        behavior: 'smooth'
    });
    sectionsList[currentSection].scroll({
        top: 0,
        behavior: 'smooth'
    });
})