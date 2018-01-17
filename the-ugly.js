#!/usr/bin/env node

for (var i = 1; i <= 100; i++) {
    var output;
    if(!(i % 15)) {
        output = 'FizzBuzz';
    } else if (!(i % 3)) {
        output = 'Fizz';
    } else if (!(i % 5)) {
        output = 'Buzz';
    } else {
        output = i;
    }
    console.log(output);
}