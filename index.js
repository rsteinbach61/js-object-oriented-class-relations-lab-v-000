
let store = {drivers: [], passengers: [], trips: []}

let driverID = 0

class Driver {
  constructor(name){
    this.id = ++driverID
    this.name = name
    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengers(){
    return this.trips().map(trip => {return trip.passenger()})
}
}


let passengerID = 0;

class Passenger {
  constructor(name){
    this.id = ++passengerID
    this.name = name

    store.passengers.push(this)
  }

  drivers(){
    return this.trips().map(trip => {return trip.driver()})
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }
}



let tripId = 0
class Trip {
  constructor(driver, passenger){
    this.id = ++tripId
    if (passenger){
      this.passengerId = passenger.id
    }

    if (driver){
      this.driverId = driver.id
    }
    store.trips.push(this)
  }

  passenger(){
    return store.passengers.find(function(passenger){
      return passenger.id === this.passengerId
    }.bind(this))
  }

  driver(){
    return store.drivers.find(function(driver){
      return driver.id === this.driverId
    }.bind(this))
  }
}
