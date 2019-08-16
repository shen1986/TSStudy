// 交叉类型
{
    function extend<T, U>(first: T, second: U): T & U {
        let result = {} as T & U;
        for (let id in first) {
            result[id] = first[id] as any;
        }
        for (let id in second) {
            if (!result.hasOwnProperty(id)) {
                result[id] = second[id] as any;
            }
        }
        return result;
    }

    class Person {
        constructor(public name: string) {

        }
    }
    interface Loggable {
        log(): void
    }

    class ConsoleLogger implements Loggable {
        log() {

        }
    }

    var jim = extend(new Person('Jim'), new ConsoleLogger());
    var n = jim.name;
    jim.log();
}

// 联合类型
{
    function padLeft(value: string, padding: string | number) {
        if (typeof padding === 'number') {
            return Array(padding + 1).join(' ') + value;
        }
        if (typeof padding === 'string') {
            return padding + value;
        }
        throw new Error(`Expected string or number, got '${padding}'.`);
    }

    console.log(padLeft('Hello world', 4));
}
{
    interface Bird {
        fly()
        layEggs()
    }

    interface Fish {
        swim()
        layEggs()
    }

    function getSmallPet(): Fish | Bird {
        return null;
    }

    let pet = getSmallPet();
    pet.layEggs();
    // pet.swim(); error
}

// 类型保护
{
    interface Bird {
        fly()
        layEggs()
    }

    interface Fish {
        swim()
        layEggs()
    }

    function getSmallPet2(): Fish | Bird {
        return null;
    }

    let pet = getSmallPet2()

    if ((pet as Fish).swim) {
        (pet as Fish).swim()
    } else {
        (pet as Bird).fly()
    }
}

// 用户自定义的类型保护
{
    interface Bird {
        fly()
        layEggs()
    }

    interface Fish {
        swim()
        layEggs()
    }

    function isFish(pet: Fish | Bird): pet is Fish {
        return (pet as Fish).swim !== undefined
    }

    function getSmallPet3(): Fish | Bird {
        return null;
    }

    let pet = getSmallPet3()

    if (isFish(pet)) {
        pet.swim()
    } else {
        pet.fly()
    }
}

// instanceof 类型保护
{
    class Bird {
        fly() {
            console.log('bird fly')
        }

        layEggs() {
            console.log('bird lay eggs')
        }
    }

    class Fish {
        swim() {
            console.log('fish swim')
        }

        layEggs() {
            console.log('fish lay eggs')
        }
    }

    function getRandomPet() {
        return Math.random() > 0.5 ? new Bird() : new Fish()
    }

    let pet = getRandomPet()

    if (pet instanceof Bird) {
        pet.fly()
    }
    if (pet instanceof Fish) {
        pet.swim()
    }
}

// 可以为 null 的类型
{
    // null的发明者，Tony Hoare，称它为价值亿万美金的错误
    // --strictNullChecks 标记可以解决此错误：当你声明一个变量时，它不会自动地包含 null 或 undefined
}

// 可选参数和可选属性
{
    function f(x: number, y?: number) {
        return x + (y || 0)
    }
    f(1, 2)
    f(1)
    f(1, undefined)
    f(1, null) // error, 'null' 不能赋值给 'number | undefined'
}

// 类型保护和类型断言
{
    function f(sn: string | null): string {
        if (sn === null) {
            return 'default'
        } else {
            return sn
        }
    }

    function f(sn: string | null): string {
        return sn || 'default'
    }
}

{
    function broken(name: string | null): string {
        function postfix(epithet: string) {
            return name.charAt(0) + '.  the ' + epithet // error, 'name' 可能为 null
        }
        name = name || 'Bob'
        return postfix('great')
    }

    function fixed(name: string | null): string {
        function postfix(epithet: string) {
            return name!.charAt(0) + '.  the ' + epithet // ok
        }
        name = name || 'Bob'
        return postfix('great')
    }

    broken(null)

}

// 字符串字面量类型
{
    type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'

    class UIElement {
        animate(dx: number, dy: number, easing: Easing) {
            if (easing === 'ease-in') {
                // ...
            } else if (easing === 'ease-out') {
            } else if (easing === 'ease-in-out') {
            } else {
                // error! 不能传入 null 或者 undefined.
            }
        }
    }

    let button = new UIElement()
    button.animate(0, 0, 'ease-in')
    button.animate(0, 0, 'uneasy') // error

}