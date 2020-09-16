const Content = () => {
  const template = `
      <main class="content">
        <section class="features">
            <div class="features__header">
              <h1 class="features__heading">Features</h1>
              <p class="features__subheading">Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</p>
            </div>
            <div class="features__slider">
              <div class="features__slide-container">
              </div>
              <div class="indicator__container">
                <div class="indicator__dot is-active"></div>
                <div class="indicator__dot"></div>
                <div class="indicator__dot mobile"></div>
                <div class="indicator__dot mobile"></div>
              </div>
            </div>
          </section>
        </main>
    `;
  return template;
};

export default Content;
