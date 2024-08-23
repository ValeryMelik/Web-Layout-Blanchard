(() => {
  const ACTIVE_BLOCK = 'block__content_active';

  const tabFull = document.getElementById('content-block-full');
  const tabEmpty = document.getElementById('content-block-empty');

  document.querySelectorAll('.item__painter button').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn === document.getElementById('tab-btn')) {
        tabFull.classList.add(ACTIVE_BLOCK);
        tabEmpty.classList.remove(ACTIVE_BLOCK);
      } else {
        tabFull.classList.remove(ACTIVE_BLOCK);
        tabEmpty.classList.add(ACTIVE_BLOCK);
      }
    });
  });
})();
x