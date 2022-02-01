/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/modules/MenuScroll.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MenuScroll = /*#__PURE__*/function () {
  function MenuScroll() {
    _classCallCheck(this, MenuScroll);

    this.header = document.querySelector('.site-header');
    this.section = document.querySelector('#home');
    this.sectionObserver = new IntersectionObserver(this.sectionObserve.bind(this), {
      root: null,
      threshold: 1
    });
    this.events();
  }

  _createClass(MenuScroll, [{
    key: "events",
    value: function events() {
      this.sectionObserver.observe(this.section);
    }
  }, {
    key: "sectionObserve",
    value: function sectionObserve(entries, observer) {
      var _entries = _slicedToArray(entries, 1),
          entry = _entries[0];

      this.header.classList.remove('site-header-active-color');
      if (!entry.isIntersecting) this.header.classList.add('site-header-active-color');
    }
  }]);

  return MenuScroll;
}();

/* harmony default export */ const modules_MenuScroll = (MenuScroll);
;// CONCATENATED MODULE: ./src/scripts/modules/MobileMenu.js
function MobileMenu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MobileMenu_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MobileMenu_createClass(Constructor, protoProps, staticProps) { if (protoProps) MobileMenu_defineProperties(Constructor.prototype, protoProps); if (staticProps) MobileMenu_defineProperties(Constructor, staticProps); return Constructor; }

var MobileMenu = /*#__PURE__*/function () {
  function MobileMenu() {
    MobileMenu_classCallCheck(this, MobileMenu);

    this.header = document.querySelector('.site-header');
    this.mainNav = document.querySelector('.main-nav');
    this.nav = document.querySelectorAll('.nav');
    this.hamburger = document.querySelector('.hamburger');
    this.events();
  }

  MobileMenu_createClass(MobileMenu, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.hamburger.addEventListener('click', function (e) {
        return _this.toggleMenu(e);
      });
      this.nav.forEach(function (n) {
        n.addEventListener('click', function (e) {
          if (e.target.classList.contains('link')) _this.closeMenu();
        });
      });
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu(e) {
      this.hamburger.classList.toggle('hamburger-active');
      this.mainNav.classList.toggle('main-nav-active');
      this.header.classList.toggle('site-header-active');
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      this.hamburger.classList.remove('hamburger-active');
      this.mainNav.classList.remove('main-nav-active');
      this.header.classList.remove('site-header-active');
    }
  }]);

  return MobileMenu;
}();

/* harmony default export */ const modules_MobileMenu = (MobileMenu);
;// CONCATENATED MODULE: ./src/scripts/modules/SmoothScroll.js
function SmoothScroll_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SmoothScroll_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SmoothScroll_createClass(Constructor, protoProps, staticProps) { if (protoProps) SmoothScroll_defineProperties(Constructor.prototype, protoProps); if (staticProps) SmoothScroll_defineProperties(Constructor, staticProps); return Constructor; }

var SmoothScroll = /*#__PURE__*/function () {
  function SmoothScroll() {
    SmoothScroll_classCallCheck(this, SmoothScroll);

    this.nav = document.querySelectorAll('.nav');
    this.events();
  }

  SmoothScroll_createClass(SmoothScroll, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.nav.forEach(function (n) {
        return n.addEventListener('click', _this.scrollFunction.bind(_this));
      });
    }
  }, {
    key: "scrollFunction",
    value: function scrollFunction(e) {
      e.preventDefault();
      var id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
      });
    }
  }]);

  return SmoothScroll;
}();

/* harmony default export */ const modules_SmoothScroll = (SmoothScroll);
;// CONCATENATED MODULE: ./src/scripts/modules/RevealOnScroll.js
function RevealOnScroll_slicedToArray(arr, i) { return RevealOnScroll_arrayWithHoles(arr) || RevealOnScroll_iterableToArrayLimit(arr, i) || RevealOnScroll_unsupportedIterableToArray(arr, i) || RevealOnScroll_nonIterableRest(); }

function RevealOnScroll_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function RevealOnScroll_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return RevealOnScroll_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return RevealOnScroll_arrayLikeToArray(o, minLen); }

function RevealOnScroll_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function RevealOnScroll_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function RevealOnScroll_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function RevealOnScroll_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RevealOnScroll_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RevealOnScroll_createClass(Constructor, protoProps, staticProps) { if (protoProps) RevealOnScroll_defineProperties(Constructor.prototype, protoProps); if (staticProps) RevealOnScroll_defineProperties(Constructor, staticProps); return Constructor; }

