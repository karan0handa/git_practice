// Print all number from 1-100. If number is divisible by 3, print "Fizz".
// If number if divisble by 5, print "Buzz".
// If number divisble by both 5 and 3, print "FizzBuzz".

for (i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) console.log("FizzBuzz");
    else if (i % 5 == 0) console.log("Buzz")
    else if (i % 3 == 0) console.log("Fizz");
    else console.log(i);
}