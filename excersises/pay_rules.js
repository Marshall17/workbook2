var workHr = 20;
var payRate = 12.50;

if (workHr < 40) {console.log(payRate * workHr);

} else { console.log(payRate * 1.5 * overTimeWork + payRate * (workHr - overTimeWork));

}

var workHr = 40;
var payRate = 25.00;

if (workHr <= 40) {console.log(payRate * workHr);

} else { console.log(payRate * 1.5 * overTimeWork + payRate * (workHr - overTimeWork));

}

var workHr = 45;
var payRate = 17.3;
var overTimeWork = workHr % 40;

if (workHr <= 40) {
  console.log(payRate * workHr);
} else {
  console.log(payRate * 1.5 * overTimeWork + payRate * (workHr - overTimeWork));
}
