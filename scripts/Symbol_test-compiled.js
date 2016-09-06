"use strict";

/**
 * Created by Administrator on 2016/8/26.
 */
/*
*创建一个项目中不重复的字符串,
*再函数或对象内,不能被遍历的变量
*定义实例内部私有变量,外部不可调用
*创建一个单例
*
* */
//======定义一个不重复的变量内容======
var mySymbol = Symbol("Symbol1");
mySymbol = Symbol("Symbol2");

// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol]; // "Hello!
//=====定义常量======
var COLOR_RED = Symbol();
//====获取存在的symbol 值======
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');

s1 === s2; // true

//======创建单例======
// mod.js
var FOO_KEY = Symbol.for('foo');

function A() {
    this.foo = 'hello';
}
var global;
if (!global[FOO_KEY]) {
    global[FOO_KEY] = new A();
}
module.exports = global[FOO_KEY];

//======内部函数======
String.prototype.match(regexp);
// 等同于
regexp[Symbol.match](undefined);

//# sourceMappingURL=Symbol_test-compiled.js.map