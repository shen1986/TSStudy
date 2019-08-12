var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
 * @Description:
 * @Author: shenxf
 * @Date: 2019-08-12 09:04:58
 */
// 基本示例
{
    var Greeter = /** @class */ (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return 'Hello, ' + this.greeting;
        };
        return Greeter;
    }());
    var greeter = new Greeter('world');
}
// 继承
{
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.move = function (distance) {
            if (distance === void 0) { distance = 0; }
            console.log("Animal moved " + distance + "m.");
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.bark = function () {
            console.log('woof! woof!');
        };
        return Dog;
    }(Animal));
    var dog = new Dog();
    dog.bark();
    dog.move(10);
}
{
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.move = function (distance) {
            if (distance === void 0) { distance = 0; }
            console.log(this.name + " moved " + distance + "m.");
        };
        return Animal;
    }());
    var Snake = /** @class */ (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            return _super.call(this, name) || this;
        }
        Snake.prototype.move = function (distance) {
            if (distance === void 0) { distance = 5; }
            console.log('Slithering...');
            _super.prototype.move.call(this, distance);
        };
        return Snake;
    }(Animal));
    var Horse = /** @class */ (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            return _super.call(this, name) || this;
        }
        Horse.prototype.move = function (distance) {
            if (distance === void 0) { distance = 45; }
            console.log('Galloping...');
            _super.prototype.move.call(this, distance);
        };
        return Horse;
    }(Animal));
    var sam = new Snake('Sammy');
    var tom = new Horse('Tommy');
    sam.move();
    tom.move(34);
}
// 公共，私有与受保护的修饰符
// 默认是public 下面 写与不写是一样的。
{
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.move = function (distance) {
            console.log(this.name + " moved " + distance + "m.");
        };
        return Animal;
    }());
}
// 理解 private
{
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    // new Animal('Cat').name // 错误name是私有的。
}
{
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    var Rhino = /** @class */ (function (_super) {
        __extends(Rhino, _super);
        function Rhino() {
            return _super.call(this, 'Rhino') || this;
        }
        return Rhino;
    }(Animal));
    var Employee = /** @class */ (function () {
        function Employee(name) {
            this.name = name;
        }
        return Employee;
    }());
    var animal = new Animal('Goat');
    var rhino = new Rhino();
    var employee = new Employee('Bob');
    animal = rhino;
    // animal = employee // 错误: Animal 与 Employee 不兼容.
}
// 理解 protected
{
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(name, department) {
            var _this = _super.call(this, name) || this;
            _this.department = department;
            return _this;
        }
        Employee.prototype.getElevatorPitch = function () {
            return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
        };
        return Employee;
    }(Person));
    var howard = new Employee('Howard', 'Sales');
    console.log(howard.getElevatorPitch());
    // console.log(howard.name) // error
}
// readonly 修饰符
{
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var john = new Person('John');
    // john.name = 'peter';
}
// 参数属性
{
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
}
// 存取器
{
    var Employee = /** @class */ (function () {
        function Employee() {
        }
        return Employee;
    }());
    var employee = new Employee();
    employee.fullName = 'Bob Smith';
    if (employee.fullName) {
        console.log(employee.fullName);
    }
}
{
    var passcode_1 = 'secret passcode';
    var Employee = /** @class */ (function () {
        function Employee() {
        }
        Object.defineProperty(Employee.prototype, "fullName", {
            get: function () {
                return this._fullName;
            },
            set: function (newName) {
                if (passcode_1 && passcode_1 == 'secret passcode') {
                    this._fullName = newName;
                }
                else {
                    console.log('Error: Unauthorized update of employee!');
                }
            },
            enumerable: true,
            configurable: true
        });
        return Employee;
    }());
    var employee = new Employee();
    employee.fullName = 'Bob Smith';
    if (employee.fullName) {
        console.log(employee.fullName);
    }
}
// 静态属性
{
    var Grid_1 = /** @class */ (function () {
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            var xDist = point.x - Grid.origin.x;
            var yDist = point.y - Grid.origin.y;
            return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale;
        };
        Grid.origin = { x: 0, y: 0 };
        return Grid;
    }());
    var grid1 = new Grid_1(1.0); // 1x scale
    var grid2 = new Grid_1(5.0); // 5x scale
    console.log(grid1.calculateDistanceFromOrigin({ x: 3, y: 4 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 3, y: 4 }));
}
// 抽象类
{
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.move = function () {
            console.log('roaming the earth...');
        };
        return Animal;
    }());
}
{
    var Department = /** @class */ (function () {
        function Department(name) {
            this.name = name;
        }
        Department.prototype.printName = function () {
            console.log('Department name: ' + this.name);
        };
        return Department;
    }());
    var AccountingDepartment = /** @class */ (function (_super) {
        __extends(AccountingDepartment, _super);
        function AccountingDepartment() {
            return _super.call(this, 'Accounting and Auditing') || this; // 在派生类的构造函数中必须调用 super()
        }
        AccountingDepartment.prototype.printMeeting = function () {
            console.log('The Accounting Department meets each Monday at 10am.');
        };
        AccountingDepartment.prototype.generateReports = function () {
            console.log('Generating accounting reports...');
        };
        return AccountingDepartment;
    }(Department));
    var department = void 0; // 允许创建一个对抽象类型的引用
    // department = new Department() // 错误: 不能创建一个抽象类的实例
    department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
    department.printName();
    department.printMeeting();
    // department.generateReports() // 错误: 方法在声明的抽象类中不存在
}
// 高级技巧
{
    var Greeter_1 = /** @class */ (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            if (this.greeting) {
                return 'Hello, ' + this.greeting;
            }
            else {
                return Greeter.standardGreeting;
            }
        };
        Greeter.standardGreeting = 'Hello, there';
        return Greeter;
    }());
    var greeter = void 0;
    greeter = new Greeter_1();
    console.log(greeter.greet());
    // 复制构造函数
    var greeterMaker = Greeter_1;
    greeterMaker.standardGreeting = 'Hey there';
    var greeter2 = new greeterMaker();
    console.log(greeter2.greet());
}
// 把类当做接口使用
{
    var Point = /** @class */ (function () {
        function Point() {
        }
        return Point;
    }());
    var point3d = { x: 1, y: 2, z: 3 };
}
