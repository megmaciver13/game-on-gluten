// define variables
var currentQuestionSet = []
var startButton = document.querySelector('#start-button')
var questionContainer = document.querySelector('.question-container')
var answerContainer = document.querySelector('.answer-container')
var celiacCategory = document.querySelector('#celiac')
var eatCategory = document.querySelector('#eat')
var nextButton = document.querySelector('.next')
var scoreContainer = document.querySelector('.trivia-score')
var returnHomeButton = document.querySelector('#return-home')
var timerText = document.querySelector('.trivia-timer')
var timer = 60
var score = 0
var currentQuestion
var currentAnswerChoices = []
var counter = 0

// create event listener for start button to prompt the user to choose a category
startButton.addEventListener('click', chooseCategory)

// create function to choose category
function chooseCategory () {
  startButton.style.display = 'none'
  nextButton.style.display = 'none'
  answerContainer.style.display = 'inline'
  var basicQs = '<div class="category" id="celiac">What is Celiac Disease?</div>'
  var foodQs = '<div class="category" id="eat">Can I Eat This?</div>'
  questionContainer.innerHTML = "Choose which category you'd like to play:"
  answerContainer.innerHTML = basicQs + '<br>' + foodQs
  answerContainer.addEventListener('click', setChosenCategoryQuestions)
}

// event listener on answer container where category choices are


// function to listen for which category in answer container was chosen
function setChosenCategoryQuestions (e) {
  if (e.target.id === 'celiac') {
    setQuestionsToCeliacCategory()
    startTimer()
  } else if (e.target.id === 'eat') {
    setQuestionsToFoodCategory()
    startTimer()
  }
}

function setQuestionsToCeliacCategory () {
  currentQuestionSet = celiacQuestions
  showQuestions()
}

function setQuestionsToFoodCategory () {
  currentQuestionSet = foodQuestions
  showQuestions()
}

// create function to take down the start message and generate the first trivia question
function showQuestions () {
  currentQuestion = `${currentQuestionSet[counter].question}`
  questionContainer.innerHTML = currentQuestion
  return showAnswers()
}

// create a function to generate the answer choices
function showAnswers () {
  answerContainer.style.display = 'inline'
  currentAnswerChoices.push(`<div class='choicea'> A : ${currentQuestionSet[counter].answerChoices.a}</div>`)
  currentAnswerChoices.push(`<div class='choiceb'> B : ${currentQuestionSet[counter].answerChoices.b}</div>`)
  currentAnswerChoices.push(`<div class='choicec'> C : ${currentQuestionSet[counter].answerChoices.c}</div>`)
  // attempt at a for loop to keep code DRY
  // for (letter in currentQuestionSet[counter].answerChoices) {
  //   currentAnswerChoices.push("<div class='choice'" + `${letter}` + ">" + `${letter}` + " : " + `${currentQuestionSet[counter].answerChoices.letter}` + "</div>")
  // }
  answerContainer.innerHTML = currentAnswerChoices.join('<br>')
}

// create event listener for each answer choice to change color when the mouse hovers
answerContainer.addEventListener('mouseover', function (e) {
  e.target.style.color = '#a2c1a4'
})

// create event listener for each answer choice to change color back when the hovering mouse leaves
answerContainer.addEventListener('mouseout', function (e) {
  e.target.style.color = '#55595d'
})

// create event listener to submit answer choice, show a message that the message is either right or wrong, and generate a next question button
answerContainer.addEventListener('click', function (e) {
  var wrongDiv = `<div class='wrong'>Not quite!</div>`
  var correctDiv = `<div class='correct'>Correct! You have been awarded 1 point!</div>`
  if (e.target.className === `choice${currentQuestionSet[counter].correctAnswer}`) {
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

// create an event listener to generate the next question
nextButton.addEventListener('click', generateNextQuestion)

// attempt at event listener to click enter for 'next question' button:
// if (questionContainer.innerHTML === wrongDiv || questionContainer.innerHTML === correctDiv) {
//   window.addEventListener('keypress', generateNextQuestion)
// }

// increase the counter number to iterate through the next question and answers in the triviaQuestions array
function generateNextQuestion () {
  if (counter < 9) {
    currentAnswerChoices = []
    counter += 1
    showQuestions()
  } else {
    counter += 1
    showFinalScore()
  }
}

// show final score and corresponding message
function showFinalScore () {
  stopTimer()
  timer = 0
  timerText.innerHTML = '00:00'
  if (score === 0) {
    nextButton.style.display = 'none'
    questionContainer.innerHTML = 'Game over! Unfortunately, you did not score. You need to brush up on your gluten knowledge!'
  } else if (score < (counter - 5)) {
    nextButton.style.display = 'none'
    questionContainer.innerHTML = `Your final score is ${score}. Looks like you need to brush up on your gluten knowledge.`
  } else if (score <= counter) {
    nextButton.style.display = 'none'
    questionContainer.innerHTML = `Your final score is ${score}. Looks like you know a thing or two about gluten!`
  }
  returnHomeButton.style.display = 'inline'
}

// create event listener for home button to reset to the start page
returnHomeButton.addEventListener('click', resetPage)

// create a function to reset to the start page to begin the quiz again
function resetPage () {
  questionContainer.innerHTML = "So you want to learn more about gluten? You've come to right place. Welcome to <a class='game-title'>Can I Eat This?</a>, a game on gluten. You'll learn all about this pervasive protein - what it is, what it's in, and how to avoid it. Click the button below to begin.<br>"
  returnHomeButton.style.display = 'none'
  startButton.style.display = 'inline'
  counter = 0
  score = 0
  timer = 60
  scoreContainer.innerHTML = score
  currentQuestionSet = []
  currentAnswerChoices = []
}

var gameTimer

function stopTimer () {
  console.log(gameTimer)
  clearInterval(gameTimer)
}

// create timer
function startTimer () {
  gameTimer = setInterval(function () {
    timer--
    if (timer === 0) {
      timerText.innerHTML = '00:00'
      stopTimer()
      if (counter <= 9) {
        questionContainer.innerHTML = 'Game Over! It appears you are not a master of gluten knowledge. Try again!'
        returnHomeButton.style.display = 'inline'
        answerContainer.style.display = 'none'
      }
    } else if (timer < 10) {
      timerText.innerHTML = '00:0' + timer
    } else if (timer >= 10) {
      timerText.innerHTML = '00:' + timer
    }
  }, 1000)

}
