"use  strict"

const player0=document.querySelector(".player--0")
const player1=document.querySelector(".player--1")
const currentelm=document.querySelector("#current--0")
const currentelm1=document.querySelector("#current--1")
const  score0=document.querySelector("#score--0")
const  score1=document.querySelector("#score--1")



const btnNew=document.querySelector(".btn--new")
const btnRoll=document.querySelector(".btn--roll")
const btnHold=document.querySelector(".btn--hold")
const dice=document.querySelector(".dice")


//starting the condition
score0.textContent=0
score1.textContent=0

let scores,currentScore,activePlayer,playing

const init=function(){




 scores=[0,0]
    currentScore=0
     activePlayer=0
   
    playing=true
   

   
   score0.textContent=0
   score1.textContent=0
   currentelm.textContent=0
   currentelm1.textContent=0

   dice.classList.add("hidden")
  player0.classList.remove("player--winner")
  player1.classList.remove("player--winner")
  player0.classList.add("player--active")
  player0.classList.remove("player--active")
  
// playing=true

 
}
init()  


const switchPlayer=function() {
   
   document.getElementById(`current--${activePlayer}`)
   .textContent=0
   
   currentScore=0
   activePlayer=activePlayer === 0 ? 1 : 0
  player0.classList.toggle("player--active")
  player1.classList.toggle("player--active")

}
  
btnRoll.addEventListener("click",function(){
   if(playing){
 //GENERATING RANDOM DICE NUMBER
 const dice1= Math.trunc(Math.random()*6)+1
 console.log(dice1)

 //DISPLAY DICE
 dice.classList.remove("hidden")
dice.src=`dice--${dice1}.png`

//CHECK FOR ROLLED 1
if( dice1!==1){
currentScore+= dice1
document.querySelector(`#current--${activePlayer}`)
.textContent=currentScore
//currentelm.textContent=currentScore

}

   
   else{
   switchPlayer()
}
   }
 
})
   


  

btnHold.addEventListener("click",function(){
   if(playing){
   //1.CURRENT SCORE TO THE ACTIVE PLAYER

   scores[activePlayer] +=currentScore
   console.log(scores[activePlayer])

   document.getElementById(`score--${activePlayer}`)
   .textContent=
   scores[activePlayer]
   


if(scores[activePlayer]>=100){
   playing=false
   dice.classList.add("hidden")
   document.querySelector(`.player--${activePlayer}`).classList
   .add("player--winner")


}
   switchPlayer()
}
})

btnNew.addEventListener("click",init)



