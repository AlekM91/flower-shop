class SmoothScroll {
    constructor() {
        this.nav = document.querySelectorAll('.nav')
        this.events()
    }

    events() {
        this.nav.forEach(n => n.addEventListener('click', this.scrollFunction.bind(this)))
       
    }

    scrollFunction(e) {
        e.preventDefault();
        let id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'})
    }
}

export default SmoothScroll;