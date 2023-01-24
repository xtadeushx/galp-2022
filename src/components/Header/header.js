function burgerMenu() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const body = document.querySelector('.body');

    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active');
            burger.classList.add('active');
            body.classList.add('locked');
        } else {
            menu.classList.remove('active');
            burger.classList.remove('active');
            body.classList.remove('locked');
        }
    });
    // ^ Set navbar breakpoints
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active');
            burger.classList.remove('active');
            body.classList.remove('locked');
        }
    });
}
burgerMenu();

// ^ Call this  function if we need to fix menu on scroll

function fixedHeader() {
    const nav = document.querySelector('.header');

    // Set in px how many we need to scroll to be our menu fixed
    const breakpoint = 1;
    if (window.screenY >= breakpoint) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
}
window.addEventListener('scroll', fixedHeader);
