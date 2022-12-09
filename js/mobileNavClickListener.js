const navAbout = document.querySelector("#navAbout");
const showChildren = document.querySelector("#childrenWrapper");
const parent = document.querySelector(".nav-subcontent-parent")
const parentList = document.querySelector(".nav-subcontent-wrapper");

function clickEvent() {
    navAbout.classList.toggle("margin-top");
    showChildren.classList.toggle("children");
    parent.classList.toggle("parent");
}

function mobileMediaFunction(x)
{
    if (x.matches)
    {
        const outsideClickListener = (event) => {
            const $target = $(event.target);
            if (!$target.closest(parentList).length) {
                navAbout.classList.toggle("margin-top");
                showChildren.classList.toggle("children");
                parent.classList.toggle("parent")
            }
        }

        document.addEventListener('click', outsideClickListener);
    }
}

var x = window.matchMedia("(max-width: 1000px)");
mobileMediaFunction(x);
x.addListener(mobileMediaFunction);

