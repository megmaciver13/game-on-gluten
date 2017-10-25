var startButton = document.querySelector('.start-button')
var questionContainer = document.querySelector('.question-container')
var answerContainer = document.querySelector('.answer-container')
var submissionButton = document.querySelector('.submission-button')
var score = 0
var currentQuestion = []
var currentAnswerChoices = []

startButton.addEventListener('click', generateNextQuestion)

function generateNextQuestion () {
  currentQuestion.push(triviaQuestions[0].question)
  currentAnswerChoices.push(triviaQuestions[0].answerChoices)
  return showQuestion()
}

function showQuestion () {
  questionContainer.innerHTML = currentQuestion[0]
  return showAnswerChoices()
}

function showAnswerChoices () {
  answerContainer.innerHTML = currentAnswerChoices[0]
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
