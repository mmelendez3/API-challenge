const start = document.querySelector("#start")
const container = document.querySelector("#container")
const quiz = document.querySelector("#quiz")
const question = document.querySelector("#question")
const choices = document.querySelector("#choices")

const choiceA = document.querySelector("#A")
const choiceB = document.querySelector("#B")
const choiceC = document.querySelector("#C")
const choiceD = document.querySelector("#D")

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
        question: "String values must be enclosed within    when being assigned to variables:",
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



//start quiz
start.addEventListener("click", startQuiz)

function startQuiz(){
    container.style.display = "none"
    renderQuestion()
    quiz.style.display = "block"
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

    //start.style.display = "none"
    //runningQuestionIndex = 0
    //renderQuestion()

    //runningQuestionIndex++
    renderQuestion()
    //quiz.style.display = "block"

let score = 0
function checkAnswer (answer) {
    if (questions[runningQuestionIndex].correct == answer){
        score++
    }else{
        answerIsWrong()
    }
    if(runningQuestionIndex< lastQuestionIndex){
        count = 0
        runningQuestionIndex++
        renderQuestion()
    }


}

