(() => {
  const menu = document.querySelector('.header__nav');
  const burger = document.querySelector('.header__burger');

  const ACTIVE_MENU_BURGER_CLS = 'header__burger_active';
  const ACTIVE_MENU_BURGER_VISIBILITY = 'header__nav_visible';
  const ACTIVE_NAV_CLS = 'header__nav_active';
  const STOP_SCROLL_BODY_CLS = 'stop-scroll';

  function setBurgerState(state) {
    let fn;
    if (state === true) {
      fn = 'add';
    } else if (state === false) {
      fn = 'remove';
    } else {
      fn = 'toggle';
    }

    burger.classList[fn](ACTIVE_MENU_BURGER_CLS);
    menu.classList[fn](ACTIVE_NAV_CLS);
    document.body.classList[fn](STOP_SCROLL_BODY_CLS);
  }

  let isBurgerVisible = false;

  burger.addEventListener('click', () => {
    setBurgerState();
    if (!isBurgerVisible) {
      menu.classList.add(ACTIVE_MENU_BURGER_VISIBILITY);
      isBurgerVisible = true;
    }
  });

  const menuLinks = menu.querySelectorAll('.nav__link');
  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      setBurgerState(false);
    });
  });

  window.addEventListener('resize', () => {
    setBurgerState(false);
    if (isBurgerVisible) {
      menu.classList.remove(ACTIVE_MENU_BURGER_VISIBILITY);
      isBurgerVisible = false;
    }
  });
})();
