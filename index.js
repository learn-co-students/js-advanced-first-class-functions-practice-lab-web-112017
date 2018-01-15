// Code your solution in this file!
const logDriverNames = function(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name)
  })
}

const logDriversByHometown = function(drivers,location) {
  let matches = drivers.filter(function (driver) {return driver.hometown === location})
  matches.forEach(function (match) {
    console.log(match.name)
  })
}
const revSorter = function (driver1, driver2) {
  return driver1.revenue - driver2.revenue;
}
const driversByRevenue = function(drivers) {
  return drivers.slice().sort(revSorter)
}
const nameSort = function(driver1,driver2) {
  return driver1.name.localeCompare(driver2.name)
}
const driversByName = function(drivers) {
  return drivers.slice().sort(nameSort)
}
const totRev = (acc, val) => acc + val.revenue
const totalRevenue = function(drivers) {
  return drivers.reduce(totRev, 0)
}
const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length
}
