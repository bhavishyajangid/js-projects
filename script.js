let parentDiv = document.querySelector(".all-buttons")
let input = document.querySelector("#input")
let arr = [ 65 ,67  , 37 ,247 , 55 , 56 , 57 , 215 , 52 , 53 , 54 , 45 , 49 , 50 , 51 , 43 , 48,  77 , 46 , 61]
let num = 0

let recentvalue = ''
let symbol = ''

function rough(letter , clickedLetter){
     console.log(clickedLetter);
     if(clickedLetter === '='){
          recentvalue += ""
          
     }else{
          recentvalue += clickedLetter
     }

    
     

     
     
     
     if(clickedLetter === "×" ||  clickedLetter === "+" || clickedLetter === "÷" ||  clickedLetter === "%" ||  clickedLetter === "-" ||  clickedLetter === "." ){
          
          symbol = clickedLetter
          
     }
     
     console.log(recentvalue);

     input.value = recentvalue
       
}

function makingBtn(){
     for (let i = 0; i < arr.length; i++) {
          let button = document.createElement("button")
          button.textContent = String.fromCharCode(arr[i])
          parentDiv.appendChild(button)
          
          button.addEventListener("click" , function(e){
               
               return rough(e.target , String.fromCharCode(arr[i]))
          })
          
     }
     
     
     let allbtn = parentDiv.querySelectorAll("button")
     allbtn.forEach((btn , i , arr) => {
          btn.classList.add(`zero${num}`)
          num++
          })

          let equalBtn = parentDiv.querySelector(".zero19");

          equalBtn.addEventListener("click" , function(){
               console.log(symbol);
               let newnum =   recentvalue.split(symbol)
               newnum.forEach((e , i , arr)=>{
                 let num1 = parseInt(e)

                 if(symbol === "+"){
                    let result = num1 + num1
                    console.log(result);
                 }
               })
          })



   
   

}

makingBtn()



