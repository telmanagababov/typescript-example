(() => {
console.group('generics');
//---

interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

var box: Box = {height: 5, width: 6, scale: 10};
console.log('box: ', box);

//---

interface Document {
    createElement(tagName: any): Element;
}
interface Document {
    createElement(tagName: string): HTMLElement;
}
interface Document {
    createElement(tagName: "div"): HTMLDivElement; 
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
}
class HTMLDocument implements Document {
    createElement(tagName: any) {
        console.log('createElement: ', tagName);
        return null;
    }
}

var htmlDocument = new HTMLDocument();
htmlDocument.createElement('span');

//---
console.groupEnd();
})();