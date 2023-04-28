//making an object
const car ={
    //attributes
    name:'camry',
    color:'white',
    currentSpeed:0,
    //methods
    move: function(speed){
        this.currentSpeed = speed
        return `The ${this.name} is moving at speed of ${this.currentSpeed}km per hour`
    },
    stop: function(){
        this.currentSpeed = 0
         return `The ${this.name} stopped`
        
    }
}


//calss

class Car{
    //static attribute
    static numOfCars =0
    #currentSpeed
    constructor(name, color,currentSpeed){
        //adding attributes to the class
        this.name = name
        this.color = color
        this.#currentSpeed = currentSpeed
    }

    //adding methods to the class
    move (speed){
        Car.incrementNumOfCars()
        this.#currentSpeed = speed
        return `The ${this.name} is moving at speed of ${this.#currentSpeed}km per hour`
    }

    stop(){
        this.#currentSpeed = 0
         return `The ${this.name} stopped`
        
    }

    static incrementNumOfCars(){
        Car.numOfCars++
    }
}

const car1 = new Car('camry','black',0)
const car2 = new Car('corella','blue',0)
console.log(car1)
console.log(car2)
console.log(car1.move(100))
console.log(car2.move(120))
console.log(Car.numOfCars)


//using object's attributes and methods
console.log(car.name)

//inheritance
class Animal{
    constructor(name, color){
        //adding attributes to the class
        this.name = name
        this.color = color
        this.Speed = 0
    }

    run(speed){
        this.speed = speed
        return `${this.name} runs with speed ${this.speed}`
    }
    
    makeSound(){
        return 'sound...'
    }

}

class Cat extends Animal{
    //overridden
    makeSound(){
        return 'mew...'
    }
}

class Fox extends Animal {
    //overridden
    makeSound(){
        return 'bark...'
    }
}

const cat = new Cat('fatCat','gray');
console.log(cat)
console.log(cat.makeSound())

const fox = new Fox('fatFox','white');
console.log(fox)
console.log(fox.makeSound())
