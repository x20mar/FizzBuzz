#!/usr/bin/env node

for (var counter = 1; counter <= 100; counter++) {
    var isNumberModulusOfThree = !(counter % 3);
    var isNumberModulusOfFive = !(counter % 5);
    var output = '';

    if (isNumberModulusOfThree) {
        output += 'Fizz';
    }
    if (isNumberModulusOfFive) {
        output += 'Buzz';
    }
    console.log(output || counter);
}