/**
 * 1 类型+[]
 */

let fibonacci:number[] = [1,2,3,4,5]

//let fibonacci:number[] = [1,2,"3"]// 不允许出现其他类型

// fibonacci.push("e");// 数组的方法参数也会根据定义时候的类型进行限制

/**数组泛型
 *
 */
let fibonacci2 :Array<number> = [1,2,3,4,5];

/**
 * 用接口表示数组
 *
 * NumberArray 表示：只要索引的类型是数字时，那么值的类型必须是数字。
 *
 * 虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。
 *
 * 不过有一种情况例外，那就是它常用来表示类数组。
 */
interface NumberArray{
    [index:number]:number;
}

/**
 * 类数组
 */

/**
 * any 在数组中的应用
 */

let list:any[] = ['xcatliu', 25 , {website:"http://xcateliu"}];