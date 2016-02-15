(() => {
console.group('mixins');
//---

// Disposable Mixin
class Disposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
        console.log('Disposable: dispose');
    }
 
}
 
// Activatable Mixin
class Activatable {
    isActive: boolean;
    activate() {
        this.isActive = true;
        console.log('Activatable: activate');
    }
    deactivate() {
        this.isActive = false;
        console.log('Activatable: deactivate');
    }
}
 
class SmartObject implements Disposable, Activatable {
    constructor() {
    }
 
    interact() {
        this.activate();
    }
 
    // Disposable
    isDisposed: boolean = false;
    dispose: () => void;
    // Activatable
    isActive: boolean = false;
    activate: () => void;
    deactivate: () => void;
}
applyMixins(SmartObject, [Disposable, Activatable])
 
var smartObj = new SmartObject();
smartObj.activate();
smartObj.deactivate();
smartObj.dispose();
 
////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        })
    }); 
}

//---
console.groupEnd();
})();