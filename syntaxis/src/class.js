var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function () {
    console.group('classes');
    //---
    var Greeter = (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter;
    })();
    var greeter = new Greeter("world");
    console.log(greeter.greet());
    //---
    var Animal = (function () {
        function Animal(theName) {
            this.name = theName;
        }
        Animal.prototype.move = function (meters) {
            if (meters === void 0) { meters = 0; }
            console.log(this.name + " moved " + meters + "m.");
        };
        return Animal;
    })();
    var Snake = (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            _super.call(this, name);
        }
        Snake.prototype.move = function (meters) {
            if (meters === void 0) { meters = 5; }
            console.log("Slithering...");
            _super.prototype.move.call(this, meters);
        };
        return Snake;
    })(Animal);
    var Horse = (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            _super.call(this, name);
        }
        Horse.prototype.move = function (meters) {
            if (meters === void 0) { meters = 45; }
            console.log("Galloping...");
            _super.prototype.move.call(this, meters);
        };
        return Horse;
    })(Animal);
    var sam = new Snake("Sammy the Python");
    var tom = new Horse("Tommy the Palomino");
    sam.move();
    tom.move(34);
    //---
    var Woman = (function () {
        function Woman(name, age) {
            this.name = '';
            this.age = 0;
            this.name = name;
            this.age = age;
        }
        Woman.prototype.toString = function () {
            return this.name + ': ' + this.age;
        };
        return Woman;
    })();
    console.log((new Woman('Clare', 26)).toString());
    //---
    var Creature = (function () {
        function Creature(type) {
            this.type = type;
        }
        Creature.prototype.toString = function () {
            return 'creature: ' + this.type;
        };
        return Creature;
    })();
    console.log((new Creature('enemy')).toString());
    //---
    var Grid = (function () {
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            var xDist = (point.x - Grid.origin.x);
            var yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        };
        Grid.origin = { x: 0, y: 0 };
        return Grid;
    })();
    var grid1 = new Grid(1.0); // 1x scale
    var grid2 = new Grid(5.0); // 5x scale
    console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    //---
    console.groupEnd();
})();
//# sourceMappingURL=class.js.map