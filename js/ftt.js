/*-------------------------------- Constants --------------------------------*/
import { music,movies, videoGames,random } from '../data/quiz.js'
/*-------------------------------- Variables --------------------------------*/

let questions;

/*------------------------ Cached Element References ------------------------*/
const categories = document.querySelectorAll('.cat')
const answers =document.querySelectorAll('.list-group-item')
const questionDisplay = document.querySelector('#question-display')
/*----------------------------- Event Listeners -----------------------------*/

categories.forEach(function(btn){
btn.addEventListener("click", mainCat)
})




/*-------------------------------- Functions --------------------------------*/
//
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
        console.log(questions)
    }
    randomQ()
}
// created a function for random questions 
function randomQ(){ 
    let idx = Math.floor(Math.random()*questions.length);
    
    render(idx)
}


function render(idx){
questionDisplay.innerHTML = questions[idx].question
}
// render()