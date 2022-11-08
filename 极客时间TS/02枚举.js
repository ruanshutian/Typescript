/**
 * 数字枚举
 */
var Role;
(function (Role) {
    Role[Role["Reportor"] = 1] = "Reportor";
    Role[Role["Developer"] = 2] = "Developer";
    Role[Role["Maintauner"] = 3] = "Maintauner";
    Role[Role["Owner"] = 4] = "Owner";
    Role[Role["Guest"] = 5] = "Guest";
})(Role || (Role = {}));
console.log(Role.Reportor);
console.log(Role);
/**
 * 字符串枚举
 */
var Message;
(function (Message) {
    Message["Succcess"] = "\u606D\u559C\u4F60\uFF0C\u6210\u529F\u4E86";
    Message["Fail"] = "\u62B1\u6B49\uFF0C\u5931\u6548\u4E86";
})(Message || (Message = {}));
/**
 * 异构枚举
 */
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "yes";
})(Answer || (Answer = {}));
/**
 * 枚举成员
 * 1 、值不可以修改
 */
// Role.Reportor =2; //值不可以修改
var Char;
(function (Char) {
    //const 常量成员
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 4] = "c";
    //compute 需要被计算的成员
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = '123'.length] = "e";
    // f  //compute后面的枚举成员必须要有初始值，否则报错
})(Char || (Char = {}));
var month = [0 /* Month.Jan */, 1 /* Month.Feb */, 2 /* Month.Mar */];
console.log(month);
/**
 * 枚举类型
 */
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {}));
;
var F;
(function (F) {
    F[F["a"] = 0] = "a";
    F[F["b"] = 1] = "b";
})(F || (F = {}));
;
var G;
(function (G) {
    G["a"] = "apple";
    G["b"] = "banan";
})(G || (G = {}));
;
var e = 3;
var f = 3;
console.log(e);
console.log(f);
// console.log(e===f);
var e1 = 1;
var e2;
// console.log(e1==e2) //类型不同不可以比较
var e3 = 1;
var e4 = 2;
console.log(e1 === e3);
console.log(e1 === e4);
//字符串枚举只能取自身成员
var g1 = G.b;
var g2 = G.a;
// let g3:G ="aa";//字符串枚举只能取自身成员
console.log(g1, g2);
