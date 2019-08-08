{
    // 布尔值
    var isDone = false;
}
{
    // 数字
    var decLiteral = 20;
    var hexLiteral = 0x14;
    var binaryLiteral = 20;
    var octalLiteral = 20;
}
// 字符串
{
    var name_1 = 'bob';
    name_1 = 'smith';
}
{
    var name_2 = "Yee";
    var age = 37;
    var sentence = "Hello, my name is " + name_2 + ".\n    \n    I'll be " + (age + 1) + " years old next month.";
}
{
    var name_3 = "Yee";
    var age = 37;
    var sentence = 'Hello, my name is ' + name_3 + '.\n\n' +
        'I\'ll be' + (age + 1) + 'years old next month.';
}
// 数组
{
    var list = [1, 2, 3];
    var list2 = [1, 2, 3];
}
// 元组 Tuple
{
    var x = void 0;
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
    var Color = void 0;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    ;
    var c = Color.Green;
}
{
    var Color = void 0;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 3] = "Blue";
    })(Color || (Color = {}));
    ;
    var colorName = Color[2];
    console.log(colorName);
}
// void
{
    function warnUser() {
        console.log('This is my warning message!');
    }
    // 只能设置为 null 和 undefined
    var unable = undefined;
}
// null 和 undefined
{
    var u = undefined;
    var n = null;
}
// never
{
    function error(message) {
        throw new Error(message);
    }
    function fail() {
        return error("Something failed");
    }
    function infiniteLoop() {
        while (true) {
        }
    }
}
{
    create({ prop: 0 });
    create(null);
    // create(42);
    // create('string');
    // create(false);
    create(undefined);
}
