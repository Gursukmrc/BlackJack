
let isAlive=true
let isAliveCompetitor=true
let hasBlackJack=false
let cards1=[]
let sum=0
let competitorNumbers=[]
// ---------------------------------DOM STARTS------------------------------------------
let header=document.querySelector("#header")
let messageEl=document.querySelector("#message-El")
let sumEl=document.querySelector("#sum-El")
let cardsEl=document.querySelector("#cards-El")
let btndlt=document.querySelector("#btndlt")
let dissepear=document.querySelector(".dissepear")
let playerEl=document.querySelector("#player-El")
let holded=document.querySelector("#hold")
let competitorEl=document.querySelector("#competitor")
let competitorElSum=document.querySelector("#competitor-Sum")
let holdDiv=document.querySelector("#hold-div")
let newGame=document.querySelector("#new-game")

console.log(newGame)

// -------------------------------- DOM ENDS ------------------------------------------
let player = 
{
    name:"Gursu",
    chips: 150,
}
let chips=player.chips
console.log(chips)

playerEl.innerText=player.name+ ": $"+ player.chips
//------------------------------------------ START GAME ------------------------------------------
function startGame(){
    btndlt.innerHTML="<style>display:none; padding:none;</style>"
    dissepear.classList.remove("dissepear")
    holded.classList.remove("hold")
    
    
  if (isAlive===true){
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    sum+=firstCard+secondCard
    isAlive=true
    cards1.push([firstCard,secondCard])
    renderGame()
  }
}
//------------------------------------------RENDER GAME ------------------------------------------
function renderGame(){
    //------------------------------------------RENDER OUT FIRST AND SECOND CARD ------------------------------------------
    sumEl.innerText="Sum:"+sum;
    cardsEl.innerText="Cards: "
    for(let i = 0;i<cards1.length;i++){
        cardsEl.innerText+="  "+cards1[i]
    }
    //render out all cards
        if(sum<=20){
            messageEl.innerText="want a new card?"
            isAlive=true
            newGame.classList.remove("dissepear")
        }
        else if(sum===21){
            messageEl.innerText="BlackJack!"
            hasBlackJack=true
            newGame.classList.remove("dissepear")

        }
        else{
            messageEl.innerText= "You Lost"
            isAlive=false
            holded.classList.add('hold')
            newGame.classList.remove("dissepear")
        }
  
}

// ------------------------------------------NEW CARD ------------------------------------------
function newCard(){
  if (isAlive===true && hasBlackJack===false){
    console.log("Drawing a new card from the deck!")
    let card = getRandomCard()
    sum+=card
    cards1.push(card)
    renderGame()
    console.log(card)
  }

}
//------------------------- RANDOM CARD------------------------------------------
function getRandomCard(){
   let random= Math.floor(Math.random() *13)+1

   if(random>10){
    return 10;
   }
   else if(random===1){
    return 11
   }
   else{
    return random
   }
  }

  //----------------------------COMPETITOR----------------------------
  
  function hold(){
    isAlive=false
    competitor()
    dissepear.classList.add('dissepear')

  }
  if (isAliveCompetitor===true){
    let competitornr1= getRandomCard()
    let competitornr2= getRandomCard()
    competitorNumbers=[competitornr1,competitornr2]
  }

  function competitor(){
    isAliveCompetitor=true
    let newCard2=getRandomCard()
    let competitorSum=competitorNumbers[0]+competitorNumbers[1]

    competitorEl.innerText="Competitor Numbers: "+competitorNumbers
    competitorElSum.innerText="Sum: "+competitorSum
    if (competitorSum<16){
      competitorSum+=newCard2
      competitorEl.innerText+=","+ newCard2
    }
    competitorElSum.innerText="Sum: "+competitorSum
    if (competitorSum<sum){
      header.innerText="You Won!"
    }
    else if (competitorSum==sum){
      header.innerText="Draw"
    }
    else if (competitorSum>sum && competitorSum<=21){ 
      header.innerText="You Lost"
    }
    else if (competitorSum>21){
      header.innerText="You Won"
    }
    holdDiv.innerHTML=`<style>display:none;</style>`
    newGame.classList.remove("dissepear")
  }


  newGame.addEventListener("click",function(){
    location.reload()
  })




