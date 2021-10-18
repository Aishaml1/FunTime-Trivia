/*-------------------------------- Constants --------------------------------*/
import { randomMusicQuestions, randomQuestions, randomGamesQuestions,randomMoviesQuestions } from '../data/quiz.js'

/*-------------------------------- Variables --------------------------------*/

let questions = []
let answers = []
let correctAnswer = []

/*------------------------ Cached Element References ------------------------*/
const musicBtn = document.querySelector('#bMusic')
const moviesBtn = document.querySelector('#bMovies')
const randomBtn = document.querySelector('#bRandom')
const vgBtn = document.querySelector('#bVgame')
const questionDisplay = document.querySelector('#question-display')

/*----------------------------- Event Listeners -----------------------------*/

musicBtn.addEventListener("click", getQuestion)
moviesBtn.addEventListener("click", getQuestion)
randomBtn.addEventListener("click", getQuestion)
vgBtn.addEventListener("click", getQuestion)

/*-------------------------------- Functions --------------------------------*/
// grab the btn id 
// if and else statement 
// innerHTML to append 
function getQuestion(evt){


appendQuestion()
getAnswer()
render()
}

function appendQuestion(){

}

function getAnswer(){

}