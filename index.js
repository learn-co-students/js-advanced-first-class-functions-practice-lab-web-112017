const logDriverNames = function(drivers) {
  const arr = drivers.forEach(function(driver) {
    console.log(driver.name);
  })
  return arr;
}

// — Receives an array of driver objects and logs the name attribute of each driver to the console.
const logDriversByHometown = function(drivers, location) {
  const arr = drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
  return arr;
}
// — Receives an array of driver objects as the first argument and a location as the second argument. The function logs to the console the name attribute of each driver whose hometown matches the string passed in as the 'location' argument.
const driversByRevenue = function(drivers) {
  const driversCopy = drivers.slice().sort(function(a, b) {
    return a.revenue - b.revenue;
  });
  return driversCopy;
}; 
// — Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute from lowest to highest.
const driversByName = function(drivers) {
  const arr = drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return arr;
}

// — Receives an array of driver objects and returns a new array of driver objects sorted by their name attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.

const totalRevenue = function(drivers) {
  return drivers.reduce(function(agg, driver) {
    return agg + driver.revenue;
  }, 0);
}

// const reduceProductPrices = function (agg, el, i, arr) {
//   return agg + el.price;
// };
 
// products.reduce(reduceProductPrices, 0);

// — Receives an array of driver objects and returns the sum of the revenue earned by each driver.

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
} 

// — Receives an array of driver objects and returns the average revenue earned by each driver.
