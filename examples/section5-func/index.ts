// 函数
{
    // 命名函数
    function add(x, y) {
        return x + y;
    }

    // 匿名函数
    let myAdd = function(x, y) {
        return x + y;
    }

    let z = 100;

    function addToZ(x, y) {
        return x + y + z;
    }
}

// 函数类型
{
    function add2(x: number, y: number): number {
        return x + y;
    }

    let myAdd = function(x: number, y: number): number {
        return x + y;
    }
}

// 书写完整函数类型
{
    let myAdd: (x: number, y: number) => number = 
    function(x: number, y: number): number {
        return x + y;
    }
}

// 推断类型
{
    // let myAdd = function(x: number, y: number): number {
    //     return x + y;
    // }

    let myAdd: (x: number, y: number) => number = 
    function(x, y) {
        return x + y;
    }
}

// 可选参数和默认参数
{
    function buildName(firstName: string, lastName: string) {
        return firstName + ' ' + lastName;
    }

    // let result1 = buildName('Bob')                  // Error, 参数过少
    // let result2 = buildName('Bob', 'Adams', 'Sr.');  // Error, 参数过多
    let result3 = buildName('Bob', 'Adams');         // OK
}

{
    function buildName2(firstName: string, lastName?: string): string {
        if (lastName) {
            return firstName + ' ' + lastName;
        } else {
            return firstName;
        }
    }

    let result1 = buildName2('Bob');  // 现在正常了
    // let result2 = buildName('Bob', 'Adams', 'Sr.')  // Error, 参数过多
    let result3 = buildName2('Bob', 'Adams')  // OK
}

// 有默认初始化值的参数
{
    function buildName3(firstName: string, lastName = 'Smith'): string {
        return firstName + ' ' + lastName
    }

    let result1 = buildName3('Bob')                  // 返回 "Bob Smith"
    let result2 = buildName3('Bob', undefined)     // 正常, 同样 "Bob Smith"
    // let result3 = buildName('Bob', 'Adams', 'Sr.')  // 错误, 参数过多
    let result4 = buildName3('Bob', 'Adams')        // OK
}

//  如果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined 值来获得默认值
{
    function buildName4(firstName = 'Will', lastName: string): string {
        return firstName + ' ' + lastName
    }

    // let result1 = buildName4('Bob')                  // Error, 参数过少
    // let result2 = buildName('Bob', 'Adams', "Sr.")  // Error, 参数过多
    let result3 = buildName4('Bob', 'Adams')         // OK， 返回 "Bob Adams"
    let result4 = buildName4(undefined, 'Adams')     // OK，  返回 "Will Adams"
}

// 剩余参数
{
    function buildName5(firstName: string, ...restOfName: string[]): string {
        return firstName + ' ' + restOfName.join(' ');
    }

    let employeeName = buildName5('Joseph', 'Samuel', 'Lucas', 'MacKinzie');
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
    let deck = {
        suits: ['hearts', 'spades', 'clubs', 'diamonds'],
        cards: Array(52),
        createCardPicker: function () {
            // 注意：这里使用箭头函数
            return () => {
                let pickedCard = Math.floor(Math.random() * 52)
                let pickedSuit = Math.floor(pickedCard / 13)

                return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
            }
        }
    }

    let cardPicker = deck.createCardPicker()
    let pickedCard = cardPicker()

    console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit)
}

// this 参数
{
    function f(this: void) {
        // 确保“this”在此独立函数中不可用
    }
}

{
    interface Card {
        suit: string
        card: number
    }

    interface Deck {
        suits: string[]
        cards: string[]

        createCardPicker(this: Deck): () => Card
    }

    let deck: Deck = {
        suits: ['hearts', 'spades', 'clubs', 'diamonds'],
        cards: Array(52),
        // NOTE: 函数现在显式指定其被调用方必须是 deck 类型
        createCardPicker: function(this: Deck) {
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);
                return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
            }
        }
    }
    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();

    console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit)
}

// this 参数在回调函数里
{

}

// 重载
{
    let suits = ['hearts', 'spades', 'clubs', 'diamonds']

    function pickCard(x: { suit: string; card: number }[]): number
    function pickCard(x: number): { suit: string; card: number }

    function pickCard(x): any {
        if (Array.isArray(x)) {
            let pickedCard = Math.floor(Math.random() * x.length)
            return pickedCard
        } else if (typeof x === 'number') {
            let pickedSuit = Math.floor(x / 13)
            return { suit: suits[pickedSuit], card: x % 13 }
        }
    }

    let myDeck = [
        { suit: 'diamonds', card: 2 },
        { suit: 'spades', card: 10 },
        { suit: 'hearts', card: 4 }
    ]
    let pickedCard1 = myDeck[pickCard(myDeck)];
    console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit)

    let pickedCard2 = pickCard(15)
    console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit)
}