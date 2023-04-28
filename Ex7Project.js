//classes
class vehicle{
    
    constructor(name, Manufacturer,ID){
        
        this.name = name
        this.Manufacturer = Manufacturer
        this.ID = ID
    }
}

class Car extends vehicle{
    
    static carIDs =[]
    constructor(name, Manufacturer,ID,carType){
        super(name,Manufacturer,ID)
        this.carType = carType
        Car.carIDs.push(ID)
        
    }

} 

class Plane extends vehicle{
    
    static planeIDs =[]
    constructor(name, Manufacturer,ID,planeType){
        super(name,Manufacturer,ID)
        this.planeType = planeType
        Plane.planeIDs.push(ID)
    }
} 





class Employee {

    constructor(name, DOB,ID){
        
        this.name = name
        this.DOB = DOB
        this.ID = ID
    }
}

class Driver extends Employee {
        static driverIDs=[]
    constructor(name, DOB,ID,licenseID){
        super(name,DOB,ID)
        this.licenseID = licenseID
        Driver.driverIDs.push(ID)
    }
}

class Pilot extends Employee {
    static pioltIDs=[]
    constructor(name, DOB,ID,licenseID){
        super(name,DOB,ID)
        this.licenseID = licenseID
        Pilot.pioltIDs.push(ID)
    }
}

class Reservation {

    static reservation =[]
    constructor(resDate,employeeId, vehiclesId,resID){
      this.reservation_Date =resDate
      this.employee_ID =employeeId
      this.vehicles_ID =vehiclesId
      this.reservation_ID =resID
    }


}

function CheckCompatibility(employeeId,vehiclesId){
            //let CarInstances = ins
            if(Driver.driverIDs.includes(employeeId) & Car.carIDs.includes(vehiclesId)){
                let date =  new Date()
                let resDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
                let resId =  Math.round(Math.random() * (999-100) + 100).toString()
                Reservation.reservation.push(new Reservation(resDate,employeeId,vehiclesId,resId))
            }else if(Pilot.pioltIDs.includes(employeeId) == true & Plane.planeIDs.includes(vehiclesId) ==true)
            {
                let date =  new Date()
                let resDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
                let resId =  Math.round(Math.random() * (999-100) + 100).toString()
                Reservation.reservation.push(new Reservation(resDate,employeeId,vehiclesId,resId))
            }else{
                console.log(`The employee with the ID ${employeeId} is not qulifed to ride the vechicle with the ID ${vehiclesId}.`)
            }

}


const car1 = new Car('camry','toyota','350','electric')
//console.log(car1);
const car2 = new Car('corella','toyota','433','electric')
//console.log(car2);
const car3 = new Car('optima','kia','323','gas')
//console.log(car3);


const plane1 = new Plane('boeing 787-9',' Boeing','723','gas')
//console.log(plane1);
const plane2 = new Plane('boeing 707-2',' Boeing','667','gas')
//console.log(plane2);

const pilot1 = new Pilot('Abdulrahman','1977-2-23','514','128974') 
//console.log(pilot1);
const driver1 = new Driver('Abdullah','1978-9-24','207','827374')
//console.log(driver1);

//testing use cases
CheckCompatibility(driver1.ID,car1.ID)
CheckCompatibility(pilot1.ID,plane1.ID)
CheckCompatibility(plane2.ID,car3.ID)
console.log('Reservations List:\n') 
//printing the Reservations
console.log( Reservation.reservation.map(function(elem){
    return elem
}))