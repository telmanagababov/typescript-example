(() => {
console.group('generics');
//---

function identity<T>(arg: T): T {
    console.log('identity', arg);
    return arg;
}
identity('string');

//---

function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log('loggingIdentity', arg.length);
    return arg;
}
loggingIdentity([1, 2, 4]);

//---

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
    log() {
        console.log('zeroValue: ', this.zeroValue);
    }
}

var myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
myGenericNumber.log();

//---

interface Lengthwise {
    length: number;
}

function loggingIdentityExtended<T extends Lengthwise>(arg: T): T {
    console.log('loggingIdentityExtended', arg.length);
    return arg;
}
loggingIdentityExtended({length: 10, value: 3}); 

//---
console.groupEnd();
})();