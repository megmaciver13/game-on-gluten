var startButton = document.getElementsByClassName('start-button')
var questionContainer = document.getElementsByClass('question-container').value
var answerContainer = document.getElementsByClass('answer-container').value
var submissionButton = document.getElementsByClassName('submission-button')
var score = 0

var triviaQuestions = [
  {
    question: 'Question 1',
    answerChoices: {
      a: 'A',
      b: 'B',
      c: 'C'
    },
    correctAnswer: 'b'
  },
  {
    question: 'Question 2',
    answerChoices: {
      a: 'A',
      b: 'B',
      c: 'C'
    },
    correctAnswer: 'b'
  },
  {
    question: 'Question 3',
    answerChoices: {
      a: 'A',
      b: 'B',
      c: 'C'
    },
    correctAnswer: 'c'
  },
  {
    question: 'Question 4',
    answerChoices: {
      a: 'A',
      b: 'B',
      c: 'C'
    },
    correctAnswer: 'a'
  },
  {
    question: 'Question 5',
    answerChoices: {
      a: 'A',
      b: 'B',
      c: 'C'
    },
    correctAnswer: 'a'
  },
  {
    question: 'Question 6',
    answerChoices: {
      a: 'A',
      b: 'B',
      c: 'C'
    },
    correctAnswer: 'b'
  },
  {
    question: 'Question 7',
    answerChoices: {
      a: 'A',
      b: 'B',
      c: 'C'
    },
    correctAnswer: 'a'
  },
  {
    question: 'Question 8',
    answerChoices: {
      a: 'A',
      b: 'B',
      c: 'C'
    },
    correctAnswer: 'c'
  },
  {
    question: 'Question 9',
    answerChoices: {
      a: 'A',
      b: 'B',
      c: 'C'
    },
    correctAnswer: 'a'
  },
  {
    question: 'Question 10',
    answerChoices: {
      a: 'A',
      b: 'B',
      c: 'C'
    },
    correctAnswer: 'b'
  }
]

startButton.addEventListener('click', nextQuestion())

function nextQuestion () {
  for (var i = 0; i<=10; i++)
    triviaQuestions[i].question
}
