var startButton = document.querySelector('.start-button')
var questionContainer = document.querySelector('.question-container')
var answerContainer = document.querySelector('.answer-container')
var submissionButton = document.querySelector('.submission-button')
var score = 0
var currentQuestion
var currentAnswerChoices

startButton.addEventListener('click', generateNextQuestion)

function generateNextQuestion () {
  currentQuestion = triviaQuestions[0].question
  currentAnswerChoices = triviaQuestions[0].answerChoices // instead of replacing array entirely, should I push these consecutively in a for loop?
  return showQuestion()
}

function showQuestion () {
  questionContainer.innerHTML = currentQuestion
  return showAnswerChoices()
}

function showAnswerChoices () {
  answerContainer.style.display = 'initial'
  for (var i = 0; i < currentAnswerChoices.length; i++ ) {
    answerContainer.getElementsByClassName('choice[i]').innerHTML = currentAnswerChoices[i]
  }
}
  // for (var i = 0; i <= currentAnswerChoices.length; i++) {
  //   var answerField = document.createElement("input") // how to create various attributes of input field? (and what attributes are necessary?)
  //   answerField.setAttribute("type", "radio")
  //   var lineBreak = document.createElement("br")
  //   currentAnswerChoices[i]
  //   answerContainer.append(answerField)
  //   answerContainer.append(lineBreak)
  // }

// submission-button.addEventListener('click', function submit () {})

var triviaQuestions = [
  {
    question: 'Question 1',
    answerChoices: ['A', 'B', 'C'],
    correctAnswer: 'b'
  },
  {
    question: 'Question 2',
    answerChoices: ['A', 'B', 'C'],
    correctAnswer: 'b'
  },
  {
    question: 'Question 3',
    answerChoices: ['A', 'B', 'C'],
    correctAnswer: 'c'
  },
  {
    question: 'Question 4',
    answerChoices: ['A', 'B', 'C'],
    correctAnswer: 'a'
  },
  {
    question: 'Question 5',
    answerChoices: ['A', 'B', 'C'],
    correctAnswer: 'a'
  },
  {
    question: 'Question 6',
    answerChoices: ['A', 'B', 'C'],
    correctAnswer: 'b'
  },
  {
    question: 'Question 7',
    answerChoices: ['A', 'B', 'C'],
    correctAnswer: 'a'
  },
  {
    question: 'Question 8',
    answerChoices: ['A', 'B', 'C'],
    correctAnswer: 'c'
  },
  {
    question: 'Question 9',
    answerChoices: ['A', 'B', 'C'],
    correctAnswer: 'a'
  },
  {
    question: 'Question 10',
    answerChoices: ['A', 'B', 'C'],
    correctAnswer: 'b'
  }
]
