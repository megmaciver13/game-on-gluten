// array holding the trivia questions and corresponding answer choices
var celiacQuestions = [
  {
    question: '1. What is gluten?',
    answerChoices: {
      a: 'a seed found in plants',
      b: 'a protein comprised of two molecules, glutenin and gliadin',
      c: 'glue that holds food together'
    },
    correctAnswer: 'b'
  },
  {
    question: '2. Which grains contain gluten?',
    answerChoices: {
      a: 'corn and wheat',
      b: 'wheat, barley, and rye',
      c: 'rice and corn'
    },
    correctAnswer: 'b'
  },
  {
    question: '3. What is Celiac Disease?',
    answerChoices: {
      a: 'an allergy',
      b: 'a contagious illness',
      c: 'a genetic autoimmune disease'
    },
    correctAnswer: 'c'
  },
  {
    question: '4. Celiac Disease affects what part of the body?',
    answerChoices: {
      a: 'small intestine',
      b: 'stomach',
      c: 'esophagus'
    },
    correctAnswer: 'a'
  },
  {
    question: '5. What does gluten do to the small intestine?',
    answerChoices: {
      a: 'triggers an immune response, damaging the lining of the intestine over time (and resulting in malabsorption)',
      b: 'prevents your stomach from being able to digest any foods',
      c: 'blocks the production of digestive acid in your stomach'
    },
    correctAnswer: 'a'
  },
  {
    question: '6. What are the treatment options for Celiac Disease?',
    answerChoices: {
      a: 'take a pill',
      b: 'gluten free diet',
      c: 'administer a shot'
    },
    correctAnswer: 'b'
  },
  {
    question: '7. Which of the following foods contains gluten?',
    answerChoices: {
      a: 'soy sauce',
      b: 'olive oil',
      c: 'rice'
    },
    correctAnswer: 'a'
  },
  {
    question: '8. Which of the following foods contains gluten?',
    answerChoices: {
      a: 'cheese',
      b: 'balsamic vinegar',
      c: 'malt vinegar'
    },
    correctAnswer: 'c'
  },
  {
    question: '9. Which of the following foods contains gluten?',
    answerChoices: {
      a: 'gravy',
      b: 'coconut oil',
      c: 'nuts'
    },
    correctAnswer: 'a'
  },
  {
    question: '10. Are oats gluten free',
    answerChoices: {
      a: 'Yes',
      b: 'No',
      c: 'Technically oats are gluten free, but they are often contaminated by mills that also process wheat.'
    },
    correctAnswer: 'c'
  }
]

var foodQuestions = [
  {
    question: '1. food',
    answerChoices: {
      a: 'a seed found in plants',
      b: 'a protein comprised of two molecules, glutenin and gliadin',
      c: 'glue that holds food together'
    },
    correctAnswer: 'b'
  },
  {
    question: '2. food',
    answerChoices: {
      a: 'corn and wheat',
      b: 'wheat, barley, and rye',
      c: 'rice and corn'
    },
    correctAnswer: 'b'
  },
  {
    question: '3. food',
    answerChoices: {
      a: 'an allergy',
      b: 'a contagious illness',
      c: 'a genetic autoimmune disease'
    },
    correctAnswer: 'c'
  },
  {
    question: '4. food',
    answerChoices: {
      a: 'small intestine',
      b: 'stomach',
      c: 'esophagus'
    },
    correctAnswer: 'a'
  },
  {
    question: '5. food',
    answerChoices: {
      a: 'triggers an immune response, damaging the lining of the intestine over time (and resulting in malabsorption)',
      b: 'prevents your stomach from being able to digest any foods',
      c: 'blocks the production of digestive acid in your stomach'
    },
    correctAnswer: 'a'
  },
  {
    question: '6. food',
    answerChoices: {
      a: 'take a pill',
      b: 'gluten free diet',
      c: 'administer a shot'
    },
    correctAnswer: 'b'
  },
  {
    question: '7. food',
    answerChoices: {
      a: 'soy sauce',
      b: 'olive oil',
      c: 'rice'
    },
    correctAnswer: 'a'
  },
  {
    question: '8. food',
    answerChoices: {
      a: 'cheese',
      b: 'balsamic vinegar',
      c: 'malt vinegar'
    },
    correctAnswer: 'c'
  },
  {
    question: '9. food',
    answerChoices: {
      a: 'gravy',
      b: 'coconut oil',
      c: 'nuts'
    },
    correctAnswer: 'a'
  },
  {
    question: '10. food',
    answerChoices: {
      a: 'Yes',
      b: 'No',
      c: 'Technically oats are gluten free, but they are often contaminated by mills that also process wheat.'
    },
    correctAnswer: 'c'
  }
]

//  answerChoices in array:
// var triviaQuestions = [
//   {
//     question: 'Question 1',
//     answerChoices: ['A', 'B', 'C'],
//     correctAnswer: 'b'
//   },
//   {
//     question: 'Question 2',
//     answerChoices: {
//       a: 'A',
//       b: 'B',
//       c: 'C'
//     },
//     correctAnswer: 'b'
//   },
//   {
//     question: 'Question 3',
//     answerChoices: {
//       a: 'A',
//       b: 'B',
//       c: 'C'
//     },
//     correctAnswer: 'c'
//   },
//   {
//     question: 'Question 4',
//     answerChoices: {
//       a: 'A',
//       b: 'B',
//       c: 'C'
//     },
//     correctAnswer: 'a'
//   },
//   {
//     question: 'Question 5',
//     answerChoices: {
//       a: 'A',
//       b: 'B',
//       c: 'C'
//     },
//     correctAnswer: 'a'
//   },
//   {
//     question: 'Question 6',
//     answerChoices: {
//       a: 'A',
//       b: 'B',
//       c: 'C'
//     },
//     correctAnswer: 'b'
//   },
//   {
//     question: 'Question 7',
//     answerChoices: {
//       a: 'A',
//       b: 'B',
//       c: 'C'
//     },
//     correctAnswer: 'a'
//   },
//   {
//     question: 'Question 8',
//     answerChoices: {
//       a: 'A',
//       b: 'B',
//       c: 'C'
//     },
//     correctAnswer: 'c'
//   },
//   {
//     question: 'Question 9',
//     answerChoices: {
//       a: 'A',
//       b: 'B',
//       c: 'C'
//     },
//     correctAnswer: 'a'
//   },
//   {
//     question: 'Question 10',
//     answerChoices: {
//       a: 'A',
//       b: 'B',
//       c: 'C'
//     },
//     correctAnswer: 'b'
//   }
// ]
