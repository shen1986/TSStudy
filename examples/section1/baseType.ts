{
    // 布尔值
    let isDone: boolean = false;
}

{
    // 数字
    let decLiteral: number = 20;
    let hexLiteral: number = 0x14;
    let binaryLiteral: number = 0b10100;
    let octalLiteral: number = 0o24;
}
 // 字符串
{
    let name: string = 'bob';
    name = 'smith';
}

{
    let name: string = `Yee`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${name}.
    
    I'll be ${age + 1} years old next month.`;
}

{
    let name: string = `Yee`;
    let age: number = 37;
    let sentence: string = 'Hello, my name is ' + name + '.\n\n' +
    'I\'ll be' + (age + 1) + 'years old next month.'; 
}
// 数组
{
    let list: number[] = [1, 2, 3];
    let list2: Array<number> = [1, 2, 3];
}

// 元组 Tuple
{
    let x: [string, number];
    x = ['hello', 10];
    // x = [10, 'hello']; NG

    console.log(x[0].substr(1));
    // console.log(x[1].substr(1)); NG

    // x[3] = 'world';

    // console.log(x[5].toString());
    // x[6] = true;
}

// 枚举
{
    enum Color { Red, Green, Blue };
    let c: Color = Color.Green;
}
{
    enum Color { Red=1, Green, Blue };
    let colorName: string = Color[2];
    console.log(colorName);
}

// void
{
    function warnUser(): void {
        console.log('This is my warning message!');
    }

    // 只能设置为 null 和 undefined
    let unable: void = undefined;
}

// null 和 undefined
{
    let u: undefined = undefined;
    let n: null = null;
}

// never
{
    function error(message: string): never {
        throw new Error(message);
    }

    function fail() {
        return error("Something failed");
    }

    function infiniteLoop(): never {
        while(true) {

        }
    }
}


// object
declare function create(o: object | null): void;
{
    create({prop: 0});
    create(null);

    // create(42);
    // create('string');
    // create(false);
    create(undefined);
}
// 类型断言
{
    let someValue: any = 'this is a string';

    let strLength: number = (<string>someValue).length;
}
{
    let someValue: any = 'this is a string';
    let strLength: number = (someValue as string).length;
}