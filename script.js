'use strict';

let secretNumber = Math.trunc(Math.random()*20+1);

let score = 20;

let highScore = 0


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)


    // when no number selected
    if(!guess){
        document.querySelector('.message').textContent = 'no number selected'



    // when no is equal to secretnumber
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'correct number'
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber

        if(highScore < score){
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }


    // when no is greater than secretnumber
    }else if(guess > secretNumber){
        if(score > 1){ 
        document.querySelector('.message').textContent = 'too high'
        score--;
        document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = 'You lost the game'
            document.querySelector('.score').textContent = 0
        }


    // when no is smaller than secretnumber
    }else if(guess < secretNumber){
        if(score > 1){ 
        document.querySelector('.message').textContent = 'too low'
        score--;
        document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = 'You lost'
            document.querySelector('.score').textContent = 0
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = '20'
    document.querySelector('.number').textContent = '?'
    secretNumber = Math.trunc(Math.random()*20+1);
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem'
} )
