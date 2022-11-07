/**
 * 泛型 ：指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
 */

//简单的例子
function createArray1(length:number, value:any):Array<any>{
    let result = [];
    for(let i =0 ;i<length ;i++){
        result[i] =value;
    }
    return result;
}
createArray1(3,'x');

function createArray2<T>(length:number, value:T):Array<T>{
    let result:T[] = [];
    for(let i =0 ;i<length ;i++){
        result[i] =value;
    }
    return result;
}
createArray2<string>(3,'x');
console.log(createArray2<string>(3,'x'));

/**
 * 多个类型参数
 */
function swap<T,U>(tuple:[T,U]):[U,T]{
    // console.log(tuple[1]);
    // console.log(tuple[0]);
    return [tuple[1],tuple[0]];
}
let test :[number,string] = [7,"seven"];
console.log(swap(test));
// console.log([7,"seven"])


