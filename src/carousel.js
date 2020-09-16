async function carousel() {
  const bannerNew = `<span class="card__ribbon">NEW</span>`;
  const cardsContent = [
    {
      id: 1,
      heading: 'First',
      description: `Little Red Cap opened her eyes and when she saw the sunbeams dancing to and fro through the
                trees and how the ground was covered with beautiful flowers.`,
      link: '#',
      banner: ``,
    },
    {
      id: 2,
      heading: 'Second',
      description: `Each time she picked one she thought that she could see an even more beautiful one a little way off, and she ran after it, going further and further into the woods.`,
      link: '#',
      banner: ``,
    },
    {
      id: 3,
      heading: 'Third',
      description: `The wolf pressed the latch, and the door opened. He stepped inside, went straight to the grandmother's bed, and ate her up.`,
      link: '#',
      banner: ``,
    },
    {
      id: 4,
      heading: 'Fourth',
      description: `Little Red Cap opened her eyes and when she saw the sunbeams dancing to and fro through the
                  trees and how the ground was covered with beautiful flowers.`,
      link: '#',
      banner: `${bannerNew}`,
    },
  ];

  const displaySlideInfo = (slideInfo) => {
    const slideContainer = document.querySelector('.features__slide-container');

    let displaySlide = slideInfo.map((item) => {
      return `
          <div class="features__slide">
            <div class="features__card">
            <p class="card__heading">${item.heading} Feature</p>
            <p class="card__description">${item.description}</p>
            <a href="#" class="card__link">Learn more</a>
            <span class="card__number">${item.id}</span>
            ${item.banner}
            </div>
            </div>`;
    });
    displaySlide = displaySlide.join('');
    slideContainer.innerHTML += displaySlide;
  };
  const showSlides = () => {
    const dots = document.querySelectorAll('.indicator__dot');
    const slideContainer = document.querySelector('.features__slide-container');
    for (let i = 0; i < dots.length && i >= 0; i++) {
      (function (index) {
        dots[i].onclick = function (e) {
          e.preventDefault();
          dots.forEach((dot) => {
            dot.classList.remove('is-active');
          });
          e.target.classList.add('is-active');
          let num = 81.2;
          index === 3
            ? (num += 15.5)
            : index === 2
            ? (num += 12.5)
            : num === num;
          index !== 0
            ? (slideContainer.style.left = `-${index * num}%`)
            : (slideContainer.style.left = `13rem`);
        };
      })(i);
    }
  };
  window.addEventListener('DOMContentLoaded', () => {
    displaySlideInfo(cardsContent);
    showSlides();
  });
}
export default carousel;
