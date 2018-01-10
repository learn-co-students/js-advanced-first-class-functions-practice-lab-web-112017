// Code your solution in this file!
function logDriverNames(drivers) {
  for (const driver of drivers) {
    console.log(driver['name'])
  };
};

function logDriversByHometown(drivers, location) {
  for (const driver of drivers) {
    if (driver['hometown'] === location) {
      console.log(driver['name'])
    };
  };
};

function driversByRevenue(drivers) {
  let driversCopy = drivers.slice()
  return driversCopy.sort(function (a, b) {
    if (a.revenue < b.revenue)
      return -1;
    if (a.revenue > b.revenue)
      return 1;
    return 0;
  });
};

function driversByName(drivers) {
  let driversCopy = drivers.slice()
  return driversCopy.sort(function (a, b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  });
};

function totalRevenue(drivers) {
  return drivers.reduce(function (sum, driver) {
    return driver.revenue + sum;
  }, 0)
};

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
};
