var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * ES6 中类的用法§
 */
//属性和方法
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayHi = function () {
        console.log("my name is ".concat(this.name));
    };
    return Animal;
}());
var a = new Animal("s");
console.log(a.sayHi());
//类的继承
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    Cat.prototype.sayHi = function () {
        _super.prototype.sayHi.call(this);
    };
    return Cat;
}(Animal));
var b = new Cat();
b.name = 'dddd';
console.log(b.name);
//存取器  getter 和 setter
//静态方法  静态方法，它们不需要实例化，而是直接通过类来调用
/**
 * ES7 中类的用法
 */
//ES6 中实例的属性只能通过构造函数中的 this.xxx 来定义，ES7 提案中可以直接在类里面定义：
//ES7 提案中，可以使用 static 定义一个静态属性：
var Animal2 = /** @class */ (function () {
    function Animal2() {
        this.name = 'Jack';
        // ...
    }
    Animal2.num = 42;
    return Animal2;
}());
var a2 = new Animal2();
console.log(a2.name); // Jack
console.log(Animal2.num);
/**
 * TypeScript 中类的用法
 * public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
 * private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
 * protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
 */
//参数属性§
//修饰符和readonly还可以使用在构造函数参数中，等同于类中定义该属性同时给该属性赋值，使代码更简洁。
/**
 *  抽象类
 * 抽象类是不允许被实例化的：
 * 抽象类中的抽象方法必须被子类实现
 */
// 类的类型
