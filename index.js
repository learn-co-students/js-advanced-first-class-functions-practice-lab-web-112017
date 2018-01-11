// Code your solution in this file!

function logDriverNames(driver) {
  for (const d of driver) {
    console.log(d['name'])
  }
}


function logDriversByHometown(drivers, town) {
	logDriverNames(drivers.filter(function(d) {
    return d['hometown'] === town;
  }))
}

function driversByRevenue(drivers) {
  return drivers.slice(0).sort(function(a, b) {
    return a['revenue'] - b['revenue']
  })
}

function driversByName(drivers) {
  return drivers.slice(0).sort(function(a,b) {
    return a['name'].localeCompare(b['name']);
  })
}

const totalRevenue = function(drivers) {
	return drivers.reduce(function(total, element) {
  return total + element['revenue'];
  }, 0)
}

const averageRevenue = function(drivers) {
  return drivers.reduce(function(total, element) {
    return (total += element['revenue']);
  },0)/drivers.length
}
