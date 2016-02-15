(function () {
    console.group('mixins');
    //---
    // Disposable Mixin
    var Disposable = (function () {
        function Disposable() {
        }
        Disposable.prototype.dispose = function () {
            this.isDisposed = true;
            console.log('Disposable: dispose');
        };
        return Disposable;
    })();
    // Activatable Mixin
    var Activatable = (function () {
        function Activatable() {
        }
        Activatable.prototype.activate = function () {
            this.isActive = true;
            console.log('Activatable: activate');
        };
        Activatable.prototype.deactivate = function () {
            this.isActive = false;
            console.log('Activatable: deactivate');
        };
        return Activatable;
    })();
    var SmartObject = (function () {
        function SmartObject() {
            // Disposable
            this.isDisposed = false;
            // Activatable
            this.isActive = false;
        }
        SmartObject.prototype.interact = function () {
            this.activate();
        };
        return SmartObject;
    })();
    applyMixins(SmartObject, [Disposable, Activatable]);
    var smartObj = new SmartObject();
    smartObj.activate();
    smartObj.deactivate();
    smartObj.dispose();
    ////////////////////////////////////////
    // In your runtime library somewhere
    ////////////////////////////////////////
    function applyMixins(derivedCtor, baseCtors) {
        baseCtors.forEach(function (baseCtor) {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    }
    //---
    console.groupEnd();
})();
//# sourceMappingURL=mixins.js.map