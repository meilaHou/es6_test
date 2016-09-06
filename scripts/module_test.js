/**
 * Created by Administrator on 2016/9/3.
 */
export var module_foo = 'module_test.foo';
// 报错
function moudletest() {}
//export moudletest

// 正确
export function moudletest2() {};

// 正确
function moudletest3() {}
export {moudletest3};
