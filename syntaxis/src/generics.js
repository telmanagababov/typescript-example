(function () {
    console.group('generics');
    //---
    function identity(arg) {
        console.log('identity', arg);
        return arg;
    }
    identity('string');
    //---
    function loggingIdentity(arg) {
        console.log('loggingIdentity', arg.length);
        return arg;
    }
    loggingIdentity([1, 2, 4]);
    //---
    var GenericNumber = (function () {
        function GenericNumber() {
        }
        GenericNumber.prototype.log = function () {
            console.log('zeroValue: ', this.zeroValue);
        };
        return GenericNumber;
    })();
    var myGenericNumber = new GenericNumber();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) { return x + y; };
    myGenericNumber.log();
    function loggingIdentityExtended(arg) {
        console.log('loggingIdentityExtended', arg.length);
        return arg;
    }
    loggingIdentityExtended({ length: 10, value: 3 });
    //---
    console.groupEnd();
})();
//# sourceMappingURL=generics.js.map