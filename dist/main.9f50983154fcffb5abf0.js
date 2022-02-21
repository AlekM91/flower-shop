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
    this.body = document.querySelector('body');
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
      this.body.classList.toggle('no-scroll');
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      this.hamburger.classList.remove('hamburger-active');
      this.mainNav.classList.remove('main-nav-active');
      this.header.classList.remove('site-header-active');
      this.body.classList.remove('no-scroll');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7O0FBQ0wsV0FBS2dDLFFBQUwsQ0FBY2QsT0FBZCxDQUFzQixVQUFBekIsT0FBTyxFQUFJO0FBQzdCQSxRQUFBQSxPQUFPLENBQUNZLFNBQVIsQ0FBa0JHLEdBQWxCLENBQXNCLG1CQUF0Qjs7QUFDQSxhQUFJLENBQUNkLGVBQUwsQ0FBcUJPLE9BQXJCLENBQTZCUixPQUE3QjtBQUNILE9BSEQ7QUFJSDs7O1dBRUQsd0JBQWVTLE9BQWYsRUFBd0JDLFFBQXhCLEVBQWtDO0FBQzlCLGtEQUFjRCxPQUFkO0FBQUEsVUFBS0UsS0FBTDs7QUFDQSxVQUFHLENBQUNBLEtBQUssQ0FBQ0csY0FBVixFQUEwQjtBQUMxQkgsTUFBQUEsS0FBSyxDQUFDZ0IsTUFBTixDQUFhZixTQUFiLENBQXVCQyxNQUF2QixDQUE4QixtQkFBOUI7QUFDQUgsTUFBQUEsUUFBUSxDQUFDOEIsU0FBVCxDQUFtQjdCLEtBQUssQ0FBQ2dCLE1BQXpCO0FBQ0g7Ozs7OztBQUdMLDZEQUFlVyxjQUFmOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUdJLEtBQUgsRUFBZSxFQUVkOztBQUdELElBQUlHLFVBQVUsR0FBRyxJQUFJakQsa0JBQUosRUFBakI7QUFDQSxJQUFJa0QsVUFBVSxHQUFHLElBQUk5QixrQkFBSixFQUFqQjtBQUNBLElBQUkrQixZQUFZLEdBQUcsSUFBSWhCLG9CQUFKLEVBQW5CO0FBQ0EsSUFBSWlCLGNBQWMsR0FBRyxJQUFJUCxzQkFBSixFQUFyQixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvbW9kdWxlcy9NZW51U2Nyb2xsLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9zY3JpcHRzL21vZHVsZXMvTW9iaWxlTWVudS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL1Ntb290aFNjcm9sbC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL1JldmVhbE9uU2Nyb2xsLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9zY3JpcHRzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTWVudVNjcm9sbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpXHJcbiAgICAgICAgdGhpcy5zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKVxyXG4gICAgICAgIHRoaXMuc2VjdGlvbk9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKHRoaXMuc2VjdGlvbk9ic2VydmUuYmluZCh0aGlzKSwge3Jvb3Q6IG51bGwsIHRocmVzaG9sZDogMX0pXHJcbiAgICAgICAgdGhpcy5ldmVudHMoKVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLnNlY3Rpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuc2VjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgc2VjdGlvbk9ic2VydmUoZW50cmllcywgb2JzZXJ2ZXIpIHtcclxuICAgICAgICBsZXQgW2VudHJ5XSA9IGVudHJpZXM7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2l0ZS1oZWFkZXItYWN0aXZlLWNvbG9yJylcclxuICAgICAgICBpZighZW50cnkuaXNJbnRlcnNlY3RpbmcpIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3NpdGUtaGVhZGVyLWFjdGl2ZS1jb2xvcicpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVTY3JvbGw7IiwiY2xhc3MgTW9iaWxlTWVudSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpXHJcbiAgICAgICAgdGhpcy5tYWluTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2JylcclxuICAgICAgICB0aGlzLm5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYnKVxyXG4gICAgICAgIHRoaXMuaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpXHJcbiAgICAgICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzKClcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy50b2dnbGVNZW51KGUpKTtcclxuICAgICAgICB0aGlzLm5hdi5mb3JFYWNoKChuKSA9PiB7XHJcbiAgICAgICAgICAgIG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGluaycpKSB0aGlzLmNsb3NlTWVudSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTWVudShlKSB7XHJcbiAgICAgICAgdGhpcy5oYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGFtYnVyZ2VyLWFjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMubWFpbk5hdi5jbGFzc0xpc3QudG9nZ2xlKCdtYWluLW5hdi1hY3RpdmUnKTtcclxuICAgICAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdzaXRlLWhlYWRlci1hY3RpdmUnKTtcclxuICAgICAgICB0aGlzLmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbm8tc2Nyb2xsJylcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU1lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5oYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGFtYnVyZ2VyLWFjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMubWFpbk5hdi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW5hdi1hY3RpdmUnKTtcclxuICAgICAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdzaXRlLWhlYWRlci1hY3RpdmUnKTtcclxuICAgICAgICB0aGlzLmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU1lbnU7IiwiY2xhc3MgU21vb3RoU2Nyb2xsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdicpXHJcbiAgICAgICAgdGhpcy5ldmVudHMoKVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLm5hdi5mb3JFYWNoKG4gPT4gbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2Nyb2xsRnVuY3Rpb24uYmluZCh0aGlzKSkpXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxGdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBpZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogJ3Ntb290aCd9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbW9vdGhTY3JvbGw7IiwiY2xhc3MgUmV2ZWFsT25TY3JvbGwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWN0aW9uLWpzJyksXHJcbiAgICAgICAgdGhpcy5zZWN0aW9uT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5zZWN0aW9uT2JzZXJ2ZSwge3Jvb3Q6IG51bGwsIHRocmVzaG9sZDogMC4xfSlcclxuICAgICAgICB0aGlzLmV2ZW50cygpXHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcclxuICAgICAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWpzLWhpZGRlbicpOyBcclxuICAgICAgICAgICAgdGhpcy5zZWN0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNlY3Rpb25PYnNlcnZlKGVudHJpZXMsIG9ic2VydmVyKSB7XHJcbiAgICAgICAgbGV0IFtlbnRyeV0gPSBlbnRyaWVzOyAgXHJcbiAgICAgICAgaWYoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSByZXR1cm47XHJcbiAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlY3Rpb24tanMtaGlkZGVuJylcclxuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2ZWFsT25TY3JvbGw7IiwiaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGVzLnNjc3MnO1xyXG5pbXBvcnQgTWVudVNjcm9sbCBmcm9tICcuL21vZHVsZXMvTWVudVNjcm9sbCc7XHJcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4vbW9kdWxlcy9Nb2JpbGVNZW51JztcclxuaW1wb3J0IFNtb290aFNjcm9sbCBmcm9tICcuL21vZHVsZXMvU21vb3RoU2Nyb2xsJztcclxuaW1wb3J0IFJldmVhbE9uU2Nyb2xsbCBmcm9tICcuL21vZHVsZXMvUmV2ZWFsT25TY3JvbGwnO1xyXG5cclxuaWYobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufVxyXG5cclxuXHJcbmxldCBtZW51U2Nyb2xsID0gbmV3IE1lbnVTY3JvbGw7XHJcbmxldCBtb2JpbGVNZW51ID0gbmV3IE1vYmlsZU1lbnU7XHJcbmxldCBzbW9vdGhTY3JvbGwgPSBuZXcgU21vb3RoU2Nyb2xsO1xyXG5sZXQgcmV2ZWFsT25TY3JvbGwgPSBuZXcgUmV2ZWFsT25TY3JvbGxsO1xyXG5cclxuIl0sIm5hbWVzIjpbIk1lbnVTY3JvbGwiLCJoZWFkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWN0aW9uIiwic2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJzZWN0aW9uT2JzZXJ2ZSIsImJpbmQiLCJyb290IiwidGhyZXNob2xkIiwiZXZlbnRzIiwib2JzZXJ2ZSIsImVudHJpZXMiLCJvYnNlcnZlciIsImVudHJ5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaXNJbnRlcnNlY3RpbmciLCJhZGQiLCJNb2JpbGVNZW51IiwibWFpbk5hdiIsIm5hdiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoYW1idXJnZXIiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0b2dnbGVNZW51IiwiZm9yRWFjaCIsIm4iLCJ0YXJnZXQiLCJjb250YWlucyIsImNsb3NlTWVudSIsInRvZ2dsZSIsIlNtb290aFNjcm9sbCIsInNjcm9sbEZ1bmN0aW9uIiwicHJldmVudERlZmF1bHQiLCJpZCIsImdldEF0dHJpYnV0ZSIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJSZXZlYWxPblNjcm9sbCIsInNlY3Rpb25zIiwidW5vYnNlcnZlIiwiUmV2ZWFsT25TY3JvbGxsIiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwibWVudVNjcm9sbCIsIm1vYmlsZU1lbnUiLCJzbW9vdGhTY3JvbGwiLCJyZXZlYWxPblNjcm9sbCJdLCJzb3VyY2VSb290IjoiIn0=