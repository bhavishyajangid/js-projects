let input = document.getElementsByTagName("input");
let buttons = document.querySelectorAll("button")

buttons.forEach((Element , i)=>{
       Element.addEventListener("click" , function(e){
        console.log(e.target , i);
       })
})




