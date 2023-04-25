var rule72 = 72
var intrestRate = 8
var savingsAccount = 1000

var timeToDouble = rule72 / intrestRate
var growthPerYear =  savingsAccount/timeToDouble
var totalSaving = timeToDouble * growthPerYear + savingsAccount

console.log(" Your total for doubling your investment in years is " + timeToDouble);
console.log(" Your saving account will be " + totalSaving);
