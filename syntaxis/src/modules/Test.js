/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
// Some samples to try
var strings = ['Hello', '98052', '101'];
// Validators to use
var validators = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();
console.group('module');
// Show whether each string passed each validator
strings.forEach(function (s) {
    for (var name in validators) {
        var isAcceptable = validators[name].isAcceptable(s);
        console.log('"' + s + '" ' +
            (isAcceptable ? ' matches ' : ' does not match ') + name);
    }
});
console.groupEnd();
//# sourceMappingURL=Test.js.map