(() => {
  const element = document.getElementById('select-custom');
  const choices = new Choices(element, {
    allowHTML: true,
    searchEnabled: false,
    itemSelectText: '',
  });

  // const choice = document.querySelector('.choices');

  const checkbox = document.querySelector('.gallery__checkbox');
  const GALLERY__CHECKBOX_ACTIVE = 'gallery__checkbox_active';

  document
    .querySelector('.choices')
    .addEventListener('click', function (event) {
      event._isCheckboxClick = true;
      this.classList.contains('is-open')
        ? checkbox.classList.remove(GALLERY__CHECKBOX_ACTIVE)
        : checkbox.classList.add(GALLERY__CHECKBOX_ACTIVE);
    });

  document.addEventListener('click', (event) => {
    if (!event._isCheckboxClick)
      checkbox.classList.remove(GALLERY__CHECKBOX_ACTIVE);
  });
})();
