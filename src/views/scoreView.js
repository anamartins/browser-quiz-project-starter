/**
 * Create a Score table element
 * @returns {Element}
 */

export const createScoreElement = score => {
  const element = document.createElement('h1');
  element.innerText = `Your score: ${score}`;

  return element;
};
