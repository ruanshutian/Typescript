/**
 *
 */

interface Person{
    name:string;
    age:number;
}
//实例化对象的属性数量类型要一致
let tom:Person = {
    name:"Tom",
    age:25,
}

/**
 * 可选属性
 */
interface Person2{
    name:string;
    age?:number;//可选属性
}
let tom2 :Person2 = {
    name:"Tome",
    //仍然不允许添加未定义的属性
}

/**任意属性
 *
 */

interface Person3{
    name:string;
    age?:number;
    [propName1:string]:any;
}
let tom3:Person3 ={
    name:"tom",
    gender:"male"
}

/**
 * 只读属性
 */
interface Person4{
    readonly id:number,
    name:string,
    age?:number;
    [pro:string]:any;
}
let tom4 :Person4 = {
    id:455,
    name:"Tom",
    x:1,
}
// tom4.id =1; //只读属性不可以更改





