// generics
{
    function identity(arg) {
        return arg;
    }
}
{
    function identity2(arg) {
        return arg;
    }
}
{
    function identity3(arg) {
        return arg;
    }
    var output = identity3('myString');
    var output2 = identity3('myString');
}
// 使用泛型变量
{
    function loggingIdentity(arg) {
        // console.log(arg.length)
        return arg;
    }
    function loggingIdentity2(arg) {
        console.log(arg.length);
        return arg;
    }
}
// 泛型类型
{
    function identity4(arg) {
        return arg;
    }
    var myIdentity = identity4;
}
{
    function identity5(arg) {
        return arg;
    }
    var myIdentity = identity5;
}
{
    function identity6(arg) {
        return arg;
    }
    var myIdentity = identity6;
}
{
    function identity7(arg) {
        return arg;
    }
    var myIdentity = identity7;
}
{
    function identity8(arg) {
        return arg;
    }
    var myIdentity = identity8;
}
// 泛型类
{
    var GenericNumber = /** @class */ (function () {
        function GenericNumber() {
        }
        return GenericNumber;
    }());
    var myGenericNumber = new GenericNumber();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) {
        return x + y;
    };
    var stringNumeric = new GenericNumber();
    stringNumeric.zeroValue = '';
    stringNumeric.add = function (x, y) {
        return x + y;
    };
    console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'));
}
// 泛型约束
{
    function loggingIdentity3(arg) {
        console.log(arg.length);
        return arg;
    }
    // loggingIdentity2(3);
    loggingIdentity3({ length: 10, value: 3 }); // OK
}
// 在泛型约束中使用类型参数
{
    function getProperty(obj, key) {
        return obj[key];
    }
    var x = { a: 1, b: 2, c: 3, d: 4 };
    getProperty(x, 'a');
    // getProperty(x, 'm');
}
