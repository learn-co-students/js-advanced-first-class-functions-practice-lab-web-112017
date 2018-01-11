// Code your solution in this file!
function logDriverNames(drivers){
  for (d of drivers) {
    console.log(d.name)
  }
}

function logDriversByHometown(drivers, town){
  for (d of drivers) {
    if (d.hometown == town) {
      console.log(d.name)
    }
  }
}

function driversByRevenue(drivers){
  return drivers.slice(0).sort(function(a, b){
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers){
  return drivers.slice(0).sort(function(a, b){
    return a.name.localeCompare(b.name)
  });
}

function totalRevenue(drivers){
  return drivers.reduce(function(total, driver){
    return total + driver.revenue
  }, 0);
}

function averageRevenue(drivers){
  sum = drivers.reduce(function(total, driver){
    return total + driver.revenue
  }, 0);
  return sum / drivers.length;
}
