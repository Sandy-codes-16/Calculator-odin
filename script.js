//Selecting All Buttons
const zero=document.querySelector("#zero")
const one=document.querySelector("#one");
const two=document.querySelector("#two");
const three=document.querySelector("#three");
const four=document.querySelector("#four");
const five=document.querySelector("#five");
const six=document.querySelector("#six");
const seven=document.querySelector("#seven");
const eight=document.querySelector("#eight");
const nine=document.querySelector("#nine");
const allclear=document.querySelector("#all-clear")
const plus=document.querySelector("#plus");
const minus=document.querySelector("#minus");
const multiply=document.querySelector("#multiply");
const divide=document.querySelector("#divide");
const equals=document.querySelector("#equals")


//Selecting Calculator Display
const textarea=document.querySelector("#text-area");


//Declaring Some Varibles
let calculate=0;
let isequalpressed=false;
let prevoperation='';


//Making Button Work
zero.addEventListener('click',()=>{
    if (textarea.textContent=='0'){
        textarea.textContent='';
    }
    textarea.textContent+='0';
    
})
one.addEventListener('click',()=>{
    if (textarea.textContent=='0'){
        textarea.textContent='';
    }
    textarea.textContent+='1';
    
})
two.addEventListener('click',()=>{
    if (textarea.textContent=='0'){
        textarea.textContent='';
    }
    textarea.textContent+='2';
    
})

three.addEventListener('click',()=>{
    if (textarea.textContent=='0'){
        textarea.textContent='';
    }
    textarea.textContent+='3';
    
})

four.addEventListener('click',()=>{
    if (textarea.textContent=='0'){
        textarea.textContent='';
    }
   textarea.textContent+='4';
    
})
five.addEventListener('click',()=>{
    if (textarea.textContent=='0'){
        textarea.textContent='';
    }
    textarea.textContent+='5';
    
})
six.addEventListener('click',()=>{
    if (textarea.textContent=='0'){
        textarea.textContent='';
    }
    textarea.textContent+='6';
    
})
seven.addEventListener('click',()=>{
    if (textarea.textContent=='0'){
        textarea.textContent='';
    }
    textarea.textContent+='7';
    
})
eight.addEventListener('click',()=>{
    if (textarea.textContent=='0'){
        textarea.textContent='';
    }
    textarea.textContent+='8';
    
})
nine.addEventListener('click',()=>{
    if (textarea.textContent=='0'){
        textarea.textContent='';
    }
    textarea.textContent+='9';
    
})

allclear.addEventListener('click',()=>{
    textarea.textContent='0';
    prevoperation='';
    isequalpressed='false';
    calculate='0';
   
})


//Making Mathematical Operation work
plus.addEventListener('click',()=>{
    if (prevoperation=='-'){
        calculate-=parseInt(textarea.textContent)
    }
    else if(prevoperation=='*'){
        calculate*=parseInt(textarea.textContent);
    }
    else if(prevoperation=="/"){
        calculate/=parseInt(textarea.textContent);
    }
    else if (!isequalpressed && calculate!=0){
    calculate+=parseInt(textarea.textContent);
    }
    else{
        calculate=parseInt(textarea.textContent);
    }
    textarea.textContent='0';
    isequalpressed=false;
    prevoperation='+';
})
minus.addEventListener('click',()=>{
    if (prevoperation=='+'){
        calculate+=parseInt(textarea.textContent)
    }
    else if(prevoperation=='*'){
        calculate*=parseInt(textarea.textContent);
    }
    else if(prevoperation=="/"){
        calculate/=parseInt(textarea.textContent);
    }
    else if (!isequalpressed && calculate!=0){
    calculate-=parseInt(textarea.textContent);
    }
    else{
        calculate=parseInt(textarea.textContent);
    }
    textarea.textContent='0';
    isequalpressed=false;
    prevoperation='-';
})


multiply.addEventListener('click',()=>{
    if (prevoperation=='+'){
        calculate+=parseInt(textarea.textContent)
    }
    else if(prevoperation=='-'){
        calculate-=parseInt(textarea.textContent);
    }
    else if(prevoperation=="/"){
        calculate/=parseInt(textarea.textContent);
    }
    else if (!isequalpressed && calculate!=0){
    calculate*=parseInt(textarea.textContent);
    }
    else{
        calculate=parseInt(textarea.textContent);
    }
    textarea.textContent='0';
    isequalpressed=false;
    prevoperation='*';
})


divide.addEventListener('click',()=>{
    if (prevoperation=='+'){
        calculate+=parseInt(textarea.textContent)
    }
    else if(prevoperation=='-'){
        calculate-=parseInt(textarea.textContent);
    }
    else if(prevoperation=="*"){
        calculate*=parseInt(textarea.textContent);
    }
    else if (!isequalpressed && calculate!=0){
    calculate/=parseInt(textarea.textContent);
    }
    else{
        calculate=parseInt(textarea.textContent);
    }
    textarea.textContent='0';
    isequalpressed=false;
    prevoperation='/';
})



equals.addEventListener('click',()=>{
    if (prevoperation==''){
        alert("Please Choose a Operator To Perform Calculation")
    }
    else if (prevoperation=='+'){
        calculate+=parseInt(textarea.textContent);
    }
    else if (prevoperation=='-'){
        calculate-=parseInt(textarea.textContent);
    }
    else if (prevoperation=="*"){
        calculate*=parseInt(textarea.textContent)
    }
    else{
        calculate/=parseInt(textarea.textContent);
    }
    textarea.textContent=calculate;
    isequalpressed=true;
    prevoperation='';
}
)