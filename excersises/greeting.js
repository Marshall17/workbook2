var timeGreeting = 94;

if (timeGreeting >= 24 || timeGreeting < 0) { console.log(" hour must be between 1-23"
);
return;
}


if (timeGreeting < 10) {
  console.log(" Good morning");
} else if (timeGreeting > 10 && timeGreeting < 17) {
  console.log("Good day");
} else if (timeGreeting > 17) {
  console.log("Good evening");
}
