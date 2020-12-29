import { challengeData } from './../settings.js';

class Challenge {
  constructor() {
    this.challengeContainer = document.querySelector('.challenges__grid');
  }

  generateChallengeItem(item) {
    const html = `
    <div class="challenges__grid--item">
      <div class="item--img">
        <img src="./images/challenges/${item.image}" alt="${item.alt}" />
      </div>
      <div class="item--challenge">
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

    this.challengeContainer.insertAdjacentHTML('beforeend', html);
  }

  generateChallenge() {
    challengeData.forEach((elem) => {
      this.generateChallengeItem(elem);
    });
  }
}

export default new Challenge();
