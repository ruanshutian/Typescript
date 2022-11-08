/**
 * 数字枚举
 */
enum Role {
    Reportor = 1,
    Developer,
    Maintauner,
    Owner,
    Guest
}

console.log(Role.Reportor);
console.log(Role);
/**
 * 字符串枚举
 */
enum Message{
    Succcess ="恭喜你，成功了",
    Fail = "抱歉，失效了"
}

/**
 * 异构枚举
 */
enum Answer {
    N,
    Y ="yes"
}

/**
 * 枚举成员
 * 1 、值不可以修改
 */
// Role.Reportor =2; //值不可以修改
enum Char {
    //const 常量成员
    a,
    b =Char.a,
    c = 1+3,
    //compute 需要被计算的成员
    d =Math.random(),
    e ='123'.length,
    // f  //compute后面的枚举成员必须要有初始值，否则报错
}

/**
 * 常量枚举
 */
const enum Month{
    Jan,Feb,Mar
}
let month = [Month.Jan,Month.Feb,Month.Mar];
console.log(month)

/**
 * 枚举类型
 */
enum E {a,b};
enum F {a = 0 ,b =1};
enum G {a="apple",b ='banan'};

let e :E =3;
let f:F =3;
console.log(e)
console.log(f)
// console.log(e===f);

let e1 :E.a =1;
let e2:E.b
// console.log(e1==e2) //类型不同不可以比较
let e3 :E.a =1;
let e4 :E.a =2;
console.log(e1===e3);
console.log(e1===e4);

//字符串枚举只能取自身成员
let g1:G =G.b
let g2:G.a =G.a;
// let g3:G ="aa";//字符串枚举只能取自身成员
console.log(g1,g2)