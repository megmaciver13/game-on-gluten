var startButton = document.querySelector('#start-button')
var questionContainer = document.querySelector('.question-container')
var answerContainer = document.querySelector('.answer-container')
var nextButton = document.querySelector('.next')
var score = 0
var currentQuestion
var currentAnswerChoices = []
var counter = 0

startButton.addEventListener('click', showQuestions)

function showQuestions () {
  startButton.style.display = 'none'
  currentQuestion = `${triviaQuestions[counter].question}`
  questionContainer.innerHTML = currentQuestion
  return showAnswers()
}

function showAnswers () {
  answerContainer.style.display = 'inline'
  for (letter in triviaQuestions[counter].answerChoices) {
    currentAnswerChoices.push(`<div class='choice${letter}'> ${letter} : ${triviaQuestions[counter].answerChoices.letter}</div>`)
  }
  answerContainer.innerHTML = currentAnswerChoices.join('<br>')
}

answerContainer.addEventListener('mouseover', function (e) {
  e.target.style.color = '#a2c1a4'
})

answerContainer.addEventListener('mouseout', function (e) {
  e.target.style.color = '#55595d'
})

answerContainer.addEventListener('click', function (e) {
  var correctAnswerLetter = triviaQuestions[counter].correctAnswer
  var correctAnswer = `triviaQuestions[0].answerChoices.${correctAnswerLetter}`
  var wrongDiv = `<div class='wrong'>Not quite!</div>`
  var correctDiv = `<div class='correct'>Correct! You have been awarded 1 point!</div>`
  if (e.target.className === `choice${triviaQuestions[counter].correctAnswer}`) {
    answerContainer.style.display = 'none'
    questionContainer.innerHTML = correctDiv
    nextButton.style.display = 'inline'
    score += 1
  } else {
    answerContainer.style.display = 'none'
    questionContainer.innerHTML = wrongDiv
    nextButton.style.display = 'inline'
  }
})

nextButton.addEventListener('click', generateNextQuestion)

function generateNextQuestion () {
  currentAnswerChoices = []
  counter += 1
  showQuestions()
}

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
