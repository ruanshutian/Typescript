/**函数声明
 *
 */
//函数声明
//函数表达式


function sum(x:number, y:number):number{
    return x+y;
}
//sum(1,2,3);//输入多余（少了或者多了）参数是不被允许的
sum(1,2);

/**
 * 函数表达式
 */
let mySum = function (x:number, y:number):number{
    return x + y;
}
let sum2 :(x:number , y:number)=>number = function (x:number,y:number):number{
    return x+y;
}

/**
 * 用接口定义函数的形状
 */

interface searchFunc{
    (source:string, subString:string) :boolean;
}

let mySearch2:searchFunc;
mySearch2 = function (source, subString){
    return source.search(subString)!==1;
}

/**
 * 可选参数
 */

function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

//可选参数后面不允许再出现必需参数了

/**参数默认值
 * 我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数：
 * 此时就不受「可选参数必须接在必需参数后面」的限制了：
 */

function buildName2(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat2 = buildName2('Tom', 'Cat');
let tom2 = buildName2('Tom');

/**剩余参数
 *
 */
function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a: any[] = [];
push(a, 1, 2, 3);

/** 重载
 * 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
 */

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}



