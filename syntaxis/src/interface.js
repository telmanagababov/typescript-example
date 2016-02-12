console.group('interfaces');
function printLabel(labelledObj) {
    console.log(labelledObj);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabeledValue(labelledObj) {
    console.log(labelledObj);
}
var labeledValue = { size: 35, label: "Size 35 Object" };
printLabeledValue(labeledValue);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
console.log(mySearch('string', 'str'));
var myArray;
myArray = ["Bob", "Fred"];
console.log(myArray[1], myArray[0]);
var Clock = (function () {
    function Clock(h, m) {
    }
    Object.defineProperty(Clock.prototype, "time", {
        get: function () {
            return this.currentTime;
        },
        set: function (time) {
            this.currentTime = time;
        },
        enumerable: true,
        configurable: true
    });
    Clock.prototype.setTime = function (time) {
        this.currentTime = time;
    };
    return Clock;
})();
console.log(new Clock(20, 20));
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
console.log(square);
//---
console.groupEnd();
//# sourceMappingURL=interface.js.map