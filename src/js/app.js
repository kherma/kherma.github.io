import Portfolio from './Components/Portfolio.js';
import Challenge from './Components/Challenges.js';

const app = {
  initApp() {
    Portfolio.generatePortfolio();
    Challenge.generateChallenge();
  },
};
app.initApp();
