#!/usr/bin/env node

var multipleOfThreeList = [0,3,6,9,12,15];
var multipleOfFiveList = [0,5,10,15];

for (var counter = 1; counter <= 100; counter++) {
    var modulusValue = counter % 15;
    var isNumberModulusOfThree = multipleOfThreeList.includes(modulusValue);
    var isNumberModulusOfFive = multipleOfFiveList.includes(modulusValue);
    var output = '';

    if (isNumberModulusOfThree) {
        output += 'Fizz';
    }
    if (isNumberModulusOfFive) {
        output += 'Buzz';
    }
    console.log(output || counter);
}