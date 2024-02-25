const yourChoice = document.getElementById("yourMoveEl")
const computerChoice = document.querySelector("#computerMoveEl")
const messageEl = document.querySelector("#message-el")
let moveArray=["PAPER" , "SCISSOR" , "ROCK"]
let result=""
function rockBtn(){
  yourChoice.innerHTML ="ROCK"
  let randomNumber=Math.floor(Math.random()*3)
  computerChoice.innerHTML=moveArray[randomNumber]
  if(yourChoice.innerHTML===computerChoice.innerHTML){
    result="ITS A DRAW PLAY AGAIN!"
  }else if(yourChoice.innerHTML==="ROCK"&& computerChoice.innerHTML==="PAPER"){
    result="YOU LOSE!👎"
  }else if(yourChoice.innerHTML==="ROCK"&& computerChoice.innerHTML==="SCISSOR"){
    result="YOU WIN!🥶"
  }else if(yourChoice.innerHTML==="PAPER"&&computerChoice.innerHTML==="ROCK"){
    result="YOU WIN!🥶"
  }else if(yourChoice.innerHTML==="PAPER"&&computerChoice.innerHTML==="SCISSOR"){
    result="YOU LOSE!👎"
  }else if(yourChoice.innerHTML==="SCISSOR"&&computerChoice.innerHTML==="ROCK"){
    result="YOU LOSE!👎"
  }else if(yourChoice.innerHTML==="SCISSOR"&&computerChoice.innerHTML==="PAPER"){
    result="YOU WIN!🥶"
  }else{
    result="null"
  }
  messageEl.innerHTML=result
}
function paperBtn(){
  yourChoice.innerHTML="PAPER"
  let randomNumber=Math.floor(Math.random()*3)
  computerChoice.innerHTML=moveArray[randomNumber]
  if(yourChoice.innerHTML===computerChoice.innerHTML){
    result="ITS A DRAW PLAY AGAIN!"
  }else if(yourChoice.innerHTML==="ROCK"&& computerChoice.innerHTML==="PAPER"){
    result="YOU LOSE!👎"
  }else if(yourChoice.innerHTML==="ROCK"&& computerChoice.innerHTML==="SCISSOR"){
    result="YOU WIN!🥶"
  }else if(yourChoice.innerHTML==="PAPER"&&computerChoice.innerHTML==="ROCK"){
    result="YOU WIN!🥶"
  }else if(yourChoice.innerHTML==="PAPER"&&computerChoice.innerHTML==="SCISSOR"){
    result="YOU LOSE!👎"
  }else if(yourChoice.innerHTML==="SCISSOR"&&computerChoice.innerHTML==="ROCK"){
    result="YOU LOSE!👎"
  }else if(yourChoice.innerHTML==="SCISSOR"&&computerChoice.innerHTML==="PAPER"){
    result="YOU WIN!🥶"
  }else{
    result="null"
  }
  messageEl.innerHTML=result
}
function scissorBtn(){
  yourChoice.innerHTML="SCISSOR"
  let randomNumber=Math.floor(Math.random()*3)
  computerChoice.innerHTML=moveArray[randomNumber]
  if(yourChoice.innerHTML===computerChoice.innerHTML){
    result="ITS A DRAW PLAY AGAIN!"
  }else if(yourChoice.innerHTML==="ROCK"&& computerChoice.innerHTML==="PAPER"){
    result="YOU LOSE!👎"
  }else if(yourChoice.innerHTML==="ROCK"&& computerChoice.innerHTML==="SCISSOR"){
    result="YOU WIN!🥶"
  }else if(yourChoice.innerHTML==="PAPER"&&computerChoice.innerHTML==="ROCK"){
    result="YOU WIN!🥶"
  }else if(yourChoice.innerHTML==="PAPER"&&computerChoice.innerHTML==="SCISSOR"){
    result="YOU LOSE!👎"
  }else if(yourChoice.innerHTML==="SCISSOR"&&computerChoice.innerHTML==="ROCK"){
    result="YOU LOSE!👎"
  }else if(yourChoice.innerHTML==="SCISSOR"&&computerChoice.innerHTML==="PAPER"){
    result="YOU WIN!🥶"
  }else{
    result="null"
  }
  messageEl.innerHTML=result
}
