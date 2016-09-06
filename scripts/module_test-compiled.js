
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moudletest2 = moudletest2;
/**
 * Created by Administrator on 2016/9/3.
 */
var foo = exports.foo = 'bar';
var foo = exports.foo = 'bar';
// 报错
function moudletest() {}
//export moudletest

// 正确
function moudletest2() {};

// 正确
function moudletest3() {}
exports.moudletest3 = moudletest3;

//# sourceMappingURL=module_test-compiled.js.map