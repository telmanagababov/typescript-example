console.group('interfaces');

function printLabel(labelledObj: {label: string}) {
  console.log(labelledObj);
}
var myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

//---

interface LabeledValue {
    label: string;
}

function printLabeledValue(labelledObj: LabeledValue) {
    console.log(labelledObj);
}

var labeledValue = {size: 35, label: "Size 35 Object"};
printLabeledValue(labeledValue);

//---

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  var newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

var mySquare = createSquare({color: "black"});
console.log(mySquare);

//---

interface SearchFunc {
  (source: string, subString: string): boolean;
}

var mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  var result = source.search(subString);
  if (result == -1) {
    return false;
  }
  else {
    return true;
  }
}
console.log(mySearch('string', 'str'));

//---

interface StringArray {
  [index: number]: string;
}

var myArray: StringArray;
myArray = ["Bob", "Fred"];
console.log(myArray[1], myArray[0]);

//---

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
    time: Date;
}

class Clock implements ClockInterface  {
    currentTime: Date;
    get time() {
        return this.currentTime;
    }
    set time(time: Date) {
        this.currentTime = time;
    }
    setTime(time: Date) {
        this.currentTime = time;
    }
    constructor(h: number, m: number) { }
}

console.log(new Clock(20, 20));

//---

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

var square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
console.log(square);

//---
console.groupEnd();