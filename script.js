let parentDiv = document.querySelector(".all-buttons");
let input = document.querySelector("#input");
let arr = [
     65, 67, 37, 247, 55, 56, 57, 215, 52, 53, 54, 45, 49, 50, 51, 43, 48, 77, 46,
     61,
];
let num = 0;

let recentvalue = "";
let symbol = "";
// function to check the clicked words are number or not 
function rough(letter, clickedLetter) {
     if (
          clickedLetter === "=" ||
          clickedLetter === "A" ||
          clickedLetter === "C" ||
          clickedLetter === "M"
     ) {
          recentvalue += "";
          // symbol = "";
     } else {
          recentvalue += clickedLetter;
     }

     if (
          clickedLetter === "×" ||
          clickedLetter === "+" ||
          clickedLetter === "÷" ||
          clickedLetter === "%" ||
          clickedLetter === "-" ||
          clickedLetter === "."
     ) {
          symbol = clickedLetter;
     }

     input.value = recentvalue;
}

function makingBtn() {
     // make all the button using ascii code 
     for (let i = 0; i < arr.length; i++) {
          let button = document.createElement("button");
          button.textContent = String.fromCharCode(arr[i]);
          parentDiv.appendChild(button);

          button.addEventListener("click", function (e) {
               return rough(e.target, String.fromCharCode(arr[i]));
          });
     }
      // all class to all the buttons
     let allbtn = parentDiv.querySelectorAll("button");
     allbtn.forEach((btn, i, arr) => {
          btn.classList.add(`zero${num}`);
          num++;
     });

     // target equal btn and add its funtionality 
     let equalBtn = parentDiv.querySelector(".zero19");
     equalBtn.addEventListener("click", function () {
          
          let newnum = recentvalue.split(/[- + % × ÷]/);
          console.log(newnum);
          newnum.forEach((e, i, arr) => {
               let num1 = parseInt(arr[0]);
               let num2 = parseInt(arr[1]);
               console.log(num1 , num2);
               if (symbol === "+") {
                    let result = num1 + num2;
                    console.log(result);
                    input.value = result;
                    recentvalue = result
               }else if(symbol === "-"){
                    let result = num1 - num2;
                    input.value = result;
                    recentvalue = result
               }else if(symbol === "%"){
                    let result = num1 % num2;
                    input.value = result;
                    recentvalue = result
               }else if(symbol === "×"){
                    let result = num1 * num2;
                    input.value = result;
                    recentvalue = result
               }else if(symbol === "÷"){
                    let result = num1 / num2;
                    input.value = result;
                    recentvalue = result
               }
          });
     });
}

makingBtn();
  
//make clear all the digit btn from the input 
function clearAllData() {
     let clearBtn = document.querySelector(".zero0");
     clearBtn.addEventListener("click", function () {
          recentvalue = "";
          input.value = "";
     });
}

clearAllData();


//make clear only one digit btn  from the input 
function clearSingleData() {
     let clear = document.querySelector(".zero1");
     clear.addEventListener("click", function () {
          recentvalue = recentvalue.slice(0, -1);
     });
}

clearSingleData();
