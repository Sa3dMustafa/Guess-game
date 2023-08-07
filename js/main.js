
let number =document.querySelector('.number');
let gueesNumber= document.querySelector("#guessNumber")
let secretnumber = Math.trunc(Math.random()* 20) + 1 ;
let score = 20;
let highScore=0;

// display messages
let disblayMessage =function(message) {
    document.querySelector(".message").textContent=message;
}

document.querySelector(".check").addEventListener("click", function(){
    let guess = Number (gueesNumber.value)
    console.log(guess ,typeof guess);
    // if guess is emty
    if(!guess){
        disblayMessage("⛔ NO Number!")
        // if guess is correct
    }else if(guess === secretnumber){
        disblayMessage(" 🎉 Correct Number!")
        score++;
        document.querySelector('.score').textContent= score;
        number.textContent = secretnumber;
        document.querySelector('.container').style ="background-color: #60b347"
        number.style.width="180px"
        // save the score
        if(score > highScore){
            highScore = score;
            document.querySelector('.hight').textContent = highScore;
        }else{
            highScore=highScore;
            document.querySelector('.hight').textContent = highScore;
        }
        // if the guess not correct
    }else if(guess !== secretnumber){
        if(score > 1){
            disblayMessage(guess > secretnumber ? " 📈 Too high!" :"📉 Too Loo!");
        score--;
        document.querySelector('.score').textContent= score;
        gueesNumber.focus();
        }else{
            disblayMessage("💥 You Lost The Game!")
            document.querySelector('.score').textContent=0;
        }
    }
})

// click to relode game 
document.querySelector('.again').addEventListener('click', function again(){
    document.querySelector('.container').style ="background-color: #222"
    number.style.width="130px"
    disblayMessage("🔂 Start Again!")
    score=20;
    document.querySelector('.score').textContent=score;
    secretnumber = Math.trunc(Math.random()* 20) + 1 ;
    document.querySelector('.number').textContent='?'
    document.querySelector("#guessNumber").value="";
    if(score>20){
        again();
    }
})