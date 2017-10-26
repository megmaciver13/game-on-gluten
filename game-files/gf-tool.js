var startButton = document.querySelector('#start-button')
var questionContainer = document.querySelector('.question-container')
var answerContainer = document.querySelector('.answer-container')
var nextButton = document.querySelector('.next')
var scoreContainer = document.querySelector('.trivia-score')
var returnHomeButton = document.querySelector('#return-home')
var timerText = document.querySelector('.trivia-timer')
var timer = 60000
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
    scoreContainer.innerHTML = score
  } else {
    answerContainer.style.display = 'none'
    questionContainer.innerHTML = wrongDiv
    nextButton.style.display = 'inline'
  }
})

nextButton.addEventListener('click', generateNextQuestion)

// event listener to click enter for 'next question' page
// if (questionContainer.innerHTML === wrongDiv || questionContainer.innerHTML === correctDiv) {
//   window.addEventListener('keypress', generateNextQuestion)
// }

function generateNextQuestion () {
  if (counter < 9) {
    currentAnswerChoices = []
    counter += 1
    showQuestions()
  } else {
    showFinalScore()
  }
}

function showFinalScore () {
  if (score === 0) {
    answerContainer.style.display = 'none'
    questionContainer.innerHTML = 'Game over! Unfortunately, you did not score. You need to brush up on your gluten knowledge!'
  } else if (score < (counter - 5)) {
    answerContainer.style.display = 'none'
    questionContainer.innerHTML = `Your final score is ${score}. Looks like you need to brush up on your gluten knowledge.`
  } else if (score <= counter) {
    answerContainer.style.display = 'none'
    questionContainer.innerHTML = `Your final score is ${score}. Looks like you know a thing or two about gluten!`
  }
  returnHomeButton.style.display = 'inline'
}

setInterval(function () {
  timer --
  if (timer === 0) {
    clearInterval ()
    console.log('time is up')
  }
}, 1000)

timerText
