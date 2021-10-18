/*-------------------------------- Constants --------------------------------*/
import { music,movies, videoGames,random } from '../data/quiz.js'
/*-------------------------------- Variables --------------------------------*/

let questions;

/*------------------------ Cached Element References ------------------------*/
const categories = document.querySelectorAll('.cat')
const answers =document.querySelectorAll('.list-group-item')
const questionDisplay = document.querySelector('#question-display')
const answerSection =document.querySelector('#answers')
/*----------------------------- Event Listeners -----------------------------*/

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
    answerSection.innerHTML =""
    console.log(question.choices)
    question.choices.forEach(function(choice){
        console.log(answerSection)
        const option = document.createElement('button')
        option.innerText = choice

        answerSection.appendChild(option)
    })
    renderCorrectchoice()
}
function renderCorrectchoice(){
    
}