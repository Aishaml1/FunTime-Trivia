// four categories placed in an arry of objects

const music =[ 
{
    question: `finish the lyrics. 'Oh, you make my earth quake, riding around______________.' -'Earthquake'. Tyler the creator ?`,
    a: `'your love is breaking me up and it's making my heart ache'`,
    b: `'your love is shakin me up and it's making my heart break'`,
    c: `'your love is is making my heart break'`,
    answer: 'b'
},
{
    question: `Kanye West sampled Lauryn Hill's 'Doo Wop (That Thing)' on Donda, what song was it?`,
    a: `Believe What I Say`,
    b: `Love Lockdown`,
    c: `Jail`,
    answer: 'a'
},

{ 
    question:`Whats is Billie Eilish biggest hit song?`,
    a: `Happier Than Ever`,
    b: `Bad Guy`,
    c: `Bury A friend`,
    answer: 'b'
},
{ 
    question:`Justin bieber has a song called 'Peaches' featuring what other two artist ? `,
    a: `Daniel Caesar and Giveon`,
    b: `Daniel Caesar and Drake`,
    c: `Wizkid, Giveon`,
    answer: 'a'
},
{ 
    question:`Finish the lyrics. 'call me by your name, ____________________. -'MONTERO'. Lil Nas X `,
    a: `'Tell me you love me now'`,
    b: `'I'll be waiting'`,
    c: `'Tell me you love me in private'`,
    answer: 'c'
},
{ 
    question:`Choose the correct part of the chorus to the song Essence by Wizkid ft Tems `,
    a: `'You don't need no other body'`,
    b: `'Time is of the essence'`,
    c: `'Promise to treat your love fair'`,
    answer: 'a'
}
];


const movies =[
{
    question: `What was the name of the Avengers movie that came out in 2019 ?`,
    a: `Infinity War`,
    b: `Endgame`,
    c: `Age of Ultron`,
    answer:  `b`
},
{
    question: `what is the famous line in Black Panther?`,
    a: `Wakanda forever !`,
    b:  `Black Panther forever !`,
    c:  `We serve Wakanda !`,
    answer: `a`
},
{
    question: `what’s the name of the actor that’s plays in Venom: Let There Be Carnage ? `,
    a: `Tom Brady`,
    b: `Jeff Hardy`,
    c: `Tom Hardy`,
    answer: `c`
}, 
{
    question: `What planet is Superman from ? `,
    a: `Tamaran`,
    b: `Krypton` ,
    c: `Earth`,
    answer: `b`
},
{
    question:`Who gave the voice for Nala in the remake of 'The Lion King' in 2019?`,
    a: `Moira Kelly`,
    b: `Laura Williams`,
    c: `Beyoncé`,
    answer: `c`
},
{
    question:`Who is the commander of the Suicide Squas?`,
    a: `Amanda Waller`,
    b: `The Joker`,
    c: `Harley Quinn`,
    answer: `a`
    }
];


const videoGames = [
{
    question: `'What is the all time top selling nintendo switch game ?'`,
    a: `Super Smash Bros`,
    b: `Animal Crossing: New Horizons`,
    c: `Mario Kart 8 Deluxe`,
    answer: 'c'
},
{
    question: `Whats are the main characters in kingdom hearts?`,
    a: `Sora, Riku, Kairi`,
    b: `Sora, Minnie Mouse, Mickey Mouse`,
    c: `Ventus, Terra, Peter Pan,`,
    answer: 'a'
    },
    { question:`How many characters are there in Super Smash Bros?`,
    a: `79`,
    b: `74`,
    c: `73`,
    answer: 'b'
    },
{ 
    question:`What is the currency in Fornite?`,
    a : `Z-BUCKS`,
    b: `C-BUCKS`,
    c: `V-BUCKS`,
    answer: 'c'
},
{ 
    question:`what athlete was on the cover of legend edition 2k20? `,
    a: `Kobe Bryant`,
    b: `Michael Jordan`,
    c: `Dwayne Wade`,
    answer: 'c'
    },
{ 
    question:`What is being collected to determine a winner in the game Super Mario Party? `,
    a: `coins and stars`,
    b: `coins`,
    c: `allies and coins`,
    answer: 'a'
}
];

const random = [
    {
        question: `What are the nucleotide bases of DNA`,
        a: `ACGT`,
        b: `AGTU`,
        c: `TGUA`,
        answer: 'a'
    },
    {
        question: `Who was the president of the US from 2009-2017?`,
        a: `George W. Bush`,
        b: `Barack Obama`,
        c: `Joe Biden`,
        answer: 'b'
        },
        { question:`Which planet is closer to Earth? `,
        a: `Venus`,
        b: `Mars`,
        c: `Mercury`,
        answer: 'c'
        },
    { 
        question:`The medical term Bradycardia means?`,
        a : `fast heart rate`,
        b: `slow heart rate`,
        c: `just right`,
        answer: 'b'
    },
    { 
        question:`What is the capital of Japan? `,
        a: `Saki`,
        b: `Kobe`,
        c: `Tokyo`,
        answer: 'c'
        },
    { 
        question:`Who owns Tesla? `,
        a: `Bill Gates`,
        b: `Elon Musk`,
        c: `Stefan Quandt`,
        answer: 'b'
    }
    ]

// map question and return a random question from each category. 

function randomMusicQuestions(){ 
        return music[Math.floor(Math.random()*music.length)];
}
        console.log(randomMusicQuestions())
function randomQuestions(){
        return random[Math.floor(Math.random()*random.length)];
}
        console.log(randomQuestions())


function randomMoviesQuestions(){
        return movies[Math.floor(Math.random()*movies.length)];
}
        console.log(randomMoviesQuestions())

function randomGamesQuestions(){
        return videoGames[Math.floor(Math.random()*videoGames.length)];
}
    console.log(randomGamesQuestions())


export{randomMusicQuestions, randomQuestions, randomGamesQuestions,randomMoviesQuestions };

