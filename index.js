/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let  inputNo = document.getElementById("input-no")
let buttonBtn = document.getElementById("button-btn")
let paragraph = document.getElementById("para")
let paragraphone = document.getElementById("paraone")
let paragraphtwo = document.getElementById("paratwo")



 const  meter = 3.281
 const  liter = 0.264 
 const  kilogram = 2.204
 

 buttonBtn.addEventListener("click", function(){
    //console.log(inputNo.value)
    paragraph.textContent = inputNo.value + " meter  = " + ( inputNo.value * meter).toFixed(2) 
    +" |  " + inputNo.value +" feet = "+(inputNo.value / meter).toFixed(2)


    paragraphone.textContent = inputNo.value + " liter  = " +  (inputNo.value * liter).toFixed(2)
    +" |  " + inputNo.value +" Gallons = "+(inputNo.value / liter).toFixed(2)
    

    paragraphtwo.textContent = inputNo.value + " Kilograms = " + ( inputNo.value * kilogram).toFixed(2)
    +" |  " + inputNo.value +" pounds= "+(inputNo.value / kilogram).toFixed(2)
    


 })