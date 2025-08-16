"use strict"

let numberGuess = Math.trunc( Math.random() *20 + 1);
console.log(numberGuess);

document.querySelector('.secretNumber').value = "?";
const clickBtn = document.querySelector('.checkBtn');

let scoreMsg = Number(document.querySelector('.scoreNmb').textContent);
console.log(scoreMsg, typeof scoreMsg);

let highScore = 0;

const resultMsg = function(message){
     document.querySelector('.resultMsg').textContent = message
};

const scoreNmb = function(message){
    document.querySelector('.scoreNmb').textContent = message
};


clickBtn.addEventListener('click',
    function(){

        let inputNumber = document.querySelector('.numberInput').value;

        if(scoreMsg > 1){

            if(inputNumber > numberGuess){
                resultMsg("🥱Too High, Try Again")
                scoreMsg--
                scoreNmb(scoreMsg);
            }
            else if (inputNumber == numberGuess){
                resultMsg("✅Correct Number")
                document.querySelector('.highScore').textContent = 
                inputNumber;
                document.querySelector('.secretNumber').value =
                inputNumber;
                document.querySelector('body').style.backgroundColor = 
                'rgb(4, 38, 54)'
                // NEW HIGHSCORE FEATURE
                if(numberGuess > highScore){
                    highScore = numberGuess;
                    document.querySelector('.highScore').textContent =
                    highScore;
                }
            }  
             else if (!numberGuess){
                resultMsg("‼️Input a Number")
            }
           
            else{
                resultMsg( "😔Too Low, Try Again!")
                scoreMsg--
                scoreNmb(scoreMsg);
            }

        } 
        else{
            resultMsg("😭You've Lost the game!");
            document.querySelector('body').style.backgroundColor = "rgb(45, 49, 11)";
        }
    }
)

let clickAgain = document.querySelector('.againBtn');
clickAgain.addEventListener('click',
    function(){
        numberGuess = Math.trunc(Math.random() * 20 + 1);
        document.querySelector('.secretNumber').value = "?";
        document.querySelector('.numberInput').value = 
        "";
       scoreMsg = 20;
       scoreNmb(scoreMsg);
       resultMsg("Continue Playing")
       document.querySelector('body').style.backgroundColor = "rgb(7, 7, 136)"

    }
    
)

