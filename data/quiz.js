// four categories placed in an arry of objects

const music =[ 
{
    question: `finish the lyrics. 'Oh, you make my earth quake, riding around______________.' -'Earthquake'. Tyler the creator ?`,
choices:[`'your love is breaking me up and it's making my heart ache'`,`'your love is shakin me up and it's making my heart break'`,`'your love is is making my heart break'`],
    answer: 1,
},
{
    question: `Kanye West sampled Lauryn Hill's 'Doo Wop (That Thing)' on Donda, what song was it?`,
    choices:[`Believe What I Say`,`Love Lockdown`,`Jail`],
    answer: 0,
},

{ 
    question:`Whats is Billie Eilish biggest hit song?`,
    choices:[`Happier Than Ever`,`Bad Guy`,`Bury A friend`],
    answer: 1,
    
},
{ 
    question:`Justin bieber has a song called 'Peaches' featuring what other two artist ? `,
    choices:[`Daniel Caesar and Giveon`,`Daniel Caesar and Drake`,`Wizkid, Giveon`],
    answer: 0,
    
},
{ 
    question:`Finish the lyrics. 'call me by your name, ____________________. -'MONTERO'. Lil Nas X `,
    choices:[ `'Tell me you love me now'`,`'I'll be waiting'`,`'Tell me you love me in private'`],
    answer: 2,
    
},
{ 
    question:`Choose the correct part of the chorus to the song Essence by Wizkid ft Tems `,
    choices:[`'You don't need no other body'`,`'Time is of the essence'`,`'Promise to treat your love fair'`],
    answer: 0,
    
}
];


const movies =[
{
    question: `What was the name of the Avengers movie that came out in 2019 ?`,
    choices:[`Infinity War`, `Endgame`,`Age of Ultron`],
    answer:  1,
    
},
{
    question: `what is the famous line in Black Panther?`,
    choices:[ `Wakanda forever !`,`Black Panther forever !`,`We serve Wakanda !`],
    answer: 0,
    
},
{
    question: `what’s the name of the actor that’s plays in Venom: Let There Be Carnage ? `,
    choices:[ `Tom Brady`,`Jeff Hardy`,`Tom Hardy`],
    answer: 2,
    
}, 
{
    question: `What planet is Superman from ? `,
    choices:[ `Tamaran`,`Krypton` ,`Earth`],
    answer: 1,
    
},
{
    question:`Who gave the voice for Nala in the remake of 'The Lion King' in 2019?`,
    choices:[ `Moira Kelly`,`Laura Williams`,`Beyoncé`],
    answer: 2,
    
},
{
    question:`Who is the commander of the Suicide Squas?`,
    choices:[ `Amanda Waller`,`The Joker`, `Harley Quinn`],
    answer: 0,
    
    }
];


const videoGames = [
{
    question: `'What is the all time top selling nintendo switch game ?'`,
    choices:[ `Super Smash Bros`, `Animal Crossing: New Horizons`,`Mario Kart 8 Deluxe`],
    answer: 2,
    
},
{
    question: `Whats are the main characters in kingdom hearts?`,
choices:[ `Sora, Riku, Kairi`, `Sora, Minnie Mouse, Mickey Mouse`, `Ventus, Terra, Peter Pan,`],
    answer: 0,
    
    },
    { question:`How many characters are there in Super Smash Bros?`,
    choices:[`79`,`74`,`73`],
    answer: 1,
    
    },
{ 
    question:`What is the currency in Fornite?`,
    choices: [`Z-BUCKS`, `C-BUCKS`, `V-BUCKS`],
    answer: 2,
    
},
{ 
    question:`what athlete was on the cover of legend edition 2k20? `,
    choices:[`Kobe Bryant`,`Michael Jordan`,`Dwayne Wade`],
    answer: 2,
    
    },
{ 
    question:`What is being collected to determine a winner in the game Super Mario Party? `,
    choices: [`coins and stars`, `coins`,`allies and coins`],
    answer: 0,
    
    
}
];

const random = [
    {
        question: `What are the nucleotide bases of DNA`,
        choices: [ `ACGT`,`AGTU`,`TGUA`],
        answer: 0,
        
    },
    {
        question: `Who was the president of the US from 2009-2017?`,
        choices: [`George W. Bush`,`Barack Obama`,  `Joe Biden`],
        answer: 1,
        
        },
        { question:`Which planet is closer to Earth? `,
        choices:[ `Venus`,`Mars`, `Mercury`],
        answer: 2,
        
        },
    { 
        question:`The medical term Bradycardia means?`,
        choices:[ `fast heart rate`,`slow heart rate`, `just right`],
        answer: 1,
        
    },
    { 
        question:`What is the capital of Japan? `,
        choices: [`Saki`,`Kobe`,`Tokyo`],
        answer: 2,
        
        },
    { 
        question:`Who owns Tesla? `,
        choices:[`Bill Gates`,`Elon Musk`,`Stefan Quandt`],
        answer: 1,
    }
    ]

// map question and return a random question from each category. 


// }
//         console.log(randomMusicQuestions())
// function randomQuestions(){
//         return random[Math.floor(Math.random()*random.length)];
// }
//         console.log(randomQuestions())


// function randomMoviesQuestions(){
//         return movies[Math.floor(Math.random()*movies.length)];
// }
//         console.log(randomMoviesQuestions())

// function randomGamesQuestions(){
//         return videoGames[Math.floor(Math.random()*videoGames.length)];
// }
//     console.log(randomGamesQuestions())


export{music,movies, videoGames,random };

