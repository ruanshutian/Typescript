interface List{
    id:number;
    name:string;
}
interface Result{
    data:List[];
}
function render(result:Result){
    result.data.forEach((value)=>{
        console.log(value.id, value.name);
    })
}
let result ={
    data:[
        {id:1,name:"A",sex :"male"},
        {id:2,name:"B"}
    ]
}
// 1 直接字面量会出错，类型检查
// render({
//     data:[
//         {id:1,name:"A",sex :"male"},
//         {id:2,name:"B"}
//     ]
// });

// 变量赋值给变量，然后就可以绕过类型检查
render(result);
//as 该类型  明确告诉对象就是该类型，告诉编译器类型
render({
    data:[
        {id:1,name:"A",sex :"male"},
        {id:2,name:"B"}
    ]
} as Result);
render(<Result>{
    data:[
        {id:1,name:"A",sex :"male"},
        {id:2,name:"B"}
    ]
} );//方式二，但是不建议使用，和react冲突

