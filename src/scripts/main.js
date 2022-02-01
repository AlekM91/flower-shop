import '../styles/styles.scss';
import MenuScroll from './modules/MenuScroll';
import MobileMenu from './modules/MobileMenu';
import SmoothScroll from './modules/SmoothScroll';
import RevealOnScrolll from './modules/RevealOnScroll';

if(module.hot) {
    module.hot.accept();
}


let menuScroll = new MenuScroll;
let mobileMenu = new MobileMenu;
let smoothScroll = new SmoothScroll;
let revealOnScroll = new RevealOnScrolll;

