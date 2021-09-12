const startQuiz = document.querySelector("#start-btn")
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
        correct: "A"

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




startQuiz.addEventListener("click", startGame)

function startGame(){
    console.log('started')
    


}

function selectAnswer(){

}