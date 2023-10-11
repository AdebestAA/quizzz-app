// updated

// VARIABLES
// the four Containers
const startGameBtn = document.querySelector('.start-game')
const rulesContainer = document.querySelector('.rules-container')
const resultContainer = document.querySelector('.result-container')
let gamePlayContainer = document.querySelector('.game-play')


// game-play-container  html elements

// stop watch
let stopWatch = document.querySelector('.stop-watch')
let questionContainer = document.querySelector('.question-container')
let optionSpanBoxes = document.querySelectorAll('.span-option')
let checkAnswerSpan = document.querySelectorAll('.check-answer')

let optionButtons = document.querySelectorAll('.option-box')

let nextQBtn = document.querySelector('.next-question')

let currentNo = document.querySelector('.current-no')
let totalNo = document.querySelector('.total-no')

// rules container buttons
let rulesExitBtn = document.querySelector('.rules-btn-container button:first-child')
let rulesContinueBtn = document.querySelector('.rules-btn-container button:last-child')

// result-container html elements
let resultReplayBtn = document.querySelector(".result-btn-container button:first-child")
let resultExitBtn = document.querySelector(".result-btn-container button:last-child")

let resultWords = document.querySelector('.result-words')


let yourScore = document.querySelector('.your-score')
let toalComputerQuestions = document.querySelector('.total-computer-questions')

let secondsChecker = 0

let stopSecondsDecreaseInterval  = "";
 let nextClicked = false

function secondsCheckerFunction() {
stopSecondsDecreaseInterval = setInterval(()=>{
    if (nextClicked) {
        secondsChecker = 0;
        clearInterval(stopSecondsDecreaseInterval)
    }

   
secondsChecker += 1

console.log("after ",secondsChecker);



},1000)
}



// Codes

// Game load
window.addEventListener('DOMContentLoaded',loadGame)
function loadGame() {
gamePlayContainer.classList.add('game-play-remove')
rulesContainer.classList.add('rules-container-remove')
resultContainer.classList.add('rules-container-remove')
startGameBtn.classList.remove('start-game-btn-remove')
}


let startGame = false;
let questionNumber = 0;
let appendQuestionNumber = 0
let userScore = 0
let secondsCount = 15
let intervalVaribale = ''
let  UserHasChosenAnAnswer = false
let questionCompleted = false
let totalNumberOfquestion = undefined

   let questions = [
            {   
                no:1,
                ques: "largest country in the world",
                answer:"Russia",
                opts: [
                    "Russia",
                    "Spain",
                    "Germany",
                    "Australia"   
                ]
            },
              {   
                no:2,
                ques: "Capital city of Canada is ...",
                answer:"Ottawa",
                opts: [
                    "Toronto",
                    "Ottawa",
                    "Las Vegas",
                    "Cardiff"   
                ]
            },
              {
                no:3,
                ques: "Which of the following countries is a trans-continental country",
                answer:"Russia",
                opts: [
                    "Russia",
                    "Algeria",
                    "Indonesia",
                    "Brazil"   
                ]
            },
          
            {   
                no:4,
                ques: "Country with the most Men's FIFA  World Cup",
                answer:"Brazil",
                opts: [
                    "Germany",
                    "Argentina",
                    "Italy",
                    "Brazil"   
                ]
            },
             {
                no:5,
                ques: "Country with the Most Spoken languages",
                answer:"Papua New Guinea",
                opts: [
                    "USA",
                    "Nigeria",
                    "Papua New Guinea",
                    "Indonesia"   
                ]
            },
              {
                no:6,
                ques: "One of the following countries is an island country",
                answer:"Madagascar",
                opts: [
                    "China",
                    "Madagascar",
                    "Nigeria",
                    "Algeria"   
                ]
            },
            {
                no:7,
                ques: "Capital City of Brazil",
                answer:"Brasilia",
                opts: [
                    "Rio",
                    "Sao Paulo",
                    "Brasilia",
                    "Lisbon"   
                ]
            },
                  {
                no:8,
                ques: "Which of the following Country is the Most populated African Country?",
                answer:"Nigeria",
                opts: [
                    "Ethiopia",
                    "South Africa",
                    "Nigeria",
                    "Egypt"   
                ]
            },
            {
                no:9,
                ques: "Which of the following countries has the most islands in the world?",
                answer:"Sweden",
                opts: [
                    "Canada",
                    "Sweden",
                    "Indonesia",
                    "Norway"   
                ]
            },
            {
                no:10,
                ques: "Which of the following countries is a landlocked country?",
                answer:"Switzerland",
                opts: [
                    "Australia",
                    "Switzerland",
                    "Japan",
                    "United Kingdom"   
                ]
            },
    
       
  
        ]

     
        let questionVaribale = undefined
        let optionsArray = undefined
        let answerForQuestion = undefined
      
        // startGame Btn click
