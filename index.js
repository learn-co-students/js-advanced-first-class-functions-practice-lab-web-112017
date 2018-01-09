// Code your solution in this file!

function logAttrToConsole(attr) {
  return function (el, i, arr) {
    return console.log(el[attr])
  }
}

function filterByAttr(attr, value) {
  return function (driver) {
    return driver[attr] === value;
  }
}

function logDriverNames(drivers) {
  return drivers.forEach(logAttrToConsole("name"));
}

function logDriversByHometown(drivers, home) {
  return drivers.filter(filterByAttr("hometown", home)).forEach(logAttrToConsole("name"))
}

function driversByRevenue(drivers) {
  let new_array = [...drivers];
  return new_array.sort(function (a,b) {
    return a.revenue - b.revenue;
  })
}

function driversByName(drivers) {
  let new_array = [...drivers];
  return new_array.sort(function (a,b) {
    return a.name.localeCompare(b.name);
  })
}

function reduceDriverRevenue(agg, el, i, arr) {
    return agg + el.revenue;
}

function totalRevenue(drivers) {
  return drivers.reduce(reduceDriverRevenue, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
