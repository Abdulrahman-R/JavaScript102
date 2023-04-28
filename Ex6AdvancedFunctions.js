//call function---> تطبق دالة معينة على كائن معين

//object
let user1 = {

    firstName: 'Abdulrahman',
    lastName: 'Alrahili'
}

let user2 = {

    firstName: 'Abdullah',
    lastName: 'Alrahili'
}

let printFullName =  function(age, Gender){
    console.log('Hello, '+ this.firstName+' '+this.lastName+ ' ,Your age is: '+age + ' , Gender: ' + Gender)
}
printFullName.call(user1,'24','male');
printFullName.call(user2,'??','male');

// Apply function almost sam as call function the arguments are passed as an array

printFullName.apply(user1,['24','male']);
printFullName.apply(user2,['??','male']);


//Bind function---> return a method that is bond with an object
let printUser1FullName =  printFullName.bind(user1)
printUser1FullName('33','male')

//Arrow Functions---> shourcut to make a method

//(p1,p2) => {return expression}
let sum1 = (num1,num2) => {
    return num1+num2;
}
let sum2 = (num1,num2) => {return num1+num2}

//(p1,p2) => expression
//if the experssion is on line
let sum3 = (num1,num2) => num1+num2

//(p1,p2) => {statements}
let sum4 = (num1,num2) => {let result = num1+num2}

// if no parameters
//() => .......
let sum5 = () => {let result = 1+2}

//if one parameter
//p => .......
let sum6 = num => {let result = num+1}


//IIFEs (Immediately invoked function expression)---> invokes the method once it has ben made

 (function(n){
    console.log(n)
})('Abulrahman')


//functions in objects
let obj ={
    title: 'How to write a function in an object',

    //method1
    //key: value 
    //name: function(){....}
    function1: function(){
        return console.log('First function')
    },
    //method2
    //key: value 
    //name: arrow function
    function2: ()=>{
        return console.log('Second function')
    },
    //method3
    //name(){.....} 
    function3(){
        return console.log('Third function')
    }
}
obj.function1()
obj.function2()
obj.function3()

//dealing with arguemnt passing errors (تمرير Arguments أقل أو أكثر من المطلوب)

function printNums(arg1,arg2){
    console.log(arg1, arg2)
}

//if number of args in the call > number of args in method diffm ,ignore the excessive args
printNums(1,2,3)

//if number of args in the call < number of args in method diffm ,mark the missing args as undefined

printNums(1)

//default argument
function printNumbers(arg1 = 0,arg2 = 0){
    console.log(arg1, arg2)
}

printNumbers()
printNumbers(1)

//Rest Parameter---> saves the excessive args in an array
function printNumbers1(arg1 = 0,arg2 = 0,...args){
    console.log(arg1, arg2,args)
}

printNumbers1(1,2,3,4,5,6)

//Spread Operator
let letters = ['a','b','c']

let showLettrs = function(letter1,letter2,letter3){
    console.log(letter1,letter2,letter3)
}

showLettrs(...letters)


