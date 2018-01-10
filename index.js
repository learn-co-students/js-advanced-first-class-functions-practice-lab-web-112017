const logDriverNames = function(drivers) {
  drivers.forEach(function(element) {
    console.log(element['name']);
  });
}

const logDriversByHometown = function(drivers, location) {
  drivers.forEach(function(element) {
    if (element['hometown'] === location) {
      console.log(element['name']);
    }
  })
}

const numberSorter = function (num1, num2) {
  return num1 - num2;
};

const driversByRevenue = function(drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
}

const driversByName = function(drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  });
}

const totalRevenue = function(drivers) {
  return drivers.reduce(function(sum, driver) {
    return driver.revenue + sum;
  }, 0);
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
