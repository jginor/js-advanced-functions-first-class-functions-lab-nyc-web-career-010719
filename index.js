// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(drivers.length - 2,drivers.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (integer){
  return function (fare) {
    return fare * integer
  }
}

const fareDoubler = createFareMultiplier(2)


const fareTripler = createFareMultiplier(3)


function fetchSpecifiedDrivers(arrayOfDrivers, afunction){
  return afunction(arrayOfDrivers)
}
