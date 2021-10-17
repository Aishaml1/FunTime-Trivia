/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/
const musicBtn = document.querySelector('#bMusic')
const moviesBtn = document.querySelector('#bMovies')
const randomBtn = document.querySelector('#bRandom')
const vgBtn = document.querySelector('#bVgame')

/*----------------------------- Event Listeners -----------------------------*/

musicBtn.addEventListener("click", getQuestion)
moviesBtn.addEventListener("click", getQuestion)
randomBtn.addEventListener("click", getQuestion)
vgBtn.addEventListener("click", getQuestion)

/*-------------------------------- Functions --------------------------------*/
function getQuestion(evt){
    
}