startGameBtn.addEventListener('click',()=>{
gamePlayContainer.classList.add('game-play-remove')
rulesContainer.classList.remove('rules-container-remove')
resultContainer.classList.add('rules-container-remove')
startGameBtn.classList.add('start-game-btn-remove')
     optionButtons.forEach(optionButton =>{
            optionButton.classList.remove("option-correct-button")
            optionButton.classList.remove("option-wrong-button")

        })
 startGame = false;
 questionNumber = 0;
 appendQuestionNumber = 0
 userScore = 0
 secondsCount = 15
 intervalVaribale = ''
  UserHasChosenAnAnswer = false
 questionCompleted = false
 totalNumberOfquestion = undefined
renderGame()

})

// rules-Continue-btn
rulesContinueBtn.addEventListener('click',()=>{
gamePlayContainer.classList.remove('game-play-remove')
rulesContainer.classList.add('rules-container-remove')
resultContainer.classList.add('rules-container-remove')
startGameBtn.classList.add('start-game-btn-remove')
startGame = true;
renderGame()

})

// rules-Exit-Button
rulesExitBtn.addEventListener('click',()=>{
gamePlayContainer.classList.add('game-play-remove')
rulesContainer.classList.add('rules-container-remove')
resultContainer.classList.add('rules-container-remove')
startGameBtn.classList.remove('start-game-btn-remove')
})



function renderGame() {
    if (!startGame) {
        return
    }
    // horizontal seconds line
      let hrzlLine = document.querySelector('.horizontal-line')
      let widthOfGameBoard = gamePlayContainer.offsetWidth
      
    let increasePx = 0
    let hrztLineIntervalVariable = "";
    if (widthOfGameBoard >= 400) {
            hrztLineIntervalVariable = setInterval(hrztLineIncrease,37)
    function hrztLineIncrease() {
        increasePx += 1;
        hrzlLine.style.width = increasePx;
       
        if (increasePx === widthOfGameBoard ||UserHasChosenAnAnswer) {
            clearInterval(hrztLineIntervalVariable)
        }
    }
    }
    else if (widthOfGameBoard >= 310) {
            hrztLineIntervalVariable = setInterval(hrztLineIncrease,43)
    function hrztLineIncrease() {
        increasePx += 1;
        hrzlLine.style.width = increasePx;
       
        if (increasePx === widthOfGameBoard ||UserHasChosenAnAnswer) {
            clearInterval(hrztLineIntervalVariable)
        }
    }
    }
    else if (widthOfGameBoard < 310) {
            hrztLineIntervalVariable = setInterval(hrztLineIncrease,52)
    function hrztLineIncrease() {
        increasePx += 1;
        hrzlLine.style.width = increasePx;
       
        if (increasePx === widthOfGameBoard ||UserHasChosenAnAnswer) {
            clearInterval(hrztLineIntervalVariable)
        }
    }
    }


    // next question btn disappears
 nextQBtn.classList.add('next-question-remove')



stopWatch.innerText = secondsCount
questionVaribale =  questions[questionNumber].ques
optionsArray = questions[questionNumber].opts
answerForQuestion = questions[questionNumber].answer
questionContainer.innerText = questionVaribale
totalNumberOfquestion = questions.length
appendQuestionNumber = questionNumber + 1
currentNo.innerText = appendQuestionNumber
totalNo.innerText = totalNumberOfquestion

optionsArray.forEach((option,index)=>{
optionSpanBoxes[index].innerText = option
})


// stopWatch



// checking user click
optionSpanBoxes.forEach((optionSpanBox,index)=>{
optionSpanBox.addEventListener('click',()=>{
    checkUserClick(optionSpanBox,index)
})
})

// function to check userClick
function checkUserClick(optionSpanBox,index) {
  
  let textOfOption = optionSpanBox.innerText;

  
    if (UserHasChosenAnAnswer) {
        return
    }

//   condition for if the option clicked is correct
      if(textOfOption === answerForQuestion){
         UserHasChosenAnAnswer = true;
          userScore += 1
          updateScore()
       optionButtons[index].classList.add('option-correct-button')
    console.log(userScore);
    
     if (UserHasChosenAnAnswer == true) {
    nextQBtn.classList.remove("next-question-remove")

    secondsCheckerFunction()
}
  
      }
      //   condition for if the option clicked is incorrect and also show the correct answer
      else{
            UserHasChosenAnAnswer = true
        optionButtons[index].classList.add('option-wrong-button')
        optionSpanBoxes.forEach((optionSpanBox,index)=>{
            if (optionSpanBox.innerText === answerForQuestion) {
                setTimeout(()=>{
 optionButtons[index].classList.add('option-correct-button') 
                },100)
            }
            userScore = userScore;
            updateScore()
        })
 
if (UserHasChosenAnAnswer == true) {

    nextQBtn.classList.remove("next-question-remove")
    secondsCheckerFunction()
}

  
}

}


intervalVaribale = setInterval(()=>{
secondsCount -= 1
;
if (secondsCount < 10) {
    secondsCount = "0" + secondsCount
   
}

stopWatch.innerText = secondsCount
secondsCount = Number(secondsCount)
// console.log("outer",secondsCount);
if (secondsCount > 0 && UserHasChosenAnAnswer) {
     clearInterval(intervalVaribale)

}
if (secondsCount === 0) {
    clearInterval(intervalVaribale)
    // Pick the answer once the time gets 0 seconds
    optionSpanBoxes.forEach((optionSpanBox,index)=>{
    if (optionSpanBox.innerText === answerForQuestion) {
            optionButtons[index].classList.add('option-correct-button')
            userScore = userScore
            updateScore()
            secondsCheckerFunction()
        }
         UserHasChosenAnAnswer = true;
    })
   
    
if (UserHasChosenAnAnswer == true) {
    nextQBtn.classList.remove("next-question-remove")
    clearInterval(intervalVaribale)
}

}

},1000)

}










