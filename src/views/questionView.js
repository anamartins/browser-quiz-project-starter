import { ANSWERS_LIST_ID, SHOW_ANSWER_BUTTON_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID, SCORE_TABLE_ID } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = question => {
  const element = document.createElement('div');
  element.classList.add("question-element");

  // I use String.raw just to get fancy colors for the HTML in VS Code.

  //changed ul element to div
  element.innerHTML = String.raw`
    
    <h1>${question}</h1>

    <div id="${ANSWERS_LIST_ID}">
    </div>
    <div class = "bottom-buttons">
      <button id="${SHOW_ANSWER_BUTTON_ID}">
        Show answer
      </button>
      <button id="${NEXT_QUESTION_BUTTON_ID}">
        Next question
      </button>
    </div>
  `;

  return element;
};
