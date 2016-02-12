var a = true;
var b = 10;
var c = 'name';
//---
var d = [1, 2, 3];
var e = [1, 2, 3];
//---
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var State;
(function (State) {
    State[State["Alive"] = 1] = "Alive";
    State[State["Died"] = 0] = "Died";
})(State || (State = {}));
;
//---
var f = 25 || 'title';
var g = [1, 'string', false];
//---
function doSomething() {
    //do not return anything;
}
console.group('types');
console.log(a, b, c);
console.log(d, e);
console.log(Color, State);
console.log(f, g);
console.log(doSomething());
console.groupEnd();
//# sourceMappingURL=types.js.map