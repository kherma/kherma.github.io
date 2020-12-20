import portfolioData from "./settings.js";

class Portfolio {
  constructor() {
    this.portfolioContainer = document.querySelector(".portfolio__grid");
  }

  generatePortfolioItem(item) {
    const html = `
    <div class="portfolio__grid--item">
      <div class="item--img">
        <img src="./images/${item.image}" alt="${item.alt}" />
      </div>
      <div class="item--text">
        <div class="text--category">
          Purpose: <span class="text--regular">${item.purpose}</span>
        </div>
        <div class="text--category">
          Focus: <span class="text--regular">${item.focus}</span>
        </div>
        <div class="text--category">
          Technology:
          <span class="text--regular">${item.technology}</span>
        </div>
        <div class="text--category">
          Responsiveness:
          <span class="text--regular">${item.responsiveness}</span>
        </div>
        <div class="text--category">
          Repository:
          <span class="text--regular"
            ><a
              href="${item.repoLink}"
              target="_blank"
              >${item.repository}</a
            ></span
          >
        </div>
        <div class="text--category">
          Deploy:
          <span class="text--regular"
            ><a
              href="${item.depoLink}"
              target="_blank"
              >${item.deploy}</a
            ></span
          >
        </div>
      </div>
    </div>
    `;

    this.portfolioContainer.insertAdjacentHTML("beforeend", html);
  }

  generatePortfolio() {
    portfolioData.forEach((elem) => {
      this.generatePortfolioItem(elem);
    });
  }
}

const createPortfolio = new Portfolio();
createPortfolio.generatePortfolio();
