(() => {
  const modal = document.getElementById('modal-window');
  const GALLERY_MODAL_ACTIVE = 'galley__modal_active';

  document.getElementById('modal-slide').addEventListener('click', () => {
    modal.classList.add(GALLERY_MODAL_ACTIVE);
    document.body.classList.add('stop-scroll');
  });

  document.querySelector('.modal__close-btn').addEventListener('click', () => {
    modal.classList.remove(GALLERY_MODAL_ACTIVE);
    document.body.classList.remove('stop-scroll');
  });
})();
