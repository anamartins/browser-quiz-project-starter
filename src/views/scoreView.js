/**
 * Create a Score table element
 * @returns {Element}
 */
import { quizData } from '../data.js';
export const createScoreElement = score => {
  const element = document.createElement('h1');
  element.innerText = `Your score: ${score} / ${quizData.questions.length}`;

  return element;
};