// next question btn
nextQBtn.addEventListener('click',nextDisplayQuestion)
   function nextDisplayQuestion() {  
    nextClicked = true
    if (secondsChecker === 0) {
        return;
    }

    if (!UserHasChosenAnAnswer || !startGame) {
        return;
    } 
    

secondsChecker = 0
     if (appendQuestionNumber === totalNumberOfquestion) {
        gamePlayContainer.classList.add('game-play-remove')
        rulesContainer.classList.add('rules-container-remove')
        resultContainer.classList.remove('rules-container-remove')
        startGameBtn.classList.add('start-game-btn-remove')
        return
    }

        optionButtons.forEach(optionButton =>{
            optionButton.classList.remove("option-correct-button")
            optionButton.classList.remove("option-wrong-button")

        })
        secondsCount = 15
        intervalVaribale = undefined
       
    questionNumber+=1
    UserHasChosenAnAnswer = false
    renderGame()
}




// code for Result 
function updateScore() {

    if (userScore < totalNumberOfquestion) {
        resultWords.innerText = `You've completed the quiz and sorry🤨,you got only ${userScore} out of ${totalNumberOfquestion}`
    }
    if (userScore === totalNumberOfquestion) {
        resultWords.innerText = `Congratulations,you got all the questions correctly ${userScore}😎. out of ${totalNumberOfquestion}`
    }


}

resultReplayBtn.addEventListener('click',()=>{
gamePlayContainer.classList.add('game-play-remove')
rulesContainer.classList.remove('rules-container-remove')
resultContainer.classList.add('rules-container-remove')
startGameBtn.classList.add('start-game-btn-remove')
     optionButtons.forEach(optionButton =>{
            optionButton.classList.remove("option-correct-button")
            optionButton.classList.remove("option-wrong-button")

        })
 startGame = false;
 questionNumber = 0;
 appendQuestionNumber = 0
 userScore = 0
 secondsCount = 15
 intervalVaribale = ''
  UserHasChosenAnAnswer = false
 questionCompleted = false
 totalNumberOfquestion = undefined
renderGame()

console.log('ade');
})

resultExitBtn.addEventListener('click',()=>{
gamePlayContainer.classList.add('game-play-remove')
rulesContainer.classList.add('rules-container-remove')
resultContainer.classList.add('rules-container-remove')
startGameBtn.classList.remove('start-game-btn-remove')
})