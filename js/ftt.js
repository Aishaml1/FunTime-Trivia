/*-------------------------------- Constants --------------------------------*/
import { music,movies, videoGames,random } from '../data/quiz.js'
/*-------------------------------- Variables --------------------------------*/

let questions
// score
/*------------------------ Cached Element References ------------------------*/
const categories = document.querySelectorAll('.cat')
const questionDisplay = document.querySelector('#question-display')
const answerSection = document.querySelector('#answers')
const resetBtn =document.querySelector('#reset-btn')
const countDown = document.querySelector('#countdown')
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
    renderTimer()
}
function handleClick(evt){
    console.log('event', evt.path[1])
    evt.preventDefault()
    const isCorrect = evt.target.value
    if(isCorrect === 'true'){
    evt.path[0].style.background= 'green'
        console.log('U GOT IT RIGHT')
    }else{
        console.log('wrong answer')
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
    }, 1000)
    
    NextQuestion(timer)
}


function NextQuestion (timer){
console.log('this is here')
}
// show results after finishing all four categories.
// use if and else statement results++⭐
// get total 
function renderResults(){
let results = 0;
}