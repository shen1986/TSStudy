// let
{
    let hello = 'Hello!';
}

// const
{
    const numLivesForCat = 9;
}

// 解构
{
    let input = [1, 2];
    let [first, second] = input;
    console.log(first);
    console.log(second);
}

{
    let [first, ...rest] = [1, 2, 3, 4];
    console.log(first);
    console.log(rest);
}

// 对象解构
{
    let o = {
        a: 'foo',
        b: 12,
        c: 'bar'
    };
    let { a, b} = o;
    console.log(a);
    console.log(b);
}
{
    let o = {
        a: 'foo',
        b: 12,
        c: 'bar'
    };

    let { a, ...passthrough } = o
    let total = passthrough.b + passthrough.c.length

    console.log(a);
    console.log(total);
}

// 属性重命名
{
    let o = {
        a: 'foo',
        b: 12,
        c: 'bar'
    };

    let { a: newName1, b: newName2 } = o

    console.log(newName1);
    console.log(newName2);
}

// 函数声明
{
    type C = { a: string, b?: number };
    function f({a, b}: C) {
        // ...
    }
}

// 展开
{
    let first = [1, 2];
    let second = [3, 4];
    let bothPlus = [0, ...first, ...second, 5];
    console.log(bothPlus);
}
{
    let defaults = { food: 'spicy', price: '$10', ambiance: 'noisy' };
    let search = { ...defaults, food: 'rich' };
    console.log(search);
}
{
    let defaults = { food: 'spicy', price: '$10', ambiance: 'noisy' }
    let search = { food: 'rich', ...defaults }
    console.log(search);
}