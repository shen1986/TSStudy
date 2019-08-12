// 接口初探
{
    function printLabel(labelledObj: { label: string }) {
        console.log(labelledObj.label);
    }

    let myObj = { size: 10, label: 'Size 10 Object'};

    printLabel(myObj);
};
{
    interface LabelledValue {
        label: String;
    }

    function printLabel2(labelledObj: LabelledValue) {
        console.log(labelledObj.label);
    }

    let myObj = { size: 10, label: 'Size 10 Object' }
    printLabel2(myObj)
}

// 可选属性
{
    interface Square {
        color: string;
        area: number;
    }

    interface SquareConfig {
        color?: string;
        width?: number;
    }

    function createSquare(config: SquareConfig) : Square {
        let newSquare = { color: 'white', area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }

        return newSquare;
    }

    let mySquare = createSquare({color: 'black'});
}
// 可选属性可以检查拼写错误
{
    // interface Square {
    //     color: string;
    //     area: number;
    // }

    // interface SquareConfig {
    //     color?: string;
    //     width?: number;
    // }

    // function createSquare2(config: SquareConfig): Square {
    //     let newSquare = { color: 'white', area: 100 };
    //     if (config.cor) {
    //         newSquare.color = config.cor;
    //     }
    //     if (config.width) {
    //         newSquare.area = config.width * config.width;
    //     }

    //     return newSquare;
    // }

    // let mySquare = createSquare2({ color: 'black' });
}

// 只读属性
{
    interface Point {
        readonly x: number;
        readonly y: number;
    }

    let p1:Point = {x: 10, y: 20};
    // p1.x = 20; error
}
// ReadonlyArray<>
{
    let a: number[] = [1, 2, 3, 4];
    let ro: ReadonlyArray<number> = a;
    // ro[0] = 12; error
    // ro.push(5); error
    // ro.length = 100; error
    // a = ro; error
    a = ro as number[];
}

// 额外的属性检查
{
    interface SquareConfig {
        color?: string;
        width?: number;
        // [propName: string]: any; // 字符串索引签名 如果 SquareConfig 带有上面定义的类型的 color 和 width 属性，并且还会带有任意数量的其它属性，那么我们可以这样定义它：
    }

    function createSquare3(config: SquareConfig): { color: string; area: number } {
        let newSquare = { color: 'white', area: 100 }
        if (config.color) {
            newSquare.color = config.color
        }
        if (config.width) {
            newSquare.area = config.width * config.width
        }
        return newSquare
    }


    // let mySquare = createSquare3({ colour: 'red', width: 100 })

    let squareOptions = { colour: 'red', width: 100 }
    let mySquare = createSquare(squareOptions)
}

// 函数类型
{
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }

    // let mySeach: SearchFunc;
    // mySeach = function (source: string, subString: string): boolean {
    //     let result = source.search(subString);
    //     return result > -1;
    // }

    // 不指定类型，typescript会做出类型推断
    let mySeach: SearchFunc;
    mySeach = function (source, subString) {
        let result = source.search(subString);
        return result > -1;
    }
}

// 可索引的类型
{
    interface StringArray {
        [index: number]: string
    }

    let myArray:StringArray;
    myArray = ['Bob', 'Fred'];

    let myStr: string = myArray[0];
}

{
    class Animal {
        name: string;
    }

    class Dog extends Animal {
        breed: string;
    }

    //TypeScript 支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
    interface NotOkay{
        // [x: number]: Animal; error
        [x: string]: Dog;
    }

    interface NumberDictionary {
        [index: string]: number;
        length: number;
        // name: string // 错误，`name`的类型与索引类型返回值的类型不匹配
    }

    // 你可以将索引签名设置为只读，这样就防止了给索引赋值：
    interface ReadonlyStringArray {
        readonly [index: number]: string;
    }
    let myArray: ReadonlyStringArray = ['Alice', 'Bob'];
    // myArray[0]= 'Shenxf'; error
}
// 类类型
// 实现接口
{
    interface ClockInterface {
        currentTime: Date
    }

    class Clock implements ClockInterface {
        currentTime: Date;
        constructor(h: number, m: number) {}
    }
}

{
    interface ClockInterface {
        currentTime: Date
        setTime(d:Date)
    }

    class Clock implements ClockInterface {
        currentTime: Date;
        setTime(d:Date) {
            this.currentTime = d;
        }
        constructor(h: number, m: number) { }
    }
}
// 类静态部分与实例部分的区别
{
    interface ClockConstructor {
        new (hour: number, minute: number);
    }

    // 因为当一个类实现了一个接口时，只对其实例部分进行类型检查。constructor 存在于类的静态部分，所以不在检查的范围内。
    // class Clock implements ClockConstructor { error
    //     currentTime: Date;
    //     constructor(hour: number, minute: number) {}
    // }
}

{
    interface ClockConstructor {
        new(hour: number, minute: number): ClockInterface
    }

    interface ClockInterface {
        tick()
    }

    function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
        return new ctor(hour, minute);
    }

    class DigitalClock implements ClockInterface {
        constructor(h: number, m: number) {}
        tick() {
            console.log('beep beep')
        }
    }

    class AnaogCLock implements ClockInterface {
        constructor(h: number, m: number) { }
        tick() {
            console.log('tick tock')
        }
    }

    let digtial = createClock(DigitalClock, 12, 17);
    let analog = createClock(AnaogCLock, 7 , 32);
}

// 继承接口
{
    interface Shape {
        color: string
    }

    interface Square extends Shape {
        sideLength: number
    }

    let square = { } as Square;
    square.color = 'red';
    square.sideLength = 5;
}

// 一个接口可以继承多个接口，创建出多个接口的合成接口。
{
    interface Shape {
        color: string
    }

    interface PenStroke {
        penWidth: number;
    }

    interface Square extends Shape, PenStroke {
        sideLength: number
    }

    let square = {} as Square;
    square.color = 'red';
    square.sideLength = 5;
    square.penWidth = 6;
}

// 混合类型
{
    interface Counter {
        (start: number): string
        interval: number
        reset(): void
    }

    function getCounter(): Counter {
        let counter = (function (start: number) {}) as Counter;
        counter.interval = 123;
        counter.reset = function(){};
        return counter;
    }

    let c = getCounter();
    c(10);
    c.interval = 10;
    c.reset();
}

// 接口继承类
{
    class Control {
        private state: any;
    }

    interface SelectableControl extends Control {
        select(): void
    }

    class Button extends Control implements SelectableControl {
        select() {}
    }

    class TextBox extends Control {
        select() {}
    }

    // Error：“ImageC”类型缺少“state”属性。
    // class ImageC implements SelectableControl {
    //     select() {}
    // }
}