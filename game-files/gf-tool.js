var startButton = document.querySelector('.start-button')
var questionContainer = document.querySelector('.question-container').value
var answerContainer = document.querySelector('.answer-container').value
var submissionButton = document.querySelector('.submission-button')
var score = 0

startButton.addEventListener('click', nextQuestion)

function nextQuestion () {
  // for (var i = 0; i<=10; i++)
  //   questionContainer = triviaQuestions[i].question
  //   answerContainer = triviaQuestions[i].answerChoices
}

// function submit () {}

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
