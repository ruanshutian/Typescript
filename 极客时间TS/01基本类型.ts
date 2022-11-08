/**原始类型
 *
 */
let bool:boolean =true;
let num:number = 123;
let str:string = "rst";
// str =123; //变量的数据类型不可以改变

/**
 * 数据
 */
let arr1 :number[] = [1,2,3];
let arr2:Array<number |string> = [1,2,3,4,"rst"];

/**
 * 元祖
 */
let tuple:[number,string]=[0,'1'];
tuple.push(2);//可以添加    不建议使用
console.log(tuple);
// tuple[2];//不可以进行越界访问

/**
 * 函数
 */
let add =(x:number , y:number):number =>x+y;
let add2 =(x:number , y:number) =>x+y; //类型推断

let compute:(x:number , y:number)=>number;
compute = (a,b) =>a+b;
// compute = (c,d)=>{c+d};

/**
 * 对象
 */
// let obj :object = {x:1,y:2};
let obj :{x:number,y:number} = {x:1,y:2};
obj.x =3;

/**
 * symbol
 */
// let s1:symbol =Symbol();
// let s2 =Symbol();
// console.log(s1 ==s2)

/**
 * undefined  ,null
 */
let un:undefined = undefined;
let nu:null = null;
num = undefined;
num = null

/**
 * void
 */
let noReturn = ()=>{}

/**
 * any
 */
let x;
x =1;
x = [];
x=()=>{}

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

/**
 * 枚举
 */
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
