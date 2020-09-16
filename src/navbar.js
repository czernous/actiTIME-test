async function dropdownToggle() {
  const dropdownLink = document.querySelectorAll('.dropdown');
  const dropdownMenu = document.querySelectorAll('.dropdown__menu');
  const hamburger = document.querySelector('.btn--hamburger');
  const mobileNav = document.querySelector('.nav--mobile');
  (function menuControl() {
    const burgerIcon = `
        <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="3" rx="1.5" fill="#212353"/>
        <rect y="10.5" width="36" height="3" rx="1.5" fill="#212353"/>
        <rect y="21" width="36" height="3" rx="1.5" fill="#212353"/>
        </svg>
        `;
    const crossIcon = `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="25.4558" width="36" height="3" rx="1.5" transform="rotate(-45 0 25.4558)" fill="#212353"/>
        <rect width="36" height="3" rx="1.5" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 27.5772 25.4558)" fill="#212353"/>
        </svg>`;
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('is-visible');
      if (mobileNav.classList.contains('is-visible')) {
        hamburger.innerHTML = crossIcon;
      } else {
        hamburger.innerHTML = burgerIcon;
      }
    });
  })();
  dropdownLink.forEach((link) => {
    link.addEventListener('mouseenter', (e) => {
      e.stopPropagation();
      dropdownMenu.forEach((menu) => {
        if (menu.classList.contains('mobile')) {
          link.style.maxHeight = '20rem';
          menu.style.height = '11rem';
          menu.classList.add('dropdown__menu--visible');
        } else if (!menu.classList.contains('mobile')) {
          menu.classList.add('dropdown__menu--visible');
        }
      });
    });
    link.addEventListener('mouseleave', () => {
      dropdownMenu.forEach((menu) => {
        if (menu.classList.contains('mobile')) {
          setTimeout(() => {
            menu.style.height = '0';
          }, 1000);
          menu.classList.remove('dropdown__menu--visible');
          link.style.maxHeight = '6.1rem';
        } else if (!menu.classList.contains('mobile')) {
          menu.classList.remove('dropdown__menu--visible');
        }
      });
    });
  });
}

export default dropdownToggle;
