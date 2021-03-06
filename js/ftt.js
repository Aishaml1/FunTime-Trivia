/*-------------------------------- Constants --------------------------------*/
import { music,movies, videoGames,random } from '../data/quiz.js'
const catBubble = new Audio('../audio/487532__ranner__bubble-sound.wav')
const winner = new Audio('../audio/397434__foolboymedia__crowd-cheer.wav')
const tryAgain = new Audio('../audio/410575__yummie__game-losing-screen-background-music.mp3')
const wrongAnswer = new Audio ('../audio/101354__timbre__remix-of-54047-guitarguy1985-buzzer-variants-[AudioTrimmer.com].wav')
/*-------------------------------- Variables --------------------------------*/
let questions 
let score = 0
let timer 
// gloabal array for current questions
let currentQuestions = []
/*------------------------ Cached Element References ------------------------*/
// trivia is hidden until game starts
const triviaQA = document.querySelector('#triviaQA') 
const categories = document.querySelectorAll('.cat')
const questionDisplay = document.querySelector('#question-display')
const answerSection = document.querySelector('#answers')
const lightDarkBtn =document.querySelector('#light-dark-button')
const body = document.querySelector("body")
const countDown = document.querySelector('#countdown')
const finalScore = document.querySelector('#final-score')
const playAgainbtn = document.querySelector("#play-again")
const alertDisply = document.querySelector('#alert')
const ScoreDisplay =document.querySelector('#trackscore')
/*----------------------------- Event Listeners -----------------------------*/
lightDarkBtn.addEventListener("click", toggleLightDark)
playAgainbtn.addEventListener('click', playAgain)
categories.forEach(function(btn){
btn.addEventListener("click", mainCat)
})

/*-------------------------------- Functions --------------------------------*/
//mainCat diplays each category in an object
function mainCat(evt){
    triviaQA.hidden = false
    countDown.hidden = false
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



//queestions are random and will stop at 6 
//if currentQuestions.length does not = questions.length get random 
//question. if current questions includes the same indx as questions
function randomQ(){ 
    if(currentQuestions.length !== questions.length){
        let idx = Math.floor(Math.random() * (questions.length));
        if(currentQuestions.includes(idx)){
            randomQ()
            return 
        }
        // for every index , push idx into array
        currentQuestions.push(idx)
        render(idx)
    }
    

}

function render(idx){
//questions[idx].question would show each question on the display
    questionDisplay.innerHTML = questions[idx].question
    renderChoices(questions[idx])
}


function renderChoices(question){
    const thisAnswer = question.answer
    answerSection.innerHTML =""
    question.choices.forEach(function(choice, idx){
        //see if the answer is correct or not correct
        const isCorrect = thisAnswer === idx
         //append button for choices
        let option = document.createElement('button')
        option.innerText = choice
        option.value = isCorrect
        option.addEventListener('click', handleClick)
        answerSection.appendChild(option)  
        option.style.margin = "5px";
        option.style.borderRadius = "23px";
        
    })
    renderTimer()
    
}
// if answer chosen is not correct go to the next question, user does not get points
function handleClick(evt){
    evt.preventDefault()
    const isCorrect = evt.target.value
    if(isCorrect === 'true'){
        scoreGame()
    }else{
        setTimeout(function(){
            wrongAnswer.play();
        },5);
    }
    if(currentQuestions.length === 6){
        displayResults()
    }else{
        randomQ()
    }
    
}

// time is counting down at 10 secs 
// if time is less then 0, it will go to the next question
function renderTimer(){
    let timeLeft = 10
    clearInterval(timer)
    timer = setInterval(() =>{
    countDown.textContent = timeLeft;
    timeLeft -= 1
    if(timeLeft < 0) {
        randomQ()
    }
    if(timeLeft < -1){
    displayResults()
    }
    },1000)
}
// score should be equal to every correct answer
// there should be a total for every correct answer passed
function scoreGame(){
    score++
    ScoreDisplay.innerHTML = `Score: ${score}` 
}
function displayResults(){
    triviaQA.hidden = true
    alertDisply.hidden = false
    playAgainbtn.hidden = false

    if(score !== 6){
    finalScore.innerHTML = `Maybe Next Time? <br/> ${score} out of 6` 
    finalScore.style.color= 'white'
    setTimeout(function(){
        tryAgain.play();
    },5);
    }else{
    finalScore.innerHTML = `You Won This Category`  
    setTimeout(function(){
        winner.play();
    },5);
    }
    countDown.hidden = true
    categories.forEach(function(btn){
        btn.removeEventListener("click", mainCat)
    })
    
}

function playAgain(){
    location.reload()
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
