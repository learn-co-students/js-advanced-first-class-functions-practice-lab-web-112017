// Code your solution in this file!
const logDriverNames = function(object_array) {
  object_array.forEach( function(i) {
    console.log(i.name);
  });
};

const logDriversByHometown = function(object_array, location) {
  object_array.filter (function (person) {
    return person.hometown === location
  }).forEach ( function(i) {
    console.log(i.name);
  });
};

const driversByRevenue = function (object_array) {
  newArr = object_array.slice(0)
  newArr.sort(function (a, b) {
     return a.revenue - b.revenue;
  });
  return newArr
};


const driversByName = function (object_array) {
  newArr = object_array.slice(0)
  newArr.sort(function (a, b) {
     return a.name.localeCompare(b.name);
  });
  return newArr
};

const totalRevenue = function (object_array) {
  const addRev = function (agg, el, i, arr) {
     return agg += el.revenue;
  };
  return object_array.reduce(addRev, 0);
};

const averageRevenue = function (object_array) {
  return totalRevenue(object_array) / object_array.length;
}
