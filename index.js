// Code your solution in this file!

const logDriverNames = function(arr){
  arr.forEach(function(el){
    console.log(el.name);
  });
}

const logDriversByHometown = function(arr, location){
  newArr = arr.filter(el => el.hometown === location)
  return logDriverNames(newArr);
}

const driversByRevenue = function(arr){
  let newArr = [...arr];
  newArr.sort(function(a, b){
    return a.revenue - b.revenue;
  });
  return newArr;
}

const driversByName = function(arr){
  let newArr = [...arr];
  newArr.sort((a,b) => a.name.localeCompare(b.name))
  return newArr;
}

const totalRevenue = function(arr){
  return arr.reduce(function(agg, el, i, arr){return agg + el.revenue}, 0)
}

const averageRevenue = function(arr){
  return totalRevenue(arr)/arr.length;
}
