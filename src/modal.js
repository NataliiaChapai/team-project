(() => {
    const modal = document.querySelector('.js-modal-container');
    const openModalBtn = document.querySelectorAll('.js-open-modal');
    const closeModalBtn = document.querySelectorAll('.js-close-modal');
  
    const toggleModal = () => {
      const isModalOpen =
      modal.getAttribute('aria-expanded') === 'true' || false;
      modal.setAttribute('aria-expanded', !isModalOpen);
      modal.classList.toggle('is-open-modal');
  
      const scrollLockMethod = isModalOpen
        ? 'enableBodyScroll'
        : 'disableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);

      document.querySelector('.js-menu-container').classList.remove('is-open')
      document.querySelector('.js-open-menu').setAttribute('aria-expanded', false);
      
    };
  
    openModalBtn.forEach(function(elem) {
      elem.onclick = toggleModal;
    });
    closeModalBtn.forEach(function(elem) {
      elem.onclick = toggleModal;
    });
  })();