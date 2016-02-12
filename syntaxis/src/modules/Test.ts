/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

// Some samples to try
var strings = ['Hello', '98052', '101'];
// Validators to use
var validators: { [s: string]: Validation.StringValidator; } = {};

validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();

console.group('module');
// Show whether each string passed each validator
strings.forEach(s => {
    for (var name in validators) {
        let isAcceptable = validators[name].isAcceptable(s);
        console.log('"' + s + '" ' + 
            (isAcceptable ? ' matches ' : ' does not match ') + name);
    }
});
console.groupEnd();