/**
 * 类与接口
 * 类实现接口
 */

interface Alarm{
    alert():void;
}
class Door{

}
interface Light {
    lightOn(): void;
    lightOff(): void;
}
class SecurityDoor extends Door implements Alarm{
    alert() {
        console.log("SecurityDoor alert")
    }
}
class Car implements Alarm,Light{
    alert() {
        console.log("car alert")
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}

//接口继承接口
//接口继承类  常见的面向对象语言中，接口是不能继承类的，但是在 TypeScript 中却是可以的：












