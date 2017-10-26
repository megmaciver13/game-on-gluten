var startButton = document.querySelector('.start-button')
var questionContainer = document.querySelector('.question-container')
var answerContainer = document.querySelector('.answer-container')
var submissionButton = document.querySelector('.submission-button')
var score = 0
var currentQuestion
var currentAnswerChoices = []

startButton.addEventListener('click', function showQuestions () {
  currentQuestion = `${triviaQuestions[0].question}`
  questionContainer.innerHTML = currentQuestion
  return showAnswers ()
})

function showAnswers () {
  answerContainer.style.display = 'inline'
  for (letter in triviaQuestions[0].answerChoices) {
    currentAnswerChoices.push(`<div class='choice'> ${letter} : ${triviaQuestions[0].answerChoices.letter}</label>`)
  }
  answerContainer.innerHTML = currentAnswerChoices.join('<br>')
}

answerContainer.addEventListener('mouseover', function (e) {
  e.target.style.color = '#a2c1a4'
  // if (e.target.style.color === '#55595d') {
  //   console.log('hovered')
  //   e.target.style.color = '#a2c1a4'
  // } else {
  //   e.target.style.color = '#55595d'
  // }
})

answerContainer.addEventListener('mouseout', function (e) {
  e.target.style.color = '#55595d'
})

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
    answerChoices: {
      a: 'A',
      b: 'B',
      c: 'C'
    },
    correctAnswer: 'b',
    type: 'radio'
  },
  {
    question: 'Question 2',
    answerChoices: {
      a: 'A',
      b: 'B',
      c: 'C'
    },
    correctAnswer: 'b',
    type: 'radio'
  },
  {
    question: 'Question 3',
    answerChoices: {
      a: 'A',
      b: 'B',
      c: 'C'
    },
    correctAnswer: 'c',
    type: 'radio'
  },
  {
    question: 'Question 4',
    answerChoices: {
      a: 'A',
      b: 'B',
      c: 'C'
    },
    correctAnswer: 'a',
    type: 'radio'
  },
  {
    question: 'Question 5',
    answerChoices: {
      a: 'A',
      b: 'B',
      c: 'C'
    },
    correctAnswer: 'a',
    type: 'radio'
  },
  {
    question: 'Question 6',
    answerChoices: {
      a: 'A',
      b: 'B',
      c: 'C'
    },
    correctAnswer: 'b',
    type: 'radio'
  },
  {
    question: 'Question 7',
    answerChoices: {
      a: 'A',
      b: 'B',
      c: 'C'
    },
    correctAnswer: 'a',
    type: 'radio'
  },
  {
    question: 'Question 8',
    answerChoices: {
      a: 'A',
      b: 'B',
      c: 'C'
    },
    correctAnswer: 'c',
    type: 'radio'
  },
  {
    question: 'Question 9',
    answerChoices: {
      a: 'A',
      b: 'B',
      c: 'C'
    },
    correctAnswer: 'a',
    type: 'radio'
  },
  {
    question: 'Question 10',
    answerChoices: {
      a: 'A',
      b: 'B',
      c: 'C'
    },
    correctAnswer: 'b',
    type: 'radio'
  }
]
