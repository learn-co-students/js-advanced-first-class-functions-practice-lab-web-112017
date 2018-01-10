// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach( function(driver) {
    console.log(driver.name)
  });
}

function logDriversByHometown(drivers, location) {
  filtered_drivers = drivers.filter( driver => driver.hometown === location );
  filtered_drivers.forEach( driver => console.log(driver.name) )
}

const comparator = function (a, b) {
  return a.localeCompare(b);
};

function driversByRevenue(drivers) {
  return drivers.slice().sort(
    function(a,b) {
      return a.revenue > b.revenue
    }
  )
}

function driversByName(drivers) {
  return drivers.slice().sort(
    function(a,b) {
      return a.name.localeCompare(b.name)
    }
  )
}

function totalRevenue(drivers) {
  return drivers.reduce(
    function(total, amount) {
      return total + amount.revenue
    }, 0
  )
}

function averageRevenue(drivers) {
  return drivers.reduce(
    function(total, amount) {
      return total + amount.revenue
    }, 0
  ) / drivers.length
}
