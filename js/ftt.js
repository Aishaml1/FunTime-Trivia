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
    console.log(randomQ)
    render(idx)
}

function render(idx){
// questions are displayed in HTML. 
//questions[idx].question would show each question 
    questionDisplay.innerHTML = questions[idx].question

    renderChoices(questions[idx])
}
function renderChoices(question){
    answerSection.innerHTML =""
    question.choices.forEach(function(choice,idx){
        let option = document.createElement('button')
        option.innerText = choice
        option.value = idx
        option.addEventListener('click', handleClick)
        answerSection.appendChild(option) 
    })
    renderTimer()
}
function handleClick(){


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
    console.log(timer)
    }, 1000)
    
    // NextQuestion(timer)
}


// console.log(timer)

// function NextQuestion (){

// }
// show results after finishing all four categories.
// use if and else statement results++⭐
// get total 
// function renderResults(){
// let results = 0;
// }