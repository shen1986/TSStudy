// 函数
{
    // 命名函数
    function add(x, y) {
        return x + y;
    }
    // 匿名函数
    var myAdd = function (x, y) {
        return x + y;
    };
    var z_1 = 100;
    function addToZ(x, y) {
        return x + y + z_1;
    }
}
// 函数类型
{
    function add2(x, y) {
        return x + y;
    }
    var myAdd = function (x, y) {
        return x + y;
    };
}
// 书写完整函数类型
{
    var myAdd = function (x, y) {
        return x + y;
    };
}
// 推断类型
{
    // let myAdd = function(x: number, y: number): number {
    //     return x + y;
    // }
    var myAdd = function (x, y) {
        return x + y;
    };
}
// 可选参数和默认参数
{
    function buildName(firstName, lastName) {
        return firstName + ' ' + lastName;
    }
    // let result1 = buildName('Bob')                  // Error, 参数过少
    // let result2 = buildName('Bob', 'Adams', 'Sr.');  // Error, 参数过多
    var result3 = buildName('Bob', 'Adams'); // OK
}
{
    function buildName2(firstName, lastName) {
        if (lastName) {
            return firstName + ' ' + lastName;
        }
        else {
            return firstName;
        }
    }
    var result1 = buildName2('Bob'); // 现在正常了
    // let result2 = buildName('Bob', 'Adams', 'Sr.')  // Error, 参数过多
    var result3 = buildName2('Bob', 'Adams'); // OK
}
// 有默认初始化值的参数
{
    function buildName3(firstName, lastName) {
        if (lastName === void 0) { lastName = 'Smith'; }
        return firstName + ' ' + lastName;
    }
    var result1 = buildName3('Bob'); // 返回 "Bob Smith"
    var result2 = buildName3('Bob', undefined); // 正常, 同样 "Bob Smith"
    // let result3 = buildName('Bob', 'Adams', 'Sr.')  // 错误, 参数过多
    var result4 = buildName3('Bob', 'Adams'); // OK
}
//  如果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined 值来获得默认值
{
    function buildName4(firstName, lastName) {
        if (firstName === void 0) { firstName = 'Will'; }
        return firstName + ' ' + lastName;
    }
    // let result1 = buildName4('Bob')                  // Error, 参数过少
    // let result2 = buildName('Bob', 'Adams', "Sr.")  // Error, 参数过多
    var result3 = buildName4('Bob', 'Adams'); // OK， 返回 "Bob Adams"
    var result4 = buildName4(undefined, 'Adams'); // OK，  返回 "Will Adams"
}
// 剩余参数
{
    function buildName5(firstName) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        return firstName + ' ' + restOfName.join(' ');
    }
    var employeeName = buildName5('Joseph', 'Samuel', 'Lucas', 'MacKinzie');
}
// this
// 这里的this有问题
{
    // let deck = {
    //     suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    //     cards: Array(52),
    //     createCardPicker: function () {
    //         return function () {
    //             let pickedCard = Math.floor(Math.random() * 52)
    //             let pickedSuit = Math.floor(pickedCard / 13)
    //             return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
    //         }
    //     }
    // }
    // let cardPicker = deck.createCardPicker()
    // let pickedCard = cardPicker()
    // console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit)
}
// 用箭头函数解决this的问题
{
    var deck = {
        suits: ['hearts', 'spades', 'clubs', 'diamonds'],
        cards: Array(52),
        createCardPicker: function () {
            var _this = this;
            // 注意：这里使用箭头函数
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var cardPicker = deck.createCardPicker();
    var pickedCard = cardPicker();
    console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);
}
// this 参数
{
    function f() {
        // 确保“this”在此独立函数中不可用
    }
}
{
    var deck = {
        suits: ['hearts', 'spades', 'clubs', 'diamonds'],
        cards: Array(52),
        // NOTE: 函数现在显式指定其被调用方必须是 deck 类型
        createCardPicker: function () {
            var _this = this;
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var cardPicker = deck.createCardPicker();
    var pickedCard = cardPicker();
    console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);
}
