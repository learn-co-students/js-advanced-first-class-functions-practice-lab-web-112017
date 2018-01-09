// Code your solution in this file!

function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log (driver.name)
  })
};

function logDriversByHometown(drivers,location){
  drivers.forEach(function(driver){
    if (driver.hometown === location){
      console.log(driver.name)
    }
  })
};

function driversByRevenue(drivers){
  return drivers.slice(0).sort(function(drv1,drv2){
    return drv1.revenue-drv2.revenue;
  });
};

function driversByName(drivers){
  // use object.assign here for clarity even though slice is faster
  return drivers.slice(0).sort(function(drv1,drv2){
    return (drv1.name).localeCompare(drv2.name)
  })
};


function totalRevenue(drivers){
  return drivers.reduce(function(sum,el){
    return sum + el.revenue
  }, 0)
}

function averageRevenue(drivers){
  return drivers.reduce(function(sum,el){
    return sum + el.revenue
  },0)/drivers.length
}
