// Code your solution in this file!
function logDriverNames(arr) {
  for (const el of arr) {
    console.log(el.name)
  }
}

function logDriversByHometown(arr, town) {
  for (const el of arr) {
    if (el.hometown === town) {
      console.log(el.name)
    }
  }
}

function driversByRevenue(arr) {
  let sortedArr = arr.slice(0)
  return sortedArr.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(arr) {
  let sortedArr = arr.slice(0);
  return sortedArr.sort(function (a,b) {
    return a.name.localeCompare(b.name);
  })
}

function totalRevenue(arr) {
  return arr.reduce((acc, cur) => acc + cur.revenue, 0)
}

function averageRevenue(arr) {
  const total = totalRevenue(arr);
  return total/arr.length
}
