var numPeople = 38

var van = 250 * 3

var splitPerPerson = van/numPeople
var totalCash = Math.ceil(splitPerPerson)
var leftOver = (totalCash - splitPerPerson) * 38

console.log("Your Van total is " + van);
console.log(" Your split is " + totalCash);
console.log("Left over cash is " + leftOver );



