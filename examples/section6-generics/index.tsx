// generics
{
    function identity(arg: number):number {
        return arg;
    }
}
{
    function identity2(arg: any): any {
        return arg;
    }
}
{
    function identity3<T>(arg: T): T {
        return arg;
    }

    let output = identity3<string>('myString');
    let output2 = identity3('myString');
}
// 使用泛型变量
{
    function loggingIdentity<T>(arg: T): T {
        // console.log(arg.length)
        return arg
    }

    function loggingIdentity2<T>(arg: T[]): T[] {
        console.log(arg.length)
        return arg
    }
}
// 泛型类型
{
    function identity4<T>(arg: T): T {
        return arg;
    }

    let myIdentity: <T>(arg: T) => T = identity4;
}
{
    function identity5<T>(arg: T): T {
        return arg
    }

    let myIdentity: <U>(arg: U) => U = identity5
}
{
    function identity6<T>(arg: T): T {
        return arg
    }

    let myIdentity: { <T>(arg: T): T } = identity6
}
{
    interface GenericIdentityFn {
        <T>(arg: T): T
    }

    function identity7<T>(arg: T): T {
        return arg;
    }

    let myIdentity: GenericIdentityFn = identity7;
}
{
    interface GenericIdentityFn<T> {
        (arg: T): T
    }

    function identity8<T>(arg: T): T {
        return arg;
    }


    let myIdentity: GenericIdentityFn<number> = identity8;
}

// 泛型类
{
    class GenericNumber<T> {
        zeroValue: T
        add: (x: T, y: T) => T
    }

    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function(x, y) {
        return x + y
    }

    let stringNumeric = new GenericNumber<string>()
    stringNumeric.zeroValue = ''
    stringNumeric.add = function (x, y) {
        return x + y
    }

    console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'))
}

// 泛型约束
{
    interface Lengthwise {
        length: number
    }

    function loggingIdentity3<T extends Lengthwise>(arg: T): T {
        console.log(arg.length)
        return arg
    }

    // loggingIdentity2(3);

    loggingIdentity3({ length: 10, value: 3 }) // OK
}

// 在泛型约束中使用类型参数
{
    function getProperty<T, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }

    let x = {a: 1, b: 2, c: 3, d: 4};
    getProperty(x, 'a');
    // getProperty(x, 'm'); error
}