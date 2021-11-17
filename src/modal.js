(() => {
    const modal = document.querySelector('.js-modal-container');
    const openModalBtn = document.querySelector('.js-open-modal');
    const closeModalBtn = document.querySelector('.js-close-modal');
  
    const toggleModal = () => {
      const isModalOpen =
        openModalBtn.getAttribute('aria-expanded') === 'true' || false;
      openModalBtn.setAttribute('aria-expanded', !isModalOpen);
      modal.classList.toggle('is-open-modal');
  
      const scrollLockMethod = !isModalOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    };
  
    openModalBtn.addEventListener('click', toggleModal);
    closeModalBtn.addEventListener('click', toggleModal);
  
    // Закрываем мобильное меню на более широких экранах
    // в случае изменения ориентации устройства.
    window.matchMedia('(min-width: 2000px)').addEventListener('change', e => {
      if (!e.matches) return;
      modal.classList.remove('is-open-modal');
      openModalBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
  })();