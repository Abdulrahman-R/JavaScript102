
function sum(firstNum,secondNum){
     return firstNum + secondNum;
}

function sub(firstNum,secondNum){
    return firstNum - secondNum;
}

function mult(firstNum,secondNum){
    return firstNum * secondNum;
}

function div(firstNum,secondNum){
    return firstNum / secondNum;
}

//sending a function to another ------> callback function 
function opreation(firstNum,secondNum ,opCallback){
    return `[${opCallback(firstNum,secondNum)}]`;
}


 console.log(opreation(4,2,div));

 //defining a function inside the opreation method 
 console.log(opreation(5,2,function(fnum,snum){
    return fnum / snum;
 }))


 //internal Arrow Functions
 console.log(opreation(10,2,(fnum,snum) =>  fnum / snum))

  //external Arrow Functions
const divi =(fnum,snum) =>  fnum / snum;
console.log(opreation(20,2,div))

//callback function to format texts

function format(message,formatCallback){
    return formatCallback(message);
}

function Htmlformat(message){
    return `<div>${message}</div>`
}

function jasonformat(message){
    return `{"message": "${message}"}`
}

console.log(format("Hello World",Htmlformat))
console.log(format("Hello World",jasonformat))