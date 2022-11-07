/**
 * 泛型 ：指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
 */
//简单的例子
function createArray1(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray1(3, 'x');
function createArray2(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray2(3, 'x');
console.log(createArray2(3, 'x'));
/**
 * 多个类型参数
 */
function swap(tuple) {
    console.log(tuple[1]);
    console.log(tuple[0]);
    return [tuple[1], tuple[0]];
}
var test = [7, "seven"];
console.log(swap(test));
// console.log([7,"seven"])
