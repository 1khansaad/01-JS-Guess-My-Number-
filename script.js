'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const messageContent = function(message){
    document.querySelector('.message').textContent = message
}

const scoreFunc = function (score) {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click' , function(){
    const guessValue = Number(document.querySelector('.guess').value)

    //if there is no guess
    if(!guessValue){
        messageContent('select a valid number')
        
     //if guess is equal to secret Number
    }else if(guessValue === secretNumber){
        messageContent('You Win')
        document.querySelector('body').style.backgroundColor = '#999';
        document.querySelector('.number').style.width = '30rem'
        if(highScore < score){
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }

    //if guess is greater than secret number
    }else if(guessValue > secretNumber && score > 1){
        messageContent('Too High')
        score--
        scoreFunc(score)

    //if guess is smaller than secret number
    }else if(guessValue < secretNumber && score > 1){
        messageContent('Too Low')
        score--
        scoreFunc(score)
        
    //if score is 0
    }else{
        messageContent('You Lost')
        scoreFunc(score)
    }
})

document.querySelector('.again').addEventListener('click' , function(){
    messageContent('Start guessing...')
    scoreFunc(score)
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1

    document.querySelector('body').style.backgroundColor = '#000';
    document.querySelector('.number').style.width = '15rem'

   document.querySelector('.guess').value = ''
})