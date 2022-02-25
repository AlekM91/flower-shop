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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42ZjNmOTMxMzY5NzdhYjZiNWJhMC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQTtBQUNGLHdCQUFjO0FBQUE7O0FBQ1YsU0FBS0MsTUFBTCxHQUFjQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBZDtBQUNBLFNBQUtDLE9BQUwsR0FBZUYsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWY7QUFDQSxTQUFLRSxlQUFMLEdBQXVCLElBQUlDLG9CQUFKLENBQXlCLEtBQUtDLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLENBQXpCLEVBQXlEO0FBQUNDLE1BQUFBLElBQUksRUFBRSxJQUFQO0FBQWFDLE1BQUFBLFNBQVMsRUFBRTtBQUF4QixLQUF6RCxDQUF2QjtBQUNBLFNBQUtDLE1BQUw7QUFDSDs7OztXQUVELGtCQUFTO0FBQ0wsV0FBS04sZUFBTCxDQUFxQk8sT0FBckIsQ0FBNkIsS0FBS1IsT0FBbEM7QUFDSDs7O1dBRUQsd0JBQWVTLE9BQWYsRUFBd0JDLFFBQXhCLEVBQWtDO0FBQzlCLG9DQUFjRCxPQUFkO0FBQUEsVUFBS0UsS0FBTDs7QUFDQSxXQUFLZCxNQUFMLENBQVllLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCLDBCQUE3QjtBQUNBLFVBQUcsQ0FBQ0YsS0FBSyxDQUFDRyxjQUFWLEVBQTBCLEtBQUtqQixNQUFMLENBQVllLFNBQVosQ0FBc0JHLEdBQXRCLENBQTBCLDBCQUExQjtBQUM3Qjs7Ozs7O0FBR0wseURBQWVuQixVQUFmOzs7Ozs7OztJQ25CTW9CO0FBQ0Ysd0JBQWM7QUFBQTs7QUFDVixTQUFLbkIsTUFBTCxHQUFjQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBZDtBQUNBLFNBQUtrQixPQUFMLEdBQWVuQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZjtBQUNBLFNBQUttQixHQUFMLEdBQVdwQixRQUFRLENBQUNxQixnQkFBVCxDQUEwQixNQUExQixDQUFYO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQnRCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFqQjtBQUNBLFNBQUtzQixJQUFMLEdBQVl2QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWjtBQUNBLFNBQUtRLE1BQUw7QUFDSDs7OztXQUVELGtCQUFTO0FBQUE7O0FBQ0wsV0FBS2EsU0FBTCxDQUFlRSxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxVQUFDQyxDQUFEO0FBQUEsZUFBTyxLQUFJLENBQUNDLFVBQUwsQ0FBZ0JELENBQWhCLENBQVA7QUFBQSxPQUF6QztBQUNBLFdBQUtMLEdBQUwsQ0FBU08sT0FBVCxDQUFpQixVQUFDQyxDQUFELEVBQU87QUFDcEJBLFFBQUFBLENBQUMsQ0FBQ0osZ0JBQUYsQ0FBbUIsT0FBbkIsRUFBNEIsVUFBQUMsQ0FBQyxFQUFJO0FBQzdCLGNBQUdBLENBQUMsQ0FBQ0ksTUFBRixDQUFTZixTQUFULENBQW1CZ0IsUUFBbkIsQ0FBNEIsTUFBNUIsQ0FBSCxFQUF3QyxLQUFJLENBQUNDLFNBQUw7QUFDM0MsU0FGRDtBQUdILE9BSkQ7QUFLSDs7O1dBRUQsb0JBQVdOLENBQVgsRUFBYztBQUNWLFdBQUtILFNBQUwsQ0FBZVIsU0FBZixDQUF5QmtCLE1BQXpCLENBQWdDLGtCQUFoQztBQUNBLFdBQUtiLE9BQUwsQ0FBYUwsU0FBYixDQUF1QmtCLE1BQXZCLENBQThCLGlCQUE5QjtBQUNBLFdBQUtqQyxNQUFMLENBQVllLFNBQVosQ0FBc0JrQixNQUF0QixDQUE2QixvQkFBN0I7QUFDQSxXQUFLVCxJQUFMLENBQVVULFNBQVYsQ0FBb0JrQixNQUFwQixDQUEyQixXQUEzQjtBQUNIOzs7V0FFRCxxQkFBWTtBQUNSLFdBQUtWLFNBQUwsQ0FBZVIsU0FBZixDQUF5QkMsTUFBekIsQ0FBZ0Msa0JBQWhDO0FBQ0EsV0FBS0ksT0FBTCxDQUFhTCxTQUFiLENBQXVCQyxNQUF2QixDQUE4QixpQkFBOUI7QUFDQSxXQUFLaEIsTUFBTCxDQUFZZSxTQUFaLENBQXNCQyxNQUF0QixDQUE2QixvQkFBN0I7QUFDQSxXQUFLUSxJQUFMLENBQVVULFNBQVYsQ0FBb0JDLE1BQXBCLENBQTJCLFdBQTNCO0FBQ0g7Ozs7OztBQUdMLHlEQUFlRyxVQUFmOzs7Ozs7OztJQ2xDTWU7QUFDRiwwQkFBYztBQUFBOztBQUNWLFNBQUtiLEdBQUwsR0FBV3BCLFFBQVEsQ0FBQ3FCLGdCQUFULENBQTBCLE1BQTFCLENBQVg7QUFDQSxTQUFLWixNQUFMO0FBQ0g7Ozs7V0FFRCxrQkFBUztBQUFBOztBQUNMLFdBQUtXLEdBQUwsQ0FBU08sT0FBVCxDQUFpQixVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDSixnQkFBRixDQUFtQixPQUFuQixFQUE0QixLQUFJLENBQUNVLGNBQUwsQ0FBb0I1QixJQUFwQixDQUF5QixLQUF6QixDQUE1QixDQUFKO0FBQUEsT0FBbEI7QUFFSDs7O1dBRUQsd0JBQWVtQixDQUFmLEVBQWtCO0FBQ2RBLE1BQUFBLENBQUMsQ0FBQ1UsY0FBRjtBQUNBLFVBQUlDLEVBQUUsR0FBR1gsQ0FBQyxDQUFDSSxNQUFGLENBQVNRLFlBQVQsQ0FBc0IsTUFBdEIsQ0FBVDtBQUNBckMsTUFBQUEsUUFBUSxDQUFDQyxhQUFULENBQXVCbUMsRUFBdkIsRUFBMkJFLGNBQTNCLENBQTBDO0FBQ3RDQyxRQUFBQSxRQUFRLEVBQUU7QUFENEIsT0FBMUM7QUFHSDs7Ozs7O0FBR0wsMkRBQWVOLFlBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDcEJNTztBQUNGLDRCQUFjO0FBQUE7O0FBQ1YsU0FBS0MsUUFBTCxHQUFnQnpDLFFBQVEsQ0FBQ3FCLGdCQUFULENBQTBCLGFBQTFCLENBQWhCLEVBQ0EsS0FBS2xCLGVBQUwsR0FBdUIsSUFBSUMsb0JBQUosQ0FBeUIsS0FBS0MsY0FBOUIsRUFBOEM7QUFBQ0UsTUFBQUEsSUFBSSxFQUFFLElBQVA7QUFBYUMsTUFBQUEsU0FBUyxFQUFFO0FBQXhCLEtBQTlDLENBRHZCO0FBRUEsU0FBS0MsTUFBTDtBQUNIOzs7O1dBRUQsa0JBQVM7QUFBQTs7QUFDTCxXQUFLZ0MsUUFBTCxDQUFjZCxPQUFkLENBQXNCLFVBQUF6QixPQUFPLEVBQUk7QUFDN0JBLFFBQUFBLE9BQU8sQ0FBQ1ksU0FBUixDQUFrQkcsR0FBbEIsQ0FBc0IsbUJBQXRCOztBQUNBLGFBQUksQ0FBQ2QsZUFBTCxDQUFxQk8sT0FBckIsQ0FBNkJSLE9BQTdCO0FBQ0gsT0FIRDtBQUlIOzs7V0FFRCx3QkFBZVMsT0FBZixFQUF3QkMsUUFBeEIsRUFBa0M7QUFDOUIsa0RBQWNELE9BQWQ7QUFBQSxVQUFLRSxLQUFMOztBQUNBLFVBQUcsQ0FBQ0EsS0FBSyxDQUFDRyxjQUFWLEVBQTBCO0FBQzFCSCxNQUFBQSxLQUFLLENBQUNnQixNQUFOLENBQWFmLFNBQWIsQ0FBdUJDLE1BQXZCLENBQThCLG1CQUE5QjtBQUNBSCxNQUFBQSxRQUFRLENBQUM4QixTQUFULENBQW1CN0IsS0FBSyxDQUFDZ0IsTUFBekI7QUFDSDs7Ozs7O0FBR0wsNkRBQWVXLGNBQWY7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBR0ksS0FBSCxFQUFlLEVBRWQ7O0FBRUQsSUFBSUcsVUFBVSxHQUFHLElBQUlqRCxrQkFBSixFQUFqQjtBQUNBLElBQUlrRCxVQUFVLEdBQUcsSUFBSTlCLGtCQUFKLEVBQWpCO0FBQ0EsSUFBSStCLFlBQVksR0FBRyxJQUFJaEIsb0JBQUosRUFBbkI7QUFDQSxJQUFJaUIsY0FBYyxHQUFHLElBQUlQLHNCQUFKLEVBQXJCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL01lbnVTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvbW9kdWxlcy9Nb2JpbGVNZW51LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9zY3JpcHRzL21vZHVsZXMvU21vb3RoU2Nyb2xsLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9zY3JpcHRzL21vZHVsZXMvUmV2ZWFsT25TY3JvbGwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNZW51U2Nyb2xsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJylcclxuICAgICAgICB0aGlzLnNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpXHJcbiAgICAgICAgdGhpcy5zZWN0aW9uT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5zZWN0aW9uT2JzZXJ2ZS5iaW5kKHRoaXMpLCB7cm9vdDogbnVsbCwgdGhyZXNob2xkOiAxfSlcclxuICAgICAgICB0aGlzLmV2ZW50cygpXHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5zZWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWN0aW9uT2JzZXJ2ZShlbnRyaWVzLCBvYnNlcnZlcikge1xyXG4gICAgICAgIGxldCBbZW50cnldID0gZW50cmllcztcclxuICAgICAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdzaXRlLWhlYWRlci1hY3RpdmUtY29sb3InKVxyXG4gICAgICAgIGlmKCFlbnRyeS5pc0ludGVyc2VjdGluZykgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2l0ZS1oZWFkZXItYWN0aXZlLWNvbG9yJylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudVNjcm9sbDsiLCJjbGFzcyBNb2JpbGVNZW51IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJylcclxuICAgICAgICB0aGlzLm1haW5OYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXYnKVxyXG4gICAgICAgIHRoaXMubmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdicpXHJcbiAgICAgICAgdGhpcy5oYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJylcclxuICAgICAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMoKVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLnRvZ2dsZU1lbnUoZSkpO1xyXG4gICAgICAgIHRoaXMubmF2LmZvckVhY2goKG4pID0+IHtcclxuICAgICAgICAgICAgbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaW5rJykpIHRoaXMuY2xvc2VNZW51KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVNZW51KGUpIHtcclxuICAgICAgICB0aGlzLmhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdoYW1idXJnZXItYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5tYWluTmF2LmNsYXNzTGlzdC50b2dnbGUoJ21haW4tbmF2LWFjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ3NpdGUtaGVhZGVyLWFjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCduby1zY3JvbGwnKVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTWVudSgpIHtcclxuICAgICAgICB0aGlzLmhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdoYW1idXJnZXItYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5tYWluTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tbmF2LWFjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3NpdGUtaGVhZGVyLWFjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudTsiLCJjbGFzcyBTbW9vdGhTY3JvbGwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5uYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2Jyk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMoKVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLm5hdi5mb3JFYWNoKG4gPT4gbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2Nyb2xsRnVuY3Rpb24uYmluZCh0aGlzKSkpXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxGdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBpZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNtb290aFNjcm9sbDsiLCJjbGFzcyBSZXZlYWxPblNjcm9sbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24tanMnKSxcclxuICAgICAgICB0aGlzLnNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcih0aGlzLnNlY3Rpb25PYnNlcnZlLCB7cm9vdDogbnVsbCwgdGhyZXNob2xkOiAwLjF9KVxyXG4gICAgICAgIHRoaXMuZXZlbnRzKClcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tanMtaGlkZGVuJyk7IFxyXG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25PYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2VjdGlvbk9ic2VydmUoZW50cmllcywgb2JzZXJ2ZXIpIHtcclxuICAgICAgICBsZXQgW2VudHJ5XSA9IGVudHJpZXM7ICBcclxuICAgICAgICBpZighZW50cnkuaXNJbnRlcnNlY3RpbmcpIHJldHVybjtcclxuICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2VjdGlvbi1qcy1oaWRkZW4nKVxyXG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZlYWxPblNjcm9sbDsiLCJpbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCBNZW51U2Nyb2xsIGZyb20gJy4vbW9kdWxlcy9NZW51U2Nyb2xsJztcclxuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSAnLi9tb2R1bGVzL01vYmlsZU1lbnUnO1xyXG5pbXBvcnQgU21vb3RoU2Nyb2xsIGZyb20gJy4vbW9kdWxlcy9TbW9vdGhTY3JvbGwnO1xyXG5pbXBvcnQgUmV2ZWFsT25TY3JvbGxsIGZyb20gJy4vbW9kdWxlcy9SZXZlYWxPblNjcm9sbCc7XHJcblxyXG5pZihtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG59XHJcblxyXG5sZXQgbWVudVNjcm9sbCA9IG5ldyBNZW51U2Nyb2xsO1xyXG5sZXQgbW9iaWxlTWVudSA9IG5ldyBNb2JpbGVNZW51O1xyXG5sZXQgc21vb3RoU2Nyb2xsID0gbmV3IFNtb290aFNjcm9sbDtcclxubGV0IHJldmVhbE9uU2Nyb2xsID0gbmV3IFJldmVhbE9uU2Nyb2xsbDtcclxuXHJcbiJdLCJuYW1lcyI6WyJNZW51U2Nyb2xsIiwiaGVhZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VjdGlvbiIsInNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwic2VjdGlvbk9ic2VydmUiLCJiaW5kIiwicm9vdCIsInRocmVzaG9sZCIsImV2ZW50cyIsIm9ic2VydmUiLCJlbnRyaWVzIiwib2JzZXJ2ZXIiLCJlbnRyeSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImlzSW50ZXJzZWN0aW5nIiwiYWRkIiwiTW9iaWxlTWVudSIsIm1haW5OYXYiLCJuYXYiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGFtYnVyZ2VyIiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidG9nZ2xlTWVudSIsImZvckVhY2giLCJuIiwidGFyZ2V0IiwiY29udGFpbnMiLCJjbG9zZU1lbnUiLCJ0b2dnbGUiLCJTbW9vdGhTY3JvbGwiLCJzY3JvbGxGdW5jdGlvbiIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJnZXRBdHRyaWJ1dGUiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiUmV2ZWFsT25TY3JvbGwiLCJzZWN0aW9ucyIsInVub2JzZXJ2ZSIsIlJldmVhbE9uU2Nyb2xsbCIsIm1vZHVsZSIsImhvdCIsImFjY2VwdCIsIm1lbnVTY3JvbGwiLCJtb2JpbGVNZW51Iiwic21vb3RoU2Nyb2xsIiwicmV2ZWFsT25TY3JvbGwiXSwic291cmNlUm9vdCI6IiJ9