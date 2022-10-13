/**
 * object
 */
let a:object;

//{}指定对象中可以包含哪些属性
//属性后面加？表示可选
let b:{name:string ,age?:number};
b = {name:"rst"};
b = {name:"rst", age:18};

// [propName:string]:any 表示任意类型的属性
let c : {name :string, [propName:string]:any};
c  = {name:"sss" , age:13};
c  = {name:"sss" , age:13 , position:"神仙"};

/**
 * 定义函数的类型结构
 * （形参：类型，行参：类型...）=>返回值类型
 */
let d :(a:number,b:number)=>number;
d = function (n1,n2):number{
    return n1+n2;
}


/**
 * array
 *  类型 【】
 *  Array<类型>
 */
let e:string[];
e = ['a', 'b', 'c'];
let g:Array<number>;
g = [1,2,3];


/**
 * 元组，就是固定长度的数组
 *
 */
let h :[string,string];
h = ["hello","rst"];

let h2 :[string,number];
h2 = ["hello",123];


/**
 * enum 枚举
 */
enum Gender{
    Male ,
    Female
}
let i :{name:string , gender:Gender};
i = {
    name:"rst",
    gender:Gender.Male
}


/**
 * &
 */
let j :{name:string}&{age:number}
j = {name:"rst",age:18};
/**
 * 别名
 */

type myType = 1|2|3|4|5;
let k :myType;
k =1;k=2;k=5;









