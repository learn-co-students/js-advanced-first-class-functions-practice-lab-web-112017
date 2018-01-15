// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach((driver) => console.log(driver.name))
}

function logDriversByHometown(drivers, hometown) {
  logDriverNames(drivers.filter((driver) => driver.hometown === hometown))
}

function driversByRevenue(drivers) {
  return drivers.slice().sort((a,b) => a.revenue - b.revenue)
}

const driversByName = ((drivers) => drivers.slice().sort((a,b) => a.name.localeCompare(b.name)))

function totalRevenue(drivers) {
  return drivers.reduce(((rev,driver) => rev + driver.revenue),0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length
}
