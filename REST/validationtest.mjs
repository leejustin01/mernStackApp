import * as v from './validation.mjs'

console.log('Name test, expected: true false false');
console.log(v.isNameValid('justin'));
console.log(v.isNameValid(''));
console.log(v.isNameValid());

console.log('Reps test, expected: true false false false');
console.log(v.isRepsValid(100));
console.log(v.isRepsValid(-1));
console.log(v.isRepsValid('1'));
console.log(v.isRepsValid());

console.log('Unit test, expected: true true false false');
console.log(v.isUnitValid('kgs'));
console.log(v.isUnitValid('lbs'));
console.log(v.isUnitValid());
console.log(v.isUnitValid(0));