var RevealOnScroll = /*#__PURE__*/function () {
  function RevealOnScroll() {
    RevealOnScroll_classCallCheck(this, RevealOnScroll);

    this.sections = document.querySelectorAll('.section-js'), this.sectionObserver = new IntersectionObserver(this.sectionObserve, {
      root: null,
      threshold: 0.1
    });
    this.events();
  }

  RevealOnScroll_createClass(RevealOnScroll, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.sections.forEach(function (section) {
        section.classList.add('section-js-hidden');

        _this.sectionObserver.observe(section);
      });
    }
  }, {
    key: "sectionObserve",
    value: function sectionObserve(entries, observer) {
      var _entries = RevealOnScroll_slicedToArray(entries, 1),
          entry = _entries[0];

      if (!entry.isIntersecting) return;
      entry.target.classList.remove('section-js-hidden');
      observer.unobserve(entry.target);
    }
  }]);

  return RevealOnScroll;
}();

/* harmony default export */ const modules_RevealOnScroll = (RevealOnScroll);
;// CONCATENATED MODULE: ./src/scripts/main.js






if (false) {}

var menuScroll = new modules_MenuScroll();
var mobileMenu = new modules_MobileMenu();
var smoothScroll = new modules_SmoothScroll();
var revealOnScroll = new modules_RevealOnScroll();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FIRDtBQUlIOzs7V0FFRCx3QkFBZVMsT0FBZixFQUF3QkMsUUFBeEIsRUFBa0M7QUFDOUIsa0RBQWNELE9BQWQ7QUFBQSxVQUFLRSxLQUFMOztBQUNBLFVBQUcsQ0FBQ0EsS0FBSyxDQUFDRyxjQUFWLEVBQTBCO0FBQzFCSCxNQUFBQSxLQUFLLENBQUNlLE1BQU4sQ0FBYWQsU0FBYixDQUF1QkMsTUFBdkIsQ0FBOEIsbUJBQTlCO0FBQ0FILE1BQUFBLFFBQVEsQ0FBQzZCLFNBQVQsQ0FBbUI1QixLQUFLLENBQUNlLE1BQXpCO0FBQ0g7Ozs7OztBQUlMLDZEQUFlVyxjQUFmOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUdJLEtBQUgsRUFBZSxFQUVkOztBQUdELElBQUlHLFVBQVUsR0FBRyxJQUFJaEQsa0JBQUosRUFBakI7QUFDQSxJQUFJaUQsVUFBVSxHQUFHLElBQUk3QixrQkFBSixFQUFqQjtBQUNBLElBQUk4QixZQUFZLEdBQUcsSUFBSWhCLG9CQUFKLEVBQW5CO0FBQ0EsSUFBSWlCLGNBQWMsR0FBRyxJQUFJUCxzQkFBSixFQUFyQixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvbW9kdWxlcy9NZW51U2Nyb2xsLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9zY3JpcHRzL21vZHVsZXMvTW9iaWxlTWVudS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL1Ntb290aFNjcm9sbC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL1JldmVhbE9uU2Nyb2xsLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9zY3JpcHRzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTWVudVNjcm9sbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpXHJcbiAgICAgICAgdGhpcy5zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKVxyXG4gICAgICAgIHRoaXMuc2VjdGlvbk9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKHRoaXMuc2VjdGlvbk9ic2VydmUuYmluZCh0aGlzKSwge3Jvb3Q6IG51bGwsIHRocmVzaG9sZDogMX0pXHJcbiAgICAgICAgdGhpcy5ldmVudHMoKVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLnNlY3Rpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuc2VjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgc2VjdGlvbk9ic2VydmUoZW50cmllcywgb2JzZXJ2ZXIpIHtcclxuICAgICAgICBsZXQgW2VudHJ5XSA9IGVudHJpZXM7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2l0ZS1oZWFkZXItYWN0aXZlLWNvbG9yJylcclxuICAgICAgICBpZighZW50cnkuaXNJbnRlcnNlY3RpbmcpIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3NpdGUtaGVhZGVyLWFjdGl2ZS1jb2xvcicpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVTY3JvbGw7IiwiY2xhc3MgTW9iaWxlTWVudSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpXHJcbiAgICAgICAgdGhpcy5tYWluTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2JylcclxuICAgICAgICB0aGlzLm5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYnKVxyXG4gICAgICAgIHRoaXMuaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpXHJcbiAgICAgICAgdGhpcy5ldmVudHMoKVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLnRvZ2dsZU1lbnUoZSkpO1xyXG4gICAgICAgIHRoaXMubmF2LmZvckVhY2goKG4pID0+IHtcclxuICAgICAgICAgICAgbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaW5rJykpIHRoaXMuY2xvc2VNZW51KClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTWVudShlKSB7XHJcbiAgICAgICAgdGhpcy5oYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGFtYnVyZ2VyLWFjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMubWFpbk5hdi5jbGFzc0xpc3QudG9nZ2xlKCdtYWluLW5hdi1hY3RpdmUnKTtcclxuICAgICAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdzaXRlLWhlYWRlci1hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU1lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5oYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGFtYnVyZ2VyLWFjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMubWFpbk5hdi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW5hdi1hY3RpdmUnKTtcclxuICAgICAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdzaXRlLWhlYWRlci1hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51OyIsImNsYXNzIFNtb290aFNjcm9sbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYnKVxyXG4gICAgICAgIHRoaXMuZXZlbnRzKClcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5uYXYuZm9yRWFjaChuID0+IG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNjcm9sbEZ1bmN0aW9uLmJpbmQodGhpcykpKVxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsRnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKS5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6ICdzbW9vdGgnfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNtb290aFNjcm9sbDsiLCJjbGFzcyBSZXZlYWxPblNjcm9sbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24tanMnKSxcclxuICAgICAgICB0aGlzLnNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcih0aGlzLnNlY3Rpb25PYnNlcnZlLCB7cm9vdDogbnVsbCwgdGhyZXNob2xkOiAwLjF9KVxyXG4gICAgICAgIHRoaXMuZXZlbnRzKClcclxuICAgIH1cclxuXHJcblxyXG4gICAgZXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcclxuICAgICAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWpzLWhpZGRlbicpOyBcclxuICAgICAgICAgICAgdGhpcy5zZWN0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNlY3Rpb25PYnNlcnZlKGVudHJpZXMsIG9ic2VydmVyKSB7XHJcbiAgICAgICAgbGV0IFtlbnRyeV0gPSBlbnRyaWVzOyAgXHJcbiAgICAgICAgaWYoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSByZXR1cm47XHJcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlY3Rpb24tanMtaGlkZGVuJylcclxuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmVhbE9uU2Nyb2xsOyIsImltcG9ydCAnLi4vc3R5bGVzL3N0eWxlcy5zY3NzJztcclxuaW1wb3J0IE1lbnVTY3JvbGwgZnJvbSAnLi9tb2R1bGVzL01lbnVTY3JvbGwnO1xyXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tICcuL21vZHVsZXMvTW9iaWxlTWVudSc7XHJcbmltcG9ydCBTbW9vdGhTY3JvbGwgZnJvbSAnLi9tb2R1bGVzL1Ntb290aFNjcm9sbCc7XHJcbmltcG9ydCBSZXZlYWxPblNjcm9sbGwgZnJvbSAnLi9tb2R1bGVzL1JldmVhbE9uU2Nyb2xsJztcclxuXHJcbmlmKG1vZHVsZS5ob3QpIHtcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbn1cclxuXHJcblxyXG5sZXQgbWVudVNjcm9sbCA9IG5ldyBNZW51U2Nyb2xsO1xyXG5sZXQgbW9iaWxlTWVudSA9IG5ldyBNb2JpbGVNZW51O1xyXG5sZXQgc21vb3RoU2Nyb2xsID0gbmV3IFNtb290aFNjcm9sbDtcclxubGV0IHJldmVhbE9uU2Nyb2xsID0gbmV3IFJldmVhbE9uU2Nyb2xsbDtcclxuXHJcbiJdLCJuYW1lcyI6WyJNZW51U2Nyb2xsIiwiaGVhZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VjdGlvbiIsInNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwic2VjdGlvbk9ic2VydmUiLCJiaW5kIiwicm9vdCIsInRocmVzaG9sZCIsImV2ZW50cyIsIm9ic2VydmUiLCJlbnRyaWVzIiwib2JzZXJ2ZXIiLCJlbnRyeSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImlzSW50ZXJzZWN0aW5nIiwiYWRkIiwiTW9iaWxlTWVudSIsIm1haW5OYXYiLCJuYXYiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGFtYnVyZ2VyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0b2dnbGVNZW51IiwiZm9yRWFjaCIsIm4iLCJ0YXJnZXQiLCJjb250YWlucyIsImNsb3NlTWVudSIsInRvZ2dsZSIsIlNtb290aFNjcm9sbCIsInNjcm9sbEZ1bmN0aW9uIiwicHJldmVudERlZmF1bHQiLCJpZCIsImdldEF0dHJpYnV0ZSIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJSZXZlYWxPblNjcm9sbCIsInNlY3Rpb25zIiwidW5vYnNlcnZlIiwiUmV2ZWFsT25TY3JvbGxsIiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwibWVudVNjcm9sbCIsIm1vYmlsZU1lbnUiLCJzbW9vdGhTY3JvbGwiLCJyZXZlYWxPblNjcm9sbCJdLCJzb3VyY2VSb290IjoiIn0=