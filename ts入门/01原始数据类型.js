/**
 * 原始数据类型
 *
 * boolean
 */
var isDone = false;
//构造函数Boolean创造的对象不是布尔值
// let createdByNewBoolean: boolean = new Boolean(1);
var createdByNewBoolean = new Boolean(1);
var createdByBoolean = Boolean(1);
/**
 * number
 */
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
/**
 * string
 */
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is ".concat(myName, ".\nI'll be ").concat(myAge + 1, " years old next month.");
/**
 * 空值
 */
function alertName() {
    alert('My name is Tom');
}
var unusable = undefined;
/**
 * Null 和 Undefined§
 */
var u = undefined;
var n = null;
// 这样不会报错
var num = undefined;
// 这样也不会报错
var u1;
var num1 = u1;
// let u2: void;
// let num2: number = u2;
// // Type 'void' is not assignable to type 'number'.
