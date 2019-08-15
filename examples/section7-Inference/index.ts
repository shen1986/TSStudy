// 基础
{
    let x = 3;
}

// 最佳通用类型
{
    let x = [0, 1, null]
}

{
    class Animal {
        numLegs: number
    }

    class Bee extends Animal {

    }

    class Lion extends Animal {

    }

    // let zoo = [new Bee(), new Lion()];  (Bee | Lion)[]
    let zoo: Animal[] = [new Bee(), new Lion()]
}

// 上下文类型
{
    // window.onmousedown = function(event) {
    //     console.log(event.clickTime) // Error
    // }

    window.onmousedown = function( event: any ) {
        console.log(event.clickTime);
    }
}