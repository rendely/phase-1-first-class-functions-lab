const returnFirstTwoDrivers = (driverNames) => driverNames.slice(0,2);

const returnLastTwoDrivers = (driverNames) => driverNames.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier){
  return (fare) => fareMultiplier * fare
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driverNames, getDriverNames){
  return getDriverNames(driverNames)
}