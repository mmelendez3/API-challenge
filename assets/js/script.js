const start = document.querySelector("#start")
const container = document.querySelector("#container")
const quiz = document.querySelector("#quiz")
    quiz.style.display = "none"
const question = document.querySelector("#question")
const choices = document.querySelector("#choices")
const scoreContainer = document.querySelector("#scoreContainer")
    scoreContainer.style.display = "none"
const result = document.querySelector("#result")
const endGameContainer = document.querySelector("#endGameContainer")
    endGameContainer.style.display = "none"
var initials = document.querySelector("#initials")
const clearHighScore = document.querySelector("#clearHighScore")
// const orderedList = document.querySelector("#ordered-list")
const theHighScore = document.querySelector("#theHighScore")
// var taskIdCounter =0
const header = document.querySelector("#header")
const viewScore = document.querySelector("#viewScores")

const choiceA = document.querySelector("#A")
const choiceB = document.querySelector("#B")
const choiceC = document.querySelector("#C")
const choiceD = document.querySelector("#D")
var countdown = document.querySelector("#countdown")
const number = document.querySelector("#number")
const form = document.querySelector("#form")
const submit = document.querySelector("#submit")
const restart = document.querySelector("#restart")


let questions = [
    {
        question: "Commonly used data types DO Not Include:",
        choiceA: "A. strings",
        choiceB: "B. booleans",
        choiceC: "C. alerts",
        choiceD: "D. numbers",
        correct: "C"

    },
    {
        question: "The condition in an if/else statement is enclosed with:",
        choiceA: "A. quotes",
        choiceB: "B. curly brackets",
        choiceC: "C. parenthesis",
        choiceD: "D. square brackets",
        correct: "C"

    },
    {
        question: "Arrays in JavaScript can be used to store:",
        choiceA: "A. numbers and strings",
        choiceB: "B. other arrays",
        choiceC: "C. booleans",
        choiceD: "D. all of the above",
        correct: "D"

    },
    {
        question: "String values must be enclosed within when being assigned to variables:",
        choiceA: "A. commas",
        choiceB: "B. curly brackets",
        choiceC: "C. quotes",
        choiceD: "D. parenthesis",
        correct: "C"

    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choiceA: "A. JavaScript",
        choiceB: "B. terminal/bash",
        choiceC: "C. for loops",
        choiceD: "D. console log",
        correct: "D"

    },


]








var timeleft = 95;
let timer





//start quiz
start.addEventListener("click", startQuiz)

function startQuiz(){
    container.style.display = "none"
    renderQuestion()
    quiz.style.display = "block"
    counterRender()
    timer = setInterval (counterRender,1000)
    
   
    
    
}

function counterRender(){
    if(timeleft <= 0){
        clearInterval(timer);
        countdown.innerHTML = timeleft
    } else {
        countdown.innerHTML = timeleft + " seconds remaining";
        }
        timeleft--;
      


}







let lastQuestionIndex = questions.length-1
let runningQuestionIndex = 0

//render a question
function renderQuestion() {
    let q = questions[runningQuestionIndex]

    question.innerHTML = "<p>" + q.question + "</p>"
    choiceA.innerHTML = q.choiceA
    choiceB.innerHTML = q.choiceB
    choiceC.innerHTML = q.choiceC
    choiceD.innerHTML = q.choiceD

}
    //renderQuestion()
    


function checkAnswer (answer) {
    if (questions[runningQuestionIndex].correct == answer){
        answerIsCorrect()
    }else{
        answerIsWrong()
        timeleft-=10
    }
    if(runningQuestionIndex < lastQuestionIndex){
        runningQuestionIndex++
        renderQuestion()
    }else{
        clearInterval(timer)
        scoreRender()
    }


}

function answerIsCorrect(){
    result.textContent = "Correct"

}

function answerIsWrong(){
    result.textContent = "Wrong"
}

function scoreRender(){
    scoreContainer.style.display = "block"
    quiz.style.display = "none"
    number.innerHTML = timeleft+1
}

submit.addEventListener("click", endQuiz)


    
function endQuiz(){
    endGameContainer.style.display = "block"
    scoreContainer.style.display = "none"
    header.style.display = "none"
    //var highScore = document.querySelector("#theHighScore")
    var name = initials.value
    var score = timeleft+1  
    var scoreDataObj = {
        name: initials.value,
        score: timeleft+1
    }
    
    
    
    const highScoresList = document.getElementById("highScoresList")
    const highScore = JSON.parse(localStorage.getItem("highscores")) || []
    

    highScore.push(scoreDataObj)
    console.log(highScore)
    

    if (!name) {
        alert("Please Enter Your Initials")
        scoreContainer.style.display = "block"
        endGameContainer.style.display = "none"
    }
   
   

    localStorage.setItem("highscores", JSON.stringify(highScore))
    
    highScoresList.innerHTML = highScore
    .map(score => {
        return `<li class="high-score">${score.name}-${score.score}</li>`
    })
    .join("")
}




    




restart.addEventListener("click", restartQuiz)

function restartQuiz(){
    endGameContainer.style.display = "none"
    
    location.reload()
}

clearHighScore.addEventListener("click", clearStorage)

function clearStorage(){
    localStorage.clear()
}

viewScore.addEventListener("click", viewScores)
function viewScores(){
container.style.display = "none"
quiz.style.display="none"
endGameContainer.style.display = "block"
header.style.display = "none"

var name = initials.value
var score = timeleft+1  
var scoreDataObj = {
    name: initials.value,
    score: timeleft+1
}

const highScoresList = document.getElementById("highScoresList")
const highScore = JSON.parse(localStorage.getItem("highscores")) || []


highScore.push(scoreDataObj)
console.log(highScore)

highScoresList.innerHTML = highScore
    .map(score => {
        return `<li class="high-score">${score.name}-${score.score}</li>`
    })
    .join("")
}