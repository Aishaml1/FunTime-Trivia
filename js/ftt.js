/*-------------------------------- Constants --------------------------------*/
import { music,movies, videoGames,random } from '../data/quiz.js'

const wrongAnswer = new Audio("../audio/259172__xtrgamr__uhoh.wav")
const correctAnswer = new Audio("../audio/448274__henryrichard__sfx-success.wav")
const catBubble = new Audio('../audio/487532__ranner__bubble-sound.wav')
/*-------------------------------- Variables --------------------------------*/
let questions , score
/*------------------------ Cached Element References ------------------------*/
const triviaQA = document.querySelector('#triviaQA')
const categories = document.querySelectorAll('.cat')
const questionDisplay = document.querySelector('#question-display')
const answerSection = document.querySelector('#answers')
const resetBtn =document.querySelector('#reset-btn')
const lightDarkBtn =document.querySelector('#light-dark-button')
const body = document.querySelector("body")
const countDown = document.querySelector('#countdown')
const total = document.querySelector('#total')
const result = document.querySelector('#results')
/*----------------------------- Event Listeners -----------------------------*/
lightDarkBtn.addEventListener("click", toggleLightDark)
console.log(lightDarkBtn)
resetBtn.addEventListener("click", mainCat)
categories.forEach(function(btn){
btn.addEventListener("click", mainCat)
})

/*-------------------------------- Functions --------------------------------*/
// mainCat is able to work because iy is called in a function above
//mainCat diplays each category in an object
function mainCat(evt){
    if(evt.target.id === 'bMusic' ){
        questions = music
    }
    if(evt.target.id === 'bMovies' ){
        questions = movies
    }
    if(evt.target.id === 'bRandom' ){
        questions = random
    }
    if(evt.target.id === 'bVgame'){
        questions = videoGames
    }
    setTimeout(function(){
        catBubble.play();
    },5);

    randomQ()
}


//random questions 
// idx = questions are random 
function randomQ(){ 
    let idx = Math.floor(Math.random()*questions.length);
    render(idx)
}


function render(idx){
// questions are displayed in HTML. 
//questions[idx].question would show each question 
    questionDisplay.innerHTML = questions[idx].question
    renderChoices(questions[idx])
}



function renderChoices(question){
    const thisAnswer = question.answer
    answerSection.innerHTML =""
    question.choices.forEach(function(choice, idx){
        const isCorrect = thisAnswer === idx
        let option = document.createElement('button')
        option.innerText = choice
        option.value = isCorrect
        option.addEventListener('click', handleClick)
        answerSection.appendChild(option)  
    })

    renderTimer( )



}
function handleClick(evt){
    evt.preventDefault()
    const isCorrect = evt.target.value
    if(isCorrect === 'true'){
        renderScore(evt)
        evt.path[0].style.background = 'green'
        setTimeout(function(){
            correctAnswer.play();
        },10);
    }else{
        evt.path[0].style.background = 'red'
        setTimeout(function(){
            wrongAnswer.play();
        },10);
        }
    }


// time is counting down at 15 secs 
// if time is less than one, it will go to the next question
function renderTimer(){
    let timeLeft = 10
    let timer = setInterval(() =>{
    countDown.textContent = `${timeLeft} seconds remaining`
    timeLeft -= 1
    if(timeLeft < 0) {
    clearInterval(timer)
    randomQ()
    }
    },1000)
}

// score should be equal to every correct answer
// there should be a total for every correct answer passed
// if answer chosen is not correct go to the next question, user does not get points


function renderScore(evt){
score = 0

total.innerHTML =  score++ 
randomQ()
}
endGame()

function endGame(){

}
function toggleLightDark() {
    body.className = body.className === "dark" ? "" : "dark"
    console.log(toggleLightDark)
}
function checkDarkPref() {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches && body.className !== "dark") {
    toggleLightDark()
    }
}








