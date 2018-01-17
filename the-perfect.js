#!/usr/bin/env node

var fizzCounter = 3;
var buzzCounter = 5;

for (var counter = 1; counter <= 100; counter++) {
    var output = '';
    fizzCounter--;
    buzzCounter--;
    if (fizzCounter === 0)
    {
        output += 'Fizz';
        fizzCounter = 3;
    }
    if (buzzCounter === 0)
    {
        output += 'Buzz';
        buzzCounter = 5;
    }
    console.log(output || counter);
}