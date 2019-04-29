'use strict';

var size = 768;

if (window.screen.width < size) {
  var menuBtnWrapper = document.querySelector('.menu__bar');
  var menuBtn = document.querySelector('.menu__btn');
  var menuList = document.querySelector('.menu__list');
  var menuItems = document.querySelectorAll('.menu__item');
  var body = document.querySelector('body');

  var toggleMenu = function () {
    menuList.classList.toggle('menu__list--show');
    menuBtn.classList.toggle('menu__btn--close');
    menuBtnWrapper.classList.toggle('menu__bar--open');
    menuBtn.textContent = menuBtn.textContent === 'Menu' ? 'Close' : 'Menu';
    body.classList.toggle('no-scroll');
  }

  menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu();
  });

  // IE support
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', toggleMenu)
  }
}
