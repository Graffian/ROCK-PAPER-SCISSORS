const yourChoice = document.getElementById("yourMoveEl")
const computerChoice = document.querySelector("#computerMoveEl")
const messageEl = document.querySelector("#message-el")
let moveArray=["PAPER" , "SCISSOR" , "ROCK"]
let result=""
let scoreEl=document.getElementById("score-el")
let n=0
function rockBtn(){
  yourChoice.innerHTML ="ROCK"
  let randomNumber=Math.floor(Math.random()*3)
  computerChoice.innerHTML=moveArray[randomNumber]
  if(yourChoice.innerHTML===computerChoice.innerHTML){
    result="ITS A DRAW PLAY AGAIN!"
  }else if(yourChoice.innerHTML==="ROCK"&& computerChoice.innerHTML==="PAPER"){
    result="YOU LOSE!👎"
    n=n-1
  }else if(yourChoice.innerHTML==="ROCK"&& computerChoice.innerHTML==="SCISSOR"){
    result="YOU WIN!🥶"
    n=n+1
  }else if(yourChoice.innerHTML==="PAPER"&&computerChoice.innerHTML==="ROCK"){
    result="YOU WIN!🥶"
    n=n+1
  }else if(yourChoice.innerHTML==="PAPER"&&computerChoice.innerHTML==="SCISSOR"){
    result="YOU LOSE!👎"
    n=n-1
  }else if(yourChoice.innerHTML==="SCISSOR"&&computerChoice.innerHTML==="ROCK"){
    result="YOU LOSE!👎"
    n=n-1
  }else if(yourChoice.innerHTML==="SCISSOR"&&computerChoice.innerHTML==="PAPER"){
    result="YOU WIN!🥶"
    n=n+1
  }else{
    result="null"
  }
  messageEl.innerHTML=result
  scoreEl.innerHTML=n
}
function paperBtn(){
  yourChoice.innerHTML="PAPER"
  let randomNumber=Math.floor(Math.random()*3)
  computerChoice.innerHTML=moveArray[randomNumber]
  if(yourChoice.innerHTML===computerChoice.innerHTML){
    result="ITS A DRAW PLAY AGAIN!"
  }else if(yourChoice.innerHTML==="ROCK"&& computerChoice.innerHTML==="PAPER"){
    result="YOU LOSE!👎"
    n=n-1
  }else if(yourChoice.innerHTML==="ROCK"&& computerChoice.innerHTML==="SCISSOR"){
    result="YOU WIN!🥶"
    n=n+1
  }else if(yourChoice.innerHTML==="PAPER"&&computerChoice.innerHTML==="ROCK"){
    result="YOU WIN!🥶"
    n=n+1
  }else if(yourChoice.innerHTML==="PAPER"&&computerChoice.innerHTML==="SCISSOR"){
    result="YOU LOSE!👎"
    n=n-1
  }else if(yourChoice.innerHTML==="SCISSOR"&&computerChoice.innerHTML==="ROCK"){
    result="YOU LOSE!👎"
    n=n-1
  }else if(yourChoice.innerHTML==="SCISSOR"&&computerChoice.innerHTML==="PAPER"){
    result="YOU WIN!🥶"
    n=n+1
  }else{
    result="null"
  }
  messageEl.innerHTML=result
  scoreEl.innerHTML=n
}
function scissorBtn(){
  yourChoice.innerHTML="SCISSOR"
  let randomNumber=Math.floor(Math.random()*3)
  computerChoice.innerHTML=moveArray[randomNumber]
  if(yourChoice.innerHTML===computerChoice.innerHTML){
    result="ITS A DRAW PLAY AGAIN!"
  }else if(yourChoice.innerHTML==="ROCK"&& computerChoice.innerHTML==="PAPER"){
    result="YOU LOSE!👎"
    n=n-1
  }else if(yourChoice.innerHTML==="ROCK"&& computerChoice.innerHTML==="SCISSOR"){
    result="YOU WIN!🥶"
    n=n+1
  }else if(yourChoice.innerHTML==="PAPER"&&computerChoice.innerHTML==="ROCK"){
    result="YOU WIN!🥶"
    n=n+1
  }else if(yourChoice.innerHTML==="PAPER"&&computerChoice.innerHTML==="SCISSOR"){
    result="YOU LOSE!👎"
    n=n-1
  }else if(yourChoice.innerHTML==="SCISSOR"&&computerChoice.innerHTML==="ROCK"){
    result="YOU LOSE!👎"
    n=n-1
  }else if(yourChoice.innerHTML==="SCISSOR"&&computerChoice.innerHTML==="PAPER"){
    result="YOU WIN!🥶"
    n=n+1
  }else{
    result="null"
  }
  messageEl.innerHTML=result
  scoreEl.innerHTML=n
}
