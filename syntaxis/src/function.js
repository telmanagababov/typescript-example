(function () {
    console.group('function');
    //---
    function add(x, y) {
        return x + y;
    }
    var myAdd = function (x, y) { return x + y; };
    console.log(add(2, 5));
    console.log(add(4, 4));
    //---
    var predefinedAdd = function (x, y) { return x + y; };
    console.log(predefinedAdd(6, 3));
    //---
    function buildOptionalName(firstName, lastName) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }
    console.log(buildOptionalName("Bob"));
    //---
    function buildDefaultName(firstName, lastName) {
        if (lastName === void 0) { lastName = "Smith"; }
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }
    console.log(buildDefaultName("Bob"));
    //---
    function buildRestName(firstName) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        return firstName + " " + restOfName.join(" ");
    }
    var employeeName = buildRestName("Joseph", "Samuel", "Lucas", "MacKinzie");
    //---
    var deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            var _this = this;
            // Notice: the line below is now a lambda, allowing us to capture 'this' earlier
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var cardPicker = deck.createCardPicker();
    var pickedCard = cardPicker();
    console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
    //---
    var suits = ["hearts", "spades", "clubs", "diamonds"];
    function pickCard(x) {
        // Check to see if we're working with an object/array
        // if so, they gave us the deck and we'll pick the card
        if (typeof x == "object") {
            var pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        else if (typeof x == "number") {
            var pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }
    var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
    var pickedCard1 = myDeck[pickCard(myDeck)];
    console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
    var pickedCard2 = pickCard(15);
    console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
    //---
    console.groupEnd();
})();
//# sourceMappingURL=function.js.map