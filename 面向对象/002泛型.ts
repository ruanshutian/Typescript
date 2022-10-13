/**
 * 泛型 ：指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
 */

//简单的例子
// function createArray(length:number, value:any):Array<any>{
//     let result = [];
//     for(let i =0 ;i<length ;i++){
//         result[i] =value;
//     }
//     return result;
// }
// createArray(3,'x');
function createArray<T>(length:number, value:T):Array<T>{
    let result:T[] = [];
    for(let i =0 ;i<length ;i++){
        result[i] =value;
    }
    return result;
}
createArray<string>(3,'x');





