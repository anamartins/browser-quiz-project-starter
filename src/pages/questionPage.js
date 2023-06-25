import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  FINISH_QUIZ_BUTTON_ID,
  SCORE_TABLE_ID,
  SHOW_ANSWER_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { createScoreElement } from '../views/scoreView.js';
import { quizData } from '../data.js';
import { initWelcomePage } from './welcomePage.js';



export const initQuestionPage = () => {
  const currentQuizData = JSON.parse(window.localStorage.getItem('quizData'));
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  
  userInterface.innerHTML = '';

 // fade-in animation
   userInterface.classList.remove('fade-out');
   userInterface.classList.add('fade-in');

   const currentQuestion =
    currentQuizData.questions[currentQuizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);
  // before question add score table to user interface
  const currentScore = calculateScore(currentQuizData);
  const scoreElement = createScoreElement(currentScore);
  const scoreDiv = document.createElement('div');
  scoreDiv.id = SCORE_TABLE_ID;
  scoreDiv.appendChild(scoreElement);

  userInterface.appendChild(scoreDiv);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  //added eventlistener to "show answer" buttons
  const showAnswerBtn = document.getElementById(SHOW_ANSWER_BUTTON_ID);
  showAnswerBtn.addEventListener('click', () => {
  currentQuizData.questions[currentQuizData.currentQuestionIndex].selected="passed"
  window.localStorage.setItem("quizData",JSON.stringify(currentQuizData))
  const correctAnswerElement = document.getElementById(currentQuestion.correct);
  correctAnswerElement.classList.add('correct-answer');
  
});


  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }
  //added eventlistener to option buttons
  for (let element of document.getElementsByClassName('option')) {
    element.addEventListener('click', () => selectAnswer(element.id));
  }

  //If the question is the last question we convert next button to finish button.
  if (
    currentQuizData.currentQuestionIndex ===
    currentQuizData.questions.length - 1
  ) {
    const nextButton = document.getElementById(NEXT_QUESTION_BUTTON_ID);

    nextButton.innerText = 'Finish Quiz';
    nextButton.id = FINISH_QUIZ_BUTTON_ID;
    nextButton.addEventListener('click', finishQuiz);    
  } else {
    document
      .getElementById(NEXT_QUESTION_BUTTON_ID)
      .addEventListener('click', nextQuestion);
  }

  if (currentQuestion.selected !== null) {
    if (currentQuestion.selected === currentQuestion.correct) {
      document
        .getElementById(currentQuestion.selected)
        .classList.add('correct-answer');
    } else {
      document
        .getElementById(currentQuestion.correct)
        .classList.add('correct-answer');
      document
        .getElementById(currentQuestion.selected)
        .classList.add('wrong-answer');
    }
  }
  // add a progress container 
  const progressContainer=document.createElement('div');
  progressContainer.id='progress-container';
  
// add a progress element
  const progressElement = document.createElement('div');
  progressElement.id = 'progress-bar';
  scoreDiv.appendChild(progressContainer);
  progressContainer.appendChild(progressElement)

  // calculate the progress 
  const progressPercentage = ((currentQuizData.currentQuestionIndex + 1) / currentQuizData.questions.length) * 100;
  progressElement.style.width = `${progressPercentage}%`;

};

const nextQuestion = () => {
  const currentQuizData = JSON.parse(window.localStorage.getItem('quizData'));
  currentQuizData.currentQuestionIndex += 1; 
  window.localStorage.setItem('quizData', JSON.stringify(currentQuizData));
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  
    userInterface.classList.remove('fade-in');
    userInterface.classList.add('fade-out');
  // Wait for the fade-out animation to complete before loading new question
  window.setTimeout(function () {
  initQuestionPage();
}, 200);
};

//option buttons click function
const selectAnswer = optionId => {
  
  const currentQuizData = JSON.parse(window.localStorage.getItem('quizData'));
  const question =
    currentQuizData.questions[currentQuizData.currentQuestionIndex];
  if (question.selected === null) {
    question.selected = optionId;
    if (question.correct === optionId) {
      document.getElementById(optionId).classList.add('correct-answer');
    } else {
      document.getElementById(optionId).classList.add('wrong-answer');
      document.getElementById(question.correct).classList.add('correct-answer');
    }
    const quizScore = calculateScore(currentQuizData);
    const scoreElement = createScoreElement(quizScore);
    
    const progressContainer=document.getElementById('progress-container')

    const scoreDiv = document.getElementById(SCORE_TABLE_ID);
    scoreDiv.innerHTML = '';
    scoreDiv.appendChild(scoreElement);
    scoreDiv.appendChild(progressContainer)
    

 


    //add quiz data to localstorage to continue quiz if user refresh the page
    window.localStorage.setItem('quizData', JSON.stringify(currentQuizData));
  }
    

};

//Finish button click function
const finishQuiz = () => {
  const currentQuizData = JSON.parse(window.localStorage.getItem('quizData'));
  const quizScore = calculateScore(currentQuizData);
  const scoreElement = createScoreElement(quizScore);
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  userInterface.appendChild(scoreElement);
  window.localStorage.removeItem('quizData');
  // init welcome page again 
  const restartBtn=document.createElement('button')
  restartBtn.innerHTML='RESTART'
  userInterface.appendChild(restartBtn);
  restartBtn.setAttribute('id', 'restart-button')
  restartBtn.addEventListener('click',initWelcomePage)

};

//calculate current score
const calculateScore = quizData => {
  let quizScore = 0;

  quizData.questions.forEach(question => {
    console.log(question.correct === question.selected);
    if (question.correct === question.selected) {
      quizScore = quizScore + 1;
    }
  });
  return quizScore;
};


