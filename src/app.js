import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initQuestionPage } from './pages/questionPage.js';

const loadApp = () => {
  const currentQuizData = JSON.parse(window.localStorage.getItem('quizData'));
  //check if user already started quiz before
  if (currentQuizData === null) {
    quizData.currentQuestionIndex = 0;

    initWelcomePage();
  } else {
    initQuestionPage();
  }
};

window.addEventListener('load', loadApp);
