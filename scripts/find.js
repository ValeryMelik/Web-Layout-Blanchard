(() => {
  const HEADER__FINDER_ACTIVE2 = 'header__finder_active-2';
  const HEADER__FINDER_ACTIVE = 'header__finder_active';
  const HEADER__BURGER_ACTIVE2 = 'header__burger_active-2';
  const HEADER__LOGO_ACTIVE2 = 'header__logo_active-2';
  const HEADER__CONTAINER_ACTIVE2 = 'header__container_active-2';

  const findBtn = document.querySelector('.header .find__btn');
  const findValue = document.querySelector('.header .find__input');
  findValue.addEventListener('input', () => {
    findValue.value
      ? (findBtn.style.cursor = 'pointer')
      : (findBtn.style.cursor = 'not-allowed');
  });
  findBtn.addEventListener('click', () => {
    if (findValue.value)
      alert(
        `По запросу "${findValue.value}" ничего не найдено (и даже не искалось...) `
      );
    findValue.value = '';
    findBtn.style.cursor = 'not-allowed';
  });

  const findBtnShow = document.querySelector('.finder__btn');
  const headerFinder = document.querySelector('.header__finder');
  const headerBurger = document.querySelector('.header__burger');
  const headerLogo = document.querySelector('.header__logo');
  const headerContainer = document.querySelector('.header__container');

  findBtnShow.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      headerFinder.classList.add(HEADER__FINDER_ACTIVE2);
      headerBurger.classList.add(HEADER__BURGER_ACTIVE2);
      headerLogo.classList.add(HEADER__LOGO_ACTIVE2);
      headerContainer.classList.add(HEADER__CONTAINER_ACTIVE2);
    } else headerFinder.classList.add(HEADER__FINDER_ACTIVE);

    findBtnShow.style.cursor = 'not-allowed';

    const findValueNew = document.querySelector('.finder__input');
    findValueNew.addEventListener('input', () => {
      findValueNew.value
        ? (findBtnShow.style.cursor = 'pointer')
        : (findBtnShow.style.cursor = 'not-allowed');
    });
    findBtnShow.addEventListener('click', () => {
      if (findValueNew.value)
        alert(
          `По запросу "${findValueNew.value}" ничего не найдено (и даже не искалось...) `
        );
      findValueNew.value = '';
    });
  });

  function resetOpenFinder() {
    headerFinder.classList.remove(
      HEADER__FINDER_ACTIVE2,
      HEADER__FINDER_ACTIVE
    );
    headerBurger.classList.remove(HEADER__BURGER_ACTIVE2);
    headerLogo.classList.remove(HEADER__LOGO_ACTIVE2);
    headerContainer.classList.remove(HEADER__CONTAINER_ACTIVE2);
    findBtnShow.style.cursor = 'pointer';
  }

  document
    .querySelector('.finder__closer')
    .addEventListener('click', resetOpenFinder);

  window.addEventListener('resize', () => {
    if (
      headerFinder.classList.contains(HEADER__FINDER_ACTIVE2) ||
      headerFinder.classList.contains(HEADER__FINDER_ACTIVE)
    )
      resetOpenFinder();
  });
})();
