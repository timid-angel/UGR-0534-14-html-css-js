const nav = document.querySelector('.header__nav');
const navUl = document.querySelector('.header__nav-ul');
const navMobile = document.querySelector('.body__mobile');
const navLi = document.querySelectorAll('.mobile__li');
const button = document.querySelector('.header__button');
const body = document.querySelector('body');
let buttonActive = false;
const defaultLayout = "grid-template-rows: min(6rem, 12vh) 1fr min(4rem, 8vh);";
let bodyGridLayout = "grid-template-rows: min(6rem, 12vh) max(6rem, min(15vh, 135px)) 1fr min(4rem, 8vh);";
let mainAnimationName = "main--animation";
if (document.title === "Home") {
    bodyGridLayout = "grid-template-rows: min(6rem, 12vh) max(8rem, min(20vh, 180px)) 1fr min(4rem, 8vh);";
    mainAnimationName = "main--animation-home";
}

// event handler for the nav button
function clickHandler() {
    if (!buttonActive) {
        navMobile.hidden = false;
        navMobile.classList.add('body__mobile--animation');
        setTimeout(() => {
            navMobile.setAttribute('style', 'z-index: 1;');
        }, 500);
        body.classList.add(mainAnimationName);
        // body.setAttribute('style', bodyGridLayout);
        buttonActive = true;
    } else {
        navMobile.hidden = true;
        navMobile.classList.remove('body__mobile--animation');
        navMobile.setAttribute('style', 'z-index: -1;');
        body.classList.remove(mainAnimationName);
        // body.setAttribute('style', defaultLayout);
        buttonActive = false;
    }
}

// resets the navbar settings
function resetNavbar() {
    if (window.innerWidth < 600) {
        nav.hidden = true;
        button.hidden = false;
    } else {
        nav.hidden = false;
        button.hidden = true;
    }
    navMobile.setAttribute('style', 'z-index: -1;');
    body.classList.remove(mainAnimationName);
    body.setAttribute('style', defaultLayout);
    navMobile.hidden = true;
    buttonActive = false;
    body.setAttribute('style', defaultLayout);
}

button.addEventListener('click', clickHandler);
window.addEventListener('resize', resetNavbar);

navLi.forEach(li => {
    const innerAnchor = li.childNodes[0];
    li.addEventListener('click', () => {
        innerAnchor.click();
    })
})

// check window size upon page load
resetNavbar();