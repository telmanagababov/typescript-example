(function () {
    console.group('generics');
    var box = { height: 5, width: 6, scale: 10 };
    console.log('box: ', box);
    var HTMLDocument = (function () {
        function HTMLDocument() {
        }
        HTMLDocument.prototype.createElement = function (tagName) {
            console.log('createElement: ', tagName);
            return null;
        };
        return HTMLDocument;
    })();
    var htmlDocument = new HTMLDocument();
    htmlDocument.createElement('span');
    //---
    console.groupEnd();
})();
//# sourceMappingURL=declarations.js.map