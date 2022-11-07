/**
 * 原始数据类型
 *
 * boolean
 */
let isDone :boolean = false;
//构造函数Boolean创造的对象不是布尔值
// let createdByNewBoolean: boolean = new Boolean(1);
let createdByNewBoolean: Boolean = new Boolean(1);
let createdByBoolean: boolean = Boolean(1);

/**
 * number
 */
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

/**
 * string
 */
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

/**
 * 空值
 */
function alertName(): void {
    alert('My name is Tom');
}
let unusable: void = undefined;

/**
 * Null 和 Undefined§
 */
let u: undefined = undefined;
let n: null = null;


// 这样不会报错
let num: number = undefined;
// 这样也不会报错
let u1: undefined;
let num1: number = u1;
// let u2: void;
// let num2: number = u2;
// // Type 'void' is not assignable to type 'number'.
