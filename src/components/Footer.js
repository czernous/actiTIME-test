const Footer = () => {
  const template = `
      <footer class="footer">
        <div class="footer__container">
          <div class="footer__left">
            <svg class="footer__logo" width="49" height="35" viewbox="0 0 49 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="15" width="20" height="20" rx="10" fill="white"/>
            <rect x="29" width="20" height="35" rx="10" fill="white"/>
            </svg>
            <div class="footer__link-container">
            <a href="#" class="footer__link">About Us</a>
            <a href="#" class="footer__link">Privacy Policy</a>
          </div>        
          </div>
          <form class="footer__signup-form" action="#" method="POST">
          <input class="footer__signup-input" placeholder="Enter your email"/>
          <button class="footer__signup-btn btn">Sign Up Now</button>
          </form>        
        </div>

      </footer>
    `;
  return template;
};

export default Footer;
