const navbar = document.querySelector('.navbar');
const section1 = document.querySelector('.section-1');

window.onscroll = (e) => {
    if (scrollY > 20) {
        navbar.classList.add('bg-white');
        navbar.classList.add('shadow-sm');
        navbar.classList.remove('border-bottom');
    } else {
        navbar.classList.remove('bg-white');
        navbar.classList.remove('shadow-sm');
    }

    section1.style.transform = 'translateY(' + scrollY / 2 + 'px)';
}

AOS.init();

baguetteBox.run('#baguetteBox');
