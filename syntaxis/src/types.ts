const a: boolean = true;

var b: number = 10;

let c: string = 'name';

//---

const d: number[] = [1, 2, 3];

var e: Array<number> = [1, 2, 3];

//---

enum Color {Red, Blue, Green};

enum State {Alive = 1, Died = 0};

//---

var f: any = 25 || 'title';

var g: any[] = [1, 'string', false];

//---

function doSomething() : void {
    //do not return anything;
}

console.group('types');
console.log(a, b, c);
console.log(d, e);
console.log(Color, State);
console.log(f, g);
console.log(doSomething());
console.groupEnd();