// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  const arr = Object.assign([], drivers)
  arr.sort(function(driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
  return arr
}

function driversByName(drivers) {
  const arr = Object.assign([], drivers)
  arr.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return arr
}

function totalRevenue(drivers) {
  const reduceDriverRevenue = function (agg, driver, i, arr) {
    return agg + driver.revenue
  }

  return drivers.reduce(reduceDriverRevenue, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length
}
