(() => {
  const _ACTIVE = '_active';

  const LIST_EMPTY = 'item__painter-list_empty';
  const PAINTER_LIST = 'item__painter-list';
  const ITEM__DESCR = 'item__descr';
  const ITEM__BTN = 'item__btn';
  const ITEM__BLOCK = 'item__block';
  const ACCORDION__ITEM = 'accordion__item';

  document.querySelectorAll('.catalog .accordion__item').forEach((item) => {
    item.querySelector('.item__block').addEventListener('click', function () {
      item.classList.toggle(ACCORDION__ITEM + _ACTIVE);

      item
        .getElementsByClassName(ITEM__BLOCK)[0]
        .classList.toggle(ITEM__BLOCK + _ACTIVE);

      item
        .getElementsByClassName(ITEM__BTN)[0]
        .classList.toggle(ITEM__BTN + _ACTIVE);

      item
        .getElementsByClassName(PAINTER_LIST)[0]
        .classList.toggle(PAINTER_LIST + _ACTIVE);

      item
        .getElementsByClassName(ITEM__DESCR)[0]
        .classList.toggle(ITEM__DESCR + _ACTIVE);

      if (item.getElementsByClassName(LIST_EMPTY)[0])
        item
          .getElementsByClassName(LIST_EMPTY)[0]
          .classList.toggle(LIST_EMPTY + _ACTIVE);
    });
  });
})();
