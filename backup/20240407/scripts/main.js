let sectionsSwitch = document.getElementById("sections-switch-wrapper");
let sectionsSwitchSectionsList = document.getElementsByClassName("sections-switch-section");
let sectionsList = document.getElementsByClassName("section");
let content = document.getElementById("content")


let currentSection = 0;
let sectionsCount = sectionsList.length;

document.body.classList.add("js-enabled");

sectionsSwitch.addEventListener("click", () => {
    sectionsSwitchSectionsList[currentSection].classList.remove("enabled");
    currentSection = (++currentSection)%sectionsCount;
    sectionsSwitchSectionsList[currentSection].classList.add("enabled");
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