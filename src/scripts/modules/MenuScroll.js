class MenuScroll {
    constructor() {
        this.header = document.querySelector('.site-header')
        this.section = document.querySelector('#home')
        this.sectionObserver = new IntersectionObserver(this.sectionObserve.bind(this), {root: null, threshold: 1})
        this.events()
    }

    events() {
        this.sectionObserver.observe(this.section);
    }

    sectionObserve(entries, observer) {
        let [entry] = entries;
        this.header.classList.remove('site-header-active-color')
        if(!entry.isIntersecting) this.header.classList.add('site-header-active-color')
    }
}

export default MenuScroll;