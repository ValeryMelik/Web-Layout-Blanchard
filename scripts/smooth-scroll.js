(() => {
  ['about-us', 'gallery', 'catalog', 'events', 'projects', 'contacts'].forEach(
    (item) => {
      document.getElementById(`${item}-link`).addEventListener('click', () => {
        window.scrollTo({
          top: document
            .getElementById(`${item}-section`)
            .getBoundingClientRect().top,
          behavior: 'smooth',
        });
      });
    }
  );
})();
