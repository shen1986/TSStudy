// 接口初探
{
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    var myObj = { size: 10, label: 'Size 10 Object' };
    printLabel(myObj);
}
;
{
    function printLabel2(labelledObj) {
        console.log(labelledObj.label);
    }
    var myObj = { size: 10, label: 'Size 10 Object' };
    printLabel2(myObj);
}
// 可选属性
{
    function createSquare(config) {
        var newSquare = { color: 'white', area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    var mySquare = createSquare({ color: 'black' });
}
// 可选属性可以检查拼写错误
{
    // interface Square {
    //     color: string;
    //     area: number;
    // }
    // interface SquareConfig {
    //     color?: string;
    //     width?: number;
    // }
    // function createSquare2(config: SquareConfig): Square {
    //     let newSquare = { color: 'white', area: 100 };
    //     if (config.cor) {
    //         newSquare.color = config.cor;
    //     }
    //     if (config.width) {
    //         newSquare.area = config.width * config.width;
    //     }
    //     return newSquare;
    // }
    // let mySquare = createSquare2({ color: 'black' });
}
// 只读属性
{
    var p1 = { x: 10, y: 20 };
    // p1.x = 20; error
}
// ReadonlyArray<>
{
    var a = [1, 2, 3, 4];
    var ro = a;
    // ro[0] = 12; error
    // ro.push(5); error
    // ro.length = 100; error
    // a = ro; error
    a = ro;
}
// 额外的属性检查
{
    function createSquare3(config) {
        var newSquare = { color: 'white', area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    // let mySquare = createSquare3({ colour: 'red', width: 100 })
    var squareOptions = { colour: 'red', width: 100 };
    var mySquare = createSquare(squareOptions);
}
// 函数类型
{
    var mySeach = void 0;
    mySeach = function (source, subString) {
        var result = source.search(subString);
        return result > -1;
    };
}
