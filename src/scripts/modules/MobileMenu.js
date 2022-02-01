class MobileMenu {
    constructor() {
        this.header = document.querySelector('.site-header')
        this.mainNav = document.querySelector('.main-nav')
        this.nav = document.querySelectorAll('.nav')
        this.hamburger = document.querySelector('.hamburger')
        this.events()
    }

    events() {
        this.hamburger.addEventListener('click', (e) => this.toggleMenu(e));
        this.nav.forEach((n) => {
            n.addEventListener('click', e => {
                if(e.target.classList.contains('link')) this.closeMenu()
            })
        })
       
    }

    toggleMenu(e) {
        this.hamburger.classList.toggle('hamburger-active');
        this.mainNav.classList.toggle('main-nav-active');
        this.header.classList.toggle('site-header-active');
    }

    closeMenu() {
        this.hamburger.classList.remove('hamburger-active');
        this.mainNav.classList.remove('main-nav-active');
        this.header.classList.remove('site-header-active');
    }


}

export default MobileMenu;