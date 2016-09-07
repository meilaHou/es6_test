/**
 * Created by Administrator on 2016/9/3.
 */
//import 'core-js/shim';
export const module_foo = 'module_lib:默认方法执行输出';
//module_foo = "ddf";
// 报错
function moudletest() {}
//export moudletest

// 正确
export function moudletest2() {};

// 正确
function moudletest3() {}
export {moudletest3};

//======默认导出=====
export default function(){
    console.log(module_foo);
}
//======导出class======
export class module_class {
    constructor() {

    }
    say(){
    console.log("module_class : 导出class调用");
}
}