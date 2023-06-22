/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  //I changed li element to button
  const element = document.createElement('button');
  element.innerHTML = String.raw`
    ${answerText}
  `;
  //i added options letter ("a","b","c")as id attribute to button
  element.setAttribute('id', key);
  //set "option" class to add eventlistener
  element.setAttribute('class', 'option');

  return element;
};
