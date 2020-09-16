const Header = () => {
  const template = `
    <header class="header">
    <svg class="header__logo" width="49" height="35" viewbox="0 0 49 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="15" width="20" height="20" rx="10" fill="#9C69E2"/>
      <rect x="29" width="20" height="35" rx="10" fill="#F063B8"/>
      </svg>
      <nav class="nav nav--primary" aria-labelledby="primary-navigation">
          <ul class="nav__menu">
          
              <li class="nav__item"><a href="#" class="nav__link">About</a></li>
              <li class="nav__item dropdown"><a href="#" class="nav__link">Help</a>
              <ul class="dropdown__menu">
              
              <li class="dropdown__item"><a href="" class="dropdown__link">User Guide</a></li>
              <li class="dropdown__item"><a href="" class="dropdown__link">Contact Support</a></li></div>
              </ul>
              </li>
              <li class="nav__item"><a href="#" class="nav__link">Features</a></li>
              <button class="header__btn btn" type="button">Sign Up</button>
          </ul>
      </nav>
      <nav class="nav nav--mobile" aria-labelledby="mobile-navigation">
      <ul class="nav__menu">
      <div class="dropdown__background"></div>
          <li class="nav__item"><a href="#" class="nav__link">About</a></li>
          <li class="nav__item dropdown"><a href="#" class="nav__link arrow">Help</a>
          <ul class="dropdown__menu mobile">
            <li class="dropdown__item"><a href="#" class="dropdown__link">User Guide</a></li>
            <li class="dropdown__item"><a href="#" class="dropdown__link">Contact Support</a></li>
          </ul>
          </li>
          <li class="nav__item"><a href="#" class="nav__link">Features</a></li>
          <li class="nav__item--signup"><button class="header__btn btn" type="button">Sign Up</button></li>
      </ul>
      </nav>
      <button class="header__btn btn--hamburger"><svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="3" rx="1.5" fill="#212353"/>
      <rect y="10.5" width="36" height="3" rx="1.5" fill="#212353"/>
      <rect y="21" width="36" height="3" rx="1.5" fill="#212353"/>
      </svg></button>
    </header>
  `;

  return template;
};

export default Header;
