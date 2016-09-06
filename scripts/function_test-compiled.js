"use strict";

/**
 * Created by Administrator on 2016/8/25.
 */
//=======函数绑定=========
//foo::bar;
// 等同于
bar.bind(foo);

//foo::bar(...rest);
// 等同于
bar.apply(foo, rest);

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {}
//return obj::hasOwnProperty(key);

//======尾调用优化======

//# sourceMappingURL=function_test-compiled.js.map