const ITEM__LIST = '.item__list';
const ITEM__LIST_ACTIVE = 'item__list_active';
const ITEM__ARROW = '.item__arrow';
const ITEM__ARROW_ACTIVE = 'item__arrow_active';

const itemArr = document.querySelectorAll('.header__down .header__item');

itemArr.forEach((item) => {
  item.addEventListener('click', (event) => {
    event._isClick = true;
    if (item.querySelector(ITEM__LIST).classList.contains(ITEM__LIST_ACTIVE))
      itemArr.forEach((item) => {
        setState(item, false);
      });
    else {
      itemArr.forEach((item) => {
        setState(item, false);
      });
      setState(item);
    }
  });
});

document.querySelectorAll(ITEM__LIST).forEach((elem) => {
  elem.addEventListener('click', function (event) {
    event._isClick = true;
    setState(elem.parentElement, false);
  });
});

document.addEventListener('click', (event) => {
  if (!event._isClick)
    itemArr.forEach((item) => {
      setState(item, false);
    });
});

function setState(item, state = true) {
  let fn;

  state === true ? (fn = 'add') : (fn = 'remove');

  item.querySelector(ITEM__LIST).classList[fn](ITEM__LIST_ACTIVE);
  item.querySelector(ITEM__ARROW).classList[fn](ITEM__ARROW_ACTIVE);
}

