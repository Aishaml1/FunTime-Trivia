/*-------------------------------- Constants --------------------------------*/
import { music,movies, videoGames,random } from '../data/quiz.js'

const wrongAnswer = new Audio("../audio/259172__xtrgamr__uhoh.wav")
const correctAnswer = new Audio("../audio/448274__henryrichard__sfx-success.wav")
const catBubble = new Audio('../audio/487532__ranner__bubble-sound.wav')
/*-------------------------------- Variables --------------------------------*/
let questions 
/*------------------------ Cached Element References ------------------------*/
const categories = document.querySelectorAll('.cat')
const questionDisplay = document.querySelector('#question-display')
const answerSection = document.querySelector('#answers')
const resetBtn =document.querySelector('#reset-btn')
const countDown = document.querySelector('#countdown')
const total = document.querySelector('#total')
/*----------------------------- Event Listeners -----------------------------*/
// lightDarkBtn.addEventListener("click", toggleLightDark)

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
    nextQuestion(question)
    renderTimer()
}
function handleClick(evt){
    evt.preventDefault()
    const isCorrect = evt.target.value
    if(isCorrect === 'true'){
        evt.path[0].style.background = 'green'
        score(evt)
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
    let timeLeft = 15
    let timer = setInterval(() =>{
    countDown.textContent = `${timeLeft} seconds remaining`
    timeLeft -= 1
    if(timeLeft < -1) {
    countDown.textContent = 'Next Question'
    clearInterval(timer)
    }
    },1000)
}

  //score should be equal to every correct answer
    // there should be a total for every correct answer passed
    //if answer chosen is not correct go to the next question, use does not get points
function score(){
    let score = 20
        score++
    total.innerHTML = score ++
    }
    // every time an answer is clicked go on to next question
function nextQuestion(question){
    let currentQuestion = question.question + 1
    console.log(currentQuestion)
}
        







