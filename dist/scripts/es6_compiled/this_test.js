'use strict';

/**
 * Created by Administrator on 2016/8/25.
 */
//=======箭头函数中的this========
//这里的this指的是调用时指定的函数,不管有没有延迟,程序this指向有没有改变;
function foo() {
    var _this2 = this;

    setTimeout(function () {
        console.log('id:', _this2.id);
    }, 100);
}
var id = 21;
//foo.call({ id: 42 });
// id: 42
//=======箭头函数和普通函数中的this====
//箭头函数指向定义时作用域
//普通函数指向运行时作用域
function Timer() {
    var _this3 = this;

    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数
    setInterval(function () {
        return _this3.s1++;
    }, 1000);
    // 普通函数
    setInterval(function () {
        this.s2++;
    }, 1000);
}

var timer = new Timer();

setTimeout(function () {
    return console.log('s1: ', timer.s1);
}, 3100);
setTimeout(function () {
    return console.log('s2: ', timer.s2);
}, 3100);
// s1: 3
// s2: 0
//=========this的转化=======
//箭头函数没有自己的this,arguments、super、new.target变量
//另外，由于箭头函数没有自己的this，所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向。
// ES6
function foo() {
    var _this4 = this;

    setTimeout(function () {
        console.log('id:', _this4.id);
    }, 100);
}
// ES5
function foo() {
    var _this = this;
    setTimeout(function () {
        console.log('id:', _this.id);
    }, 100);
}