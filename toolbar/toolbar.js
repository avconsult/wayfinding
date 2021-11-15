
"use strict";
const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const menu = body.querySelector(".menu")
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = document.getElementById("menu-border");
let activeItem = menu.querySelector(".active");


function init(){
    menuBorder.classList.remove('menu__border');
    // activeItem.classList.remove('active');
}
init();

function clickItem(item, index) {
    menu.style.removeProperty("--timeOut");
    if (activeItem == item) return;

    if(activeItem && item.id != 'search-icon' && item.id != 'list-icon')
        activeItem.classList.remove("active");

    if(item.id != 'search-icon' && item.id != 'list-icon') {
        item.classList.add("active");
        activeItem = item;
        offsetMenuBorder(activeItem, menuBorder);
    }
}

function offsetMenuBorder(element, menuBorder) {
    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
}

offsetMenuBorder(activeItem, menuBorder);
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => clickItem(item, index));
})

window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});
