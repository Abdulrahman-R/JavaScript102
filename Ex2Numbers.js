
// Math.ceil()
const number = 9.12
console.log(Math.ceil(number));
console.log(Math.ceil(-number));  
console.log("**********");  

//Math.floor()
console.log(Math.floor(number)); 
console.log(Math.floor(-number));
console.log("**********"); 

//Math.round()
console.log(Math.round(number));
console.log(Math.round(-number));
console.log(Math.round(number+ 0.4));
console.log("**********"); 

//Math.abs()
console.log(Math.abs(-number));

//Math Min & Max
const numbers = [1,2,3,4,5];
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));
console.log("**********"); 

//string to float
let str = '1.45';
let fnum = parseFloat(str);
console.log(fnum +1); 
console.log("**********"); 


//string to int
let inum = parseInt(str);
console.log(inum);
console.log("**********"); 

//removing fractions
let nfNum =  Math.trunc(fnum);
console.log(nfNum);
console.log("**********"); 

//Number.isInteger
console.log(Number.isInteger(inum));
console.log(Number.isInteger(fnum));
console.log("**********"); 

//isNaN();
console.log(isNaN('string'));
console.log(isNaN(inum));
console.log("**********"); 

//math.power
console.log(Math.pow(3,2));
console.log(3**2);

//Math.sqrt
console.log(Math.sqrt(4));
console.log("**********"); 

//Math.sign
console.log(Math.sign(3));
console.log(Math.sign(0));
console.log(Math.sign('a'));
console.log(Math.sign(-3));
console.log("**********"); 

//infinity
console.log(3/0);
console.log(-3/0);
console.log("**********"); 

//Math.random
console.log(Math.random(0,1));
console.log("**********"); 

//writing big numbers
console.log(123_763_34);
console.log("**********"); 


//casting to other number systems
let x = 105;
console.log(x.toString(2));
console.log(x.toString(8));
console.log(x.toString(10));
console.log(x.toString(16));
