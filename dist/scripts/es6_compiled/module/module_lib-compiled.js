'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moudletest2 = moudletest2;

exports.default = function () {
  console.log(module_foo);
};

/**
 * Created by Administrator on 2016/9/3.
 */
var module_foo = exports.module_foo = 'module_test.foo';
// 报错
function moudletest() {}
//export moudletest

// 正确
function moudletest2() {};

// 正确
function moudletest3() {}
exports.moudletest3 = moudletest3;

//# sourceMappingURL=module_lib-compiled.js.map