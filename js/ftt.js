/*-------------------------------- Constants --------------------------------*/
import { music,movies, videoGames,random } from '../data/quiz.js'
/*-------------------------------- Variables --------------------------------*/

let questions;

/*------------------------ Cached Element References ------------------------*/
const categories = document.querySelectorAll('.cat')
const questionDisplay = document.querySelector('#question-display')

/*----------------------------- Event Listeners -----------------------------*/

categories.forEach(function(btn){
btn.addEventListener("click", mainCat)
})




/*-------------------------------- Functions --------------------------------*/
// grab the btn id 
// if and else statement 
// innerHTML to append 
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
function randomQ(){ 
let idx = Math.floor(Math.random()*questions.length);
console.log(questions[idx])
}
