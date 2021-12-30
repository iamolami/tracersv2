//Hamburger
const hamburger = document.getElementById('nav-icon2');
const menu = document.getElementById('menu')
const menuTransform = document.getElementById('transform')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    menu.classList.toggle('show__menu')
})

//Menu Accordion
const acc = document.getElementById("accordion");
const menuAccordion = document.getElementById("menu__accordion")
const pubAccordion = document.getElementById("pub__accordion")

acc.addEventListener('click', () => {
    acc.classList.toggle("menu__active");
    let panel = acc.nextElementSibling;
    if (panel.style.maxHeight) {

        panel.style.maxHeight = null;
    } else {

        panel.style.maxHeight = panel.scrollHeight + "px";
    }
})

menuAccordion.addEventListener('click', () => {
    menuAccordion.classList.toggle("menu__active");
    let panel = menuAccordion.nextElementSibling;
    if (panel.style.maxHeight) {

        panel.style.maxHeight = null;
    } else {

        panel.style.maxHeight = panel.scrollHeight + "px";
    }
})

pubAccordion.addEventListener('click', () => {
    pubAccordion.classList.toggle("menu__active");
    let panel = pubAccordion.nextElementSibling;
    if (panel.style.maxHeight) {

        panel.style.maxHeight = null;
    } else {

        panel.style.maxHeight = panel.scrollHeight + "px";
    }
})