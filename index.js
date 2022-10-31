//   // let sth =heading2.innerText==='Guess My Number'
//   // if (sth) {
//   //     heading2.innerText='Jaspher'
//   // }else{
//   //     heading2.innerText='Guess My Number'
//   // }
//   nameChanger =(10)
//   let randomNumber = nameChanger
//   for (let i = 0; i < randomNumber.length; i++) {
// return( nameChanger);
// Number.textContent = randomNumber ;
//   }

// // Math.ceil(Math.random() * 10);
// //   Number.textContent = randomNumber;
// }
// btn.addEventListener("click", nameChanger);

// const btn = document.querySelector(".check");

// function logic() {
//   let guessedNumber = Math.ceil(Math.random() * 6);
//   const message = document.querySelector(".message");
//   const Number = document.querySelector(".number");
//   Number.textContent = guessedNumber;
//   let guess = Number(document.querySelector(".guess").value);
//   if (!guess) {
//     message.textContent = "no number";
//   } else if (guess === guessedNumber) {
//     message.textContent = "Winner🍑🏆🏆🏆";
//   } else {
//     message.textContent = "'Wrong guess😭😭😭😭😭😭";
//   }
// }

// btn.addEventListener("click", logic);

// let heading2 = document.querySelector('h2')
// let btn = document.querySelector('.check')
// let number= document.querySelector('.number')

// function nameChanger(){
// let randomNumber = Math.ceil(Math.random()* 10)
// number.textContent = randomNumber
// let sth = heading2.innerText === 'Guess My Number'
// if(sth){
//    heading2.innerText = 'Jasper'
// }else{
//     heading2.innerText = 'Guess My Number'
// }
// }
// btn.addEventListener('click',nameChanger)
// handling input fields
// To get the data from an input field , u need to pass a .value
// let inputField = document.querySelector('.guess')

// inputField.value = 20

let btn = document.querySelector(".check");
let resetBtn = document.getElementById("reset")
let resetNum = document.getElementById("zero")
let body = document.body.style;
let number = document.querySelector(".number");
let message = document.querySelector(".message");
console.log(resetBtn)
function logic() {
  let guessedNumber = Math.ceil(Math.random() * 6);
  
  
  let score = document.querySelector(".score");
  let heading =document.querySelector('h2')
  number.textContent = guessedNumber;
  
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    message.textContent = "no Number";
  } else if (guess === guessedNumber) {
    message.textContent = "Winner 🏆";
    body.backgroundColor = "green";
  } else if (guess !== guessedNumber) {
    message.textContent = "Wrong guess 😭";
    body.backgroundColor = "blue";
    score.textContent;
    if(score.textContent==0){
   score.textContent=0
    }else{
        score.textContent--
    }
  }
  if (score.textContent==0){
    heading.textContent='Trial exceeded,please click on play again button to restart'
  }
}

btn.addEventListener("click", logic);

resetBtn.addEventListener("click",  () => {
    resetNum.value = ""
    number.innerText = "?"
    body.backgroundColor = "#333";
    message.innerText= "Please start your guess ..."
    
})
