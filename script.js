'use strict';
let number = document.querySelector(".number")
let highscore = document.querySelector(".highscore");
let score = document.querySelector(".score")
const btnAgain = document.querySelector(".again");
const btnCheck = document.querySelector(".check");
const inputNumber = document.querySelector(".guess");
const mensage = document.querySelector(".message")
const body = document.querySelector("body")
// -----------------------------------------------------

let numberRandom = Math.round(Math.random() * 20)
let scoreValue = 20

// Restart Game
btnAgain.addEventListener( "click", () =>{
    numberRandom = Math.round(Math.random() * 20)
    if (score.innerHTML > highscore.innerHTML && mensage.innerHTML == "Yeahhh!!!") {
        
        highscore.innerHTML = score.innerHTML
    }
    
    score.innerHTML = scoreValue
    inputNumber.value = ""
    number.innerHTML = "?"
    body.classList.remove("sucess")
    
})



btnCheck.addEventListener( "click", () =>{
    if (inputNumber.value == 0 || inputNumber.value > 20) {
        mensage.innerHTML = "Invalid value"

    }else if (numberRandom < inputNumber.value) {
        mensage.innerHTML = "To High"
        scoreValue--
        score.innerHTML = scoreValue
        inputNumber.value = ""

    }else if(numberRandom > inputNumber.value){
        mensage.innerHTML = "To Down"
        scoreValue--
        score.innerHTML = scoreValue
        inputNumber.value = ""

    }else if(numberRandom == inputNumber.value){
        mensage.innerHTML = "Yeahhh!!!"
        body.classList.add("sucess")
        number.innerHTML = numberRandom
        scoreValue = 20

        
    }
    
})