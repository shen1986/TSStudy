// 交叉类型
{
    function extend(first, second) {
        var result = {};
        for (var id in first) {
            result[id] = first[id];
        }
        for (var id in second) {
            if (!result.hasOwnProperty(id)) {
                result[id] = second[id];
            }
        }
        return result;
    }
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var ConsoleLogger = /** @class */ (function () {
        function ConsoleLogger() {
        }
        ConsoleLogger.prototype.log = function () {
        };
        return ConsoleLogger;
    }());
    var jim = extend(new Person('Jim'), new ConsoleLogger());
    var n = jim.name;
    jim.log();
}
// 联合类型
{
    function padLeft(value, padding) {
        if (typeof padding === 'number') {
            return Array(padding + 1).join(' ') + value;
        }
        if (typeof padding === 'string') {
            return padding + value;
        }
        throw new Error("Expected string or number, got '" + padding + "'.");
    }
    console.log(padLeft('Hello world', 4));
}
{
    function getSmallPet() {
        return null;
    }
    var pet = getSmallPet();
    pet.layEggs();
    // pet.swim(); error
}
// 类型保护
{
    function getSmallPet2() {
        return null;
    }
    var pet = getSmallPet2();
    if (pet.swim) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}
// 用户自定义的类型保护
{
    function isFish(pet) {
        return pet.swim !== undefined;
    }
    function getSmallPet3() {
        return null;
    }
    var pet = getSmallPet3();
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}
// instanceof 类型保护
{
    var Bird_1 = /** @class */ (function () {
        function Bird() {
        }
        Bird.prototype.fly = function () {
            console.log('bird fly');
        };
        Bird.prototype.layEggs = function () {
            console.log('bird lay eggs');
        };
        return Bird;
    }());
    var Fish_1 = /** @class */ (function () {
        function Fish() {
        }
        Fish.prototype.swim = function () {
            console.log('fish swim');
        };
        Fish.prototype.layEggs = function () {
            console.log('fish lay eggs');
        };
        return Fish;
    }());
    function getRandomPet() {
        return Math.random() > 0.5 ? new Bird_1() : new Fish_1();
    }
    var pet = getRandomPet();
    if (pet instanceof Bird_1) {
        pet.fly();
    }
    if (pet instanceof Fish_1) {
        pet.swim();
    }
}
// 可以为 null 的类型
{
    // null的发明者，Tony Hoare，称它为价值亿万美金的错误
    // --strictNullChecks 标记可以解决此错误：当你声明一个变量时，它不会自动地包含 null 或 undefined
}
// 可选参数和可选属性
{
    function f(x, y) {
        return x + (y || 0);
    }
    f(1, 2);
    f(1);
    f(1, undefined);
    f(1, null); // error, 'null' 不能赋值给 'number | undefined'
}
