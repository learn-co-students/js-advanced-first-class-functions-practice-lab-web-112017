// Code your solution in this file!

function logDriverNames(arr) {
  return arr.forEach(function (el) {
    return console.log(el.name)
  })
}

function logDriversByHometown(arr, location) {
  return arr.forEach( function (driver) {
    if (driver.hometown === location) {
      return console.log(driver.name)
    }
  })
}

function driversByRevenue (arr) {
  const newArr = [...arr];
  return newArr.sort( function (drivera, driverb) {
    return drivera.revenue - driverb.revenue;
  })
  return newArr;
}

function driversByName (arr) {
  const newArr = [...arr];
  return newArr.sort( function (drivera, driverb) {
    return drivera.name.localeCompare(driverb.name);
  })
  return newArr;
}

function totalRevenue (arr) {
  return arr.reduce(function (total, driver) {
    return total + driver.revenue;
  }, 0);
}

function averageRevenue (arr) {
  return totalRevenue(arr)/arr.length;
}
