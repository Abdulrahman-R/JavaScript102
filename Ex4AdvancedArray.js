//for each method
const colors = ['purble', 'vaiolet','blue','purble']
colors.forEach(function(currentValue,index,array){
    console.log(index,currentValue)
})

//some method
const ages = [11,13,26,15,12]
const hasAdult = ages.some(function(elm){
    return elm >=18
})

console.log(hasAdult)

//Every method
console.log(ages.every(function(elm){ elm>=18}))

//includes 
console.log(colors.includes('purble'))
console.log(colors.includes('purble',1))
console.log(colors.includes('purble',-3))
console.log(colors.includes('green'))

//indexOf
//from left to right (first occurance)
console.log(colors.indexOf('purble'))
console.log(colors.indexOf('purble',1))
console.log(colors.indexOf('purble',-4))
console.log(colors.indexOf('white'))

//lastIndexOf
//from right to left (last occurance)
console.log(colors.lastIndexOf('purble'))
console.log(colors.lastIndexOf('purble',2))
console.log(colors.lastIndexOf('purble'-3))


//findIndex ----> return index
//ages = [11,13,26,15,12]
console.log(ages.findIndex(function(elm){
    return elm >=18
}))
console.log(ages.findIndex(function(elm){
    return elm >=30
}))

//find ---> return elemnt
console.log(ages.find(function(elm){
    return elm >=18
}))
console.log(ages.find(function(elm){
    return elm >=30
}))

//filter 
let nums = [1,2,3,4,5,6,7,8,9]
let evenNums = nums.filter(function(elm){
    return elm % 2 == 0
})

console.log(evenNums)

//concat
let oddNums = [1,3,5,7,9]

let numbers = evenNums.concat()
console.log(numbers)
numbers = evenNums.concat(oddNums,10,20,30,40,50)
console.log(numbers)


//slice
let tensNums =  numbers.slice(2)
console.log(tensNums)
tensNums =  numbers.slice()
console.log(tensNums)
tensNums =  numbers.slice(9,14)
console.log(tensNums)

//splice
const coluors = ['blue', 'red','green','yellow']
coluors.splice(2)
console.log(coluors)
coluors.splice(0,1)
console.log(coluors)
coluors.splice(0,1,'black')
console.log(coluors)
coluors.splice(1,0,'white')
console.log(coluors)

//join---> turns the array into a string 
let coloursAsString = colors.join()
console.log(coloursAsString)
coloursAsString = colors.join('-')
console.log(coloursAsString)

//sort--->ترتب المصفوفة تصاعدياً

let unorderdNum=[6,5,7,3,2,8,9,1]
console.log(unorderdNum.sort())

let couluors = ['blue','white' ,'red','green','yellow']
console.log(couluors.sort())

//reverse----> تعكس ترتيب المصفوفة
//nums = [1,2,3,4,5,6,7,8,9]
console.log(nums.reverse())
console.log(couluors.reverse())

//map----> ترجعلك مصفوفة جديدة بعد التعديلات اللي سويتها بالمصفوفة القديمة
const squaredNum= nums.map(function(elem){return elem**2})
console.log(squaredNum)

//split
let str = 'welcome to java script'
let strAsArray = str.split(' ')
console.log(strAsArray)
strAsArray = str.split(' ',2)
console.log(strAsArray)
strAsArray = str.split()
console.log(strAsArray)

//reduce---> تجمعلك عناصر المصفوفة
let xOfNums = [1,2,3,4,5]
let total = xOfNums.reduce(function(accumulator,currentValue){
    return accumulator + currentValue
})
console.log(total)
total= xOfNums.reduce(function(accumulator,currentValue){
    return accumulator + currentValue
},50)
console.log(total)