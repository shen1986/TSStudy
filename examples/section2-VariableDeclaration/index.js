var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// let
{
    var hello = 'Hello!';
}
// const
{
    var numLivesForCat = 9;
}
// 解构
{
    var input = [1, 2];
    var first = input[0], second = input[1];
    console.log(first);
    console.log(second);
}
{
    var _a = [1, 2, 3, 4], first = _a[0], rest = _a.slice(1);
    console.log(first);
    console.log(rest);
}
// 对象解构
{
    var o = {
        a: 'foo',
        b: 12,
        c: 'bar'
    };
    var a = o.a, b = o.b;
    console.log(a);
    console.log(b);
}
{
    var o = {
        a: 'foo',
        b: 12,
        c: 'bar'
    };
    var a = o.a, passthrough = __rest(o, ["a"]);
    var total = passthrough.b + passthrough.c.length;
    console.log(a);
    console.log(total);
}
// 属性重命名
{
    var o = {
        a: 'foo',
        b: 12,
        c: 'bar'
    };
    var newName1 = o.a, newName2 = o.b;
    console.log(newName1);
    console.log(newName2);
}
// 函数声明
{
    function f(_a) {
        var a = _a.a, b = _a.b;
        // ...
    }
}
// 展开
{
    var first = [1, 2];
    var second = [3, 4];
    var bothPlus = [0].concat(first, second, [5]);
    console.log(bothPlus);
}
{
    var defaults = { food: 'spicy', price: '$10', ambiance: 'noisy' };
    var search = __assign({}, defaults, { food: 'rich' });
    console.log(search);
}
{
    var defaults = { food: 'spicy', price: '$10', ambiance: 'noisy' };
    var search = __assign({ food: 'rich' }, defaults);
    console.log(search);
}
