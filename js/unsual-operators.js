var count;
count = 0;
// count = count + 1; Same line as count++
var updatedCount = count++;
console.log(updatedCount);
console.log(count);
count--;
console.log(count);

var onHand = 10; 
var qtyRecrbirf = 6;
// onHand = onHand + qtyRecrbirf same thing as bottom one
onHand += qtyRecrbirf;
console.log(onHand);

var x = "123";
var y = "456";
var z = x+y;
console.log(z);

//pasreInt
var a = '12.32';
var b = parseInt(a);
console.log(a,b);
var dateTypeOfAVariable = typeof(a);
console.log(dateTypeOfAVariable);

var dateTypeOfBVariable = typeof(b);
console.log(dateTypeOfBVariable);
console.log(typeof(b));

//parsefloat
var d = '12.32';
var c = parseFloat(d);
console.log(d,c);
var dateTypeOfDVariable = typeof(d);
console.log(dateTypeOfDVariable);

var dateTypeOfCVariable = typeof(c);
console.log(dateTypeOfCVariable);
console.log(typeof(c));
