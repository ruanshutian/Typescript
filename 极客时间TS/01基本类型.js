/**原始类型
 *
 */
var bool = true;
var num = 123;
var str = "rst";
// str =123; //变量的数据类型不可以改变
/**
 * 数据
 */
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3, 4, "rst"];
/**
 * 元祖
 */
var tuple = [0, '1'];
tuple.push(2); //可以添加    不建议使用
console.log(tuple);
// tuple[2];//不可以进行越界访问
/**
 * 函数
 */
var add = function (x, y) { return x + y; };
var add2 = function (x, y) { return x + y; }; //类型推断
var compute;
compute = function (a, b) { return a + b; };
// compute = (c,d)=>{c+d};
/**
 * 对象
 */
// let obj :object = {x:1,y:2};
var obj = { x: 1, y: 2 };
obj.x = 3;
/**
 * symbol
 */
// let s1:symbol =Symbol();
// let s2 =Symbol();
// console.log(s1 ==s2)
/**
 * undefined  ,null
 */
var un = undefined;
var nu = null;
num = undefined;
num = null;
/**
 * void
 */
var noReturn = function () { };
/**
 * any
 */
var x;
x = 1;
x = [];
x = function () { };
/**
 * never  永远不会又返回值
 * 1、抛出异常
 * 2、死循环
 */
// let error =()=>{
//     throw new Error("error");
// }
// let endless = ()=>{
//     while (true){}
// }
//
