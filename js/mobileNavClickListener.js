const navAbout = document.querySelector("#navAbout");
const showChildren = document.querySelector("#childrenWrapper");
const parent = document.querySelector(".nav-subcontent-parent")
const parentList = document.querySelectorAll(".nav-subcontent-wrapper")[0];

function clickEvent() {
    jQuery(navAbout).toggleClass("margin-top");
    jQuery(showChildren).toggleClass("children");
    jQuery(parent).toggleClass("parent");
}

const outsideClickListener = (event) => {
    const $target = $(event.target);
    if (!$target.closest(parentList).length) {
        jQuery(navAbout).toggleClass("margin-top");
        jQuery(showChildren).toggleClass("children");
        jQuery(parent).toggleClass("parent")
    }
}

document.addEventListener('click', outsideClickListener);

