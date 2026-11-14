//Selecting All Buttons
const one=document.querySelector("#one");
const two=document.querySelector("#two");
const three=document.querySelector("#three");
const four=document.querySelector("#four");
const five=document.querySelector("#five");
const six=document.querySelector("#six");
const seven=document.querySelector("#seven");
const eight=document.querySelector("#eight");
const nine=document.querySelector("#nine");

//Selecting Calculator Display
const textarea=document.querySelector("#text-area");

//Making Button Work
zero.addEventListener('click',()=>{
    textarea.textContent='0';
})
one.addEventListener('click',()=>{
    textarea.textContent='1';
})
two.addEventListener('click',()=>{
    textarea.textContent='2';
})
three.addEventListener('click',()=>{
    textarea.textContent='3';
})
four.addEventListener('click',()=>{
    textarea.textContent='4';
})
five.addEventListener('click',()=>{
    textarea.textContent='5';
})
six.addEventListener('click',()=>{
    textarea.textContent='6';
})
seven.addEventListener('click',()=>{
    textarea.textContent='7';
})
eight.addEventListener('click',()=>{
    textarea.textContent='8';
})
nine.addEventListener('click',()=>{
    textarea.textContent='9';
})