class RevealOnScroll {
    constructor() {
        this.sections = document.querySelectorAll('.section-js'),
        this.sectionObserver = new IntersectionObserver(this.sectionObserve, {root: null, threshold: 0.1})
        this.events()
    }

    events() {
        this.sections.forEach(section => {
            section.classList.add('section-js-hidden'); 
            this.sectionObserver.observe(section);
        })
    }

    sectionObserve(entries, observer) {
        let [entry] = entries;  
        if(!entry.isIntersecting) return;
        entry.target.classList.remove('section-js-hidden')
        observer.unobserve(entry.target);
    }
}

export default RevealOnScroll;