# Game on Gluten Documentation

## Description
This is a trivia game, testing users' knowledge on Celiac Disease and the gluten free lifestyle. If users do not score well, they can cycle back through the questions and take the quiz additional times to learn the information.

## List of Features/User Stories
- **Bronze** (achieved)
  - Generate question for user to see
  - Generate answer choices for user to see
  - User is able to choose an answer as their guess
  - Check to see if the answer is right
  - User receives is notified whether their answer was correct
  - Update score accordingly
  - Generate new question for user to answer
  - Show final score after last question
- **Silver** (achieved)
  - Start page to welcome user
  - 'Begin' button for user to begin
  - Show a timer, which will start once user clicks 'begin'
  - Answer choices change color when the user hovers over them
  - At the end of the game, have a button to return to start page to begin quiz again
- **Gold** (yet to be completed)
  - Categories of questions ('What is Gluten?', 'Celiac Disease', 'Can I Eat This?')
  - High scores board
  - Comment wall for users to exchange their stories with the gluten-free diet

## List of Technologies Used
This trivia game renders in the browser and was made using HTML, CSS, and Javascript. There are two Javascript files - one to store the array of trivia questions and answers, and one to implement the game.

## Installation Instructions / Getting Started
To use this app, fork the project to your Github, and clone it locally. Then, open the HTML file in a browser to begin.

## Unsolved Problems
After a user chooses an answer, a message appears telling them whether their choice was correct or wrong. In order to generate the next question, they must click the 'Next Question' button. I attempted to create an event listener for a keypress event to trigger the button as well. But the event listener was listening for keypress on every page, and was allowing the user to keypress to generate the next question without answering the previous question. Ultimately, I got rid of that event listener in this final version of the game.

## Contribution Guidelines
To contribute, visit the project's main repository at https://github.com/megmaciver13/game-on-gluten
