/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'What are the different ways to declare a JS variable?',
      answers: {
        a: 'constant, let, variable',
        b: 'var, const, let, function',
        c: 'var, let, const',
        d: 'let, const'
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'What does `typeof` do?',
      answers: {
        a: 'changes the type of a primitive value',
        b: 'returns a string describing the type of a value',
        c: 'determines if a value is primitive',
        d: 'can tell the difference between arrays and objects'
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text: 'Which of the following functions doesn\'t take a callback function as one of its parameters?',
      answers: {
        a: '.addEventListener()',
        b: '.splice()',
        c: '.reduce()',
        d: '.filter()'
      },
      correct: 'b',
      selected: null
    },
    {
      text: 'What is the value of: ”41” + 1',
      answers: {
        a: '42',
        b: '411',
        c: '“42”',
        d: '“411”'
      },
      correct: 'd',
      selected: null
    },
    {
      text: 'What would this piece of code display? let x = 5; console.log(x != 8);',
      answers: {
        a: 'false',
        b: 'true',
        c: 'x!=8',
        d: '8'
      },
      correct: 'b',
      selected: null
    },
    {
      text: 'Which type of language is Javascript?',
      answers: {
        a: 'Programming',
        b: 'Markup',
        c: 'Scripting',
        d: 'None of the above'
      },
      correct: 'c',
      selected: null
    },
    {
      text: 'Purpose of designing the Javascript',
      answers: {
        a: 'To Perform Server Side Scripting Operations',
        b: 'To Style HTML Pages',
        c: 'To add interactivity to HTML Pages',
        d: 'All of the above'
      },
      correct: 'c',
      selected: null
    },
    {
      text: 'Which of the following function of Array object removes the last element from an array and returns that element?',
      answers: {
        a: 'push()',
        b: 'pop()',
        c: 'delete()',
        d: 'link()'
      },
      correct: 'b',
      selected: null
    },
    {
      text: 'Which is not valid data type in Javascript?',
      answers: {
        a: 'Undefined',
        b: 'float',
        c: 'Boolean',
        d: 'Number'
      },
      correct: 'b',
      selected: null
    },
    {
      text: 'The _______ method of an Array object adds and/or removes elements from an array.',
      answers: {
        a: 'Reverse',
        b: 'Slice',
        c: 'Shift',
        d: 'Splice'
      },
      correct: 'c',
      selected: null
    },
  ],
};
