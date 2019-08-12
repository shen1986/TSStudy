/*
 * @Description: 
 * @Author: shenxf
 * @Date: 2019-08-12 09:04:58
 */
// 基本示例
{
    class Greeter {
        greeting:string
        constructor(message: string) {
            this.greeting = message;
        }

        greet() {
            return 'Hello, ' + this.greeting;
        }
    }

    let greeter = new Greeter('world');
}

// 继承
{
    class Animal {
        move(distance: number = 0) {
            console.log(`Animal moved ${distance}m.`)
        }
    }

    class Dog extends Animal {
        bark() {
            console.log('woof! woof!');
        }
    }

    const dog = new Dog();
    dog.bark();
    dog.move(10)
}

{
    class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        move(distance: number = 0) {
            console.log(`${this.name} moved ${distance}m.`)
        }
    }

    class Snake extends Animal {
        constructor(name: string) {
            super(name)
        }
        move(distance: number = 5) {
            console.log('Slithering...')
            super.move(distance)
        }
    }

    class Horse extends Animal {
        constructor(name: string) {
            super(name)
        }
        move(distance: number = 45) {
            console.log('Galloping...')
            super.move(distance)
        }
    }

    let sam = new Snake('Sammy')
    let tom: Animal = new Horse('Tommy')

    sam.move()
    tom.move(34)
}

// 公共，私有与受保护的修饰符
// 默认是public 下面 写与不写是一样的。
{
    class Animal {
        public name: string
        public constructor(name: string) {
            this.name = name
        }
        public move(distance: number) {
            console.log(`${this.name} moved ${distance}m.`)
        }
    }
}

// 理解 private
{
    class Animal {
        private name: string;
        constructor(name: string) {
            this.name = name;
        }
    }

    // new Animal('Cat').name // 错误name是私有的。
}

{
    class Animal {
        private name: string
        constructor(name: string) {
            this.name = name
        }
    }

    class Rhino extends Animal {
        constructor() {
            super('Rhino')
        }
    }

    class Employee {
        private name: string
        constructor(name: string) {
            this.name = name
        }
    }

    let animal = new Animal('Goat')
    let rhino = new Rhino()
    let employee = new Employee('Bob')

    animal = rhino
    // animal = employee // 错误: Animal 与 Employee 不兼容.
}

// 理解 protected
{
    class Person {
        protected name: string
        constructor(name: string) {
            this.name = name
        }
    }

    class Employee extends Person {
        private department: string

        constructor(name: string, department: string) {
            super(name)
            this.department = department
        }

        getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`
        }
    }

    let howard = new Employee('Howard', 'Sales')
    console.log(howard.getElevatorPitch())
    // console.log(howard.name) // error
}
// readonly 修饰符
{
    class Person {
        readonly name: string;
        constructor(name: string) {
            this.name = name;
        }
    }

    let john = new Person('John');
    // john.name = 'peter';
}

// 参数属性
{
    class Person {
        constructor(readonly name: string) {
        }
    }
}

// 存取器
{
    class Employee {
        fullName: string
    }

    let employee = new Employee()
    employee.fullName = 'Bob Smith'
    if (employee.fullName) {
        console.log(employee.fullName)
    }
}

{
    let passcode = 'secret passcode'

    class Employee {
        private _fullName: string

        get fullName(): string {
            return this._fullName
        }

        set fullName(newName: string) {
            if (passcode && passcode == 'secret passcode') {
                this._fullName = newName
            }
            else {
                console.log('Error: Unauthorized update of employee!')
            }
        }
    }

    let employee = new Employee()
    employee.fullName = 'Bob Smith'
    if (employee.fullName) {
        console.log(employee.fullName)
    }
}

// 静态属性
{
    class Grid {
        static origin = { x: 0, y: 0 }

        scale: number

        constructor(scale: number) {
            this.scale = scale
        }

        calculateDistanceFromOrigin(point: { x: number; y: number }) {
            let xDist = point.x - Grid.origin.x
            let yDist = point.y - Grid.origin.y
            return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
        }
    }

    let grid1 = new Grid(1.0)  // 1x scale
    let grid2 = new Grid(5.0)  // 5x scale

    console.log(grid1.calculateDistanceFromOrigin({ x: 3, y: 4 }))
    console.log(grid2.calculateDistanceFromOrigin({ x: 3, y: 4 }))
}

// 抽象类
{
    abstract class Animal {
        abstract makeSound(): void
        move(): void {
            console.log('roaming the earth...')
        }
    }
}

{
    abstract class Department {
        name: string

        constructor(name: string) {
            this.name = name
        }

        printName(): void {
            console.log('Department name: ' + this.name)
        }

        abstract printMeeting(): void // 必须在派生类中实现
    }

    class AccountingDepartment extends Department {
        constructor() {
            super('Accounting and Auditing') // 在派生类的构造函数中必须调用 super()
        }

        printMeeting(): void {
            console.log('The Accounting Department meets each Monday at 10am.')
        }

        generateReports(): void {
            console.log('Generating accounting reports...')
        }
    }

    let department: Department // 允许创建一个对抽象类型的引用
    // department = new Department() // 错误: 不能创建一个抽象类的实例
    department = new AccountingDepartment() // 允许对一个抽象子类进行实例化和赋值
    department.printName()
    department.printMeeting()
    // department.generateReports() // 错误: 方法在声明的抽象类中不存在
}

// 高级技巧
{
    class Greeter {
        static standardGreeting = 'Hello, there'

        greeting: string

        constructor(message?: string) {
            this.greeting = message
        }

        greet() {
            if (this.greeting) {
                return 'Hello, ' + this.greeting
            } else {
                return Greeter.standardGreeting
            }
        }
    }

    let greeter: Greeter
    greeter = new Greeter()
    console.log(greeter.greet())

    // 复制构造函数
    let greeterMaker: typeof Greeter = Greeter
    greeterMaker.standardGreeting = 'Hey there'

    let greeter2: Greeter = new greeterMaker()
    console.log(greeter2.greet())
}

// 把类当做接口使用
{
    class Point {
        x: number
        y: number
    }

    interface Point3d extends Point {
        z: number
    }

    let point3d: Point3d = { x: 1, y: 2, z: 3 }
}