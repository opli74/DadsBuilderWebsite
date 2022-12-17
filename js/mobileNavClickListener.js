const navAbout = document.querySelectorAll("#navAbout");
const showChildren = document.querySelectorAll("#childrenWrapper");
const parent = document.querySelectorAll(".nav-subcontent-parent")
const parentList = document.querySelectorAll(".nav-subcontent-wrapper");

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

