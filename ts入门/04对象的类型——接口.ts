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

