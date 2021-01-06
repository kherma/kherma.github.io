import Portfolio from './Components/Portfolio.js';
import Challenge from './Components/Challenges.js';
import Fcc from './Components/Fcc.js';

const app = {
  initApp() {
    Portfolio.generatePortfolio();
    Challenge.generateChallenge();
    Fcc.generateFcc();
  },
};
app.initApp();
