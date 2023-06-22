import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID, SCORE_TABLE_ID } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = question => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.

  //changed ul element to div
  element.innerHTML = String.raw`
    
    <h1>${question}</h1>

    <div id="${ANSWERS_LIST_ID}">
    </div>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
  `;

  return element;
};
