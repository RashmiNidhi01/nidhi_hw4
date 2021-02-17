var random = Math.floor((Math.random() * 100) + 1);
let attempt = 0;
while(true){
    guess = Number(prompt("Guess your number :"));
    attempt++;
    if(guess == random){
        console.log(`Correct! It only took you ${attempt} attempts to guess the correct number!`);
        break;
    }else if(guess> random){
        console.log('Too high, guess again!');
    }else if(guess< random){
        console.log('Too low,guess again!');
    
    }}