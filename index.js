//first set
function findMatching(drivers, string) {
   return drivers.filter(function(driver) {
      return driver.toLowerCase() === string.toLowerCase()
   })
}
//second set
// function findMatching(drivers, string) {
//     return drivers.filter( driver =>
//       driver.toLowerCase() === string.toLowerCase()
//     )
// }

// const findMatching = function(drivers, string) {
//     return drivers.filter(function(driver) {
//       return driver.toLowerCase() === string.toLowerCase()
//     })
// }

function fuzzyMatch(drivers, string) {
    return drivers.filter(function(driver) {
        return driver[0] === string[0];
    })
}

// function fuzzyMatch(source, testString) {
//     return source.filter( possibleMatch =>
//       possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
//     )
//   }

function matchName(drivers, string) {
    return drivers.filter(function (driver) {
        return driver.name === string;
    })
}

// function matchName(source, soughtName) {
//     return source.filter( record => record.name === soughtName)
//   }