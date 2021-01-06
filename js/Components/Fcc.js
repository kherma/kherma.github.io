import { fccData } from './../settings.js';

class Challenge {
  constructor() {
    this.fccContainer = document.querySelector('.fcc__grid');
  }

  generateFccItem(item) {
    const html = `
    <div class="fcc__grid--item">
      <div class="item--img">
        <img src="./images/fcc/${item.image}" alt="${item.alt}" />
      </div>
      <div class="item--fcc">
        <div class="text--category">
          Focus: <span class="text--regular">${item.focus}</span>
        </div>
        <div class="text--category">
          Profile:
          <span class="text--regular"
            ><a
              href="${item.fccLink}"
              target="_blank"
              >${item.fcc}</a
            ></span
          >
        </div>
        <div class="text--category">
          Deploy:
          <span class="text--regular"
            ><a
              href="${item.codepenLink}"
              target="_blank"
              >${item.codepen}</a
            ></span
          >
        </div>
      </div>
    </div>
    `;

    this.fccContainer.insertAdjacentHTML('beforeend', html);
  }

  generateFcc() {
    fccData.forEach((elem) => {
      this.generateFccItem(elem);
    });
  }
}

export default new Challenge();
