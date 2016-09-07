"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.moudletest2 = moudletest2;

exports.default = function () {
    console.log(module_foo);
};

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Administrator on 2016/9/3.
 */
//import 'core-js/shim';
var module_foo = exports.module_foo = 'module_lib:默认方法执行输出';
// 报错
function moudletest() {}
//export moudletest

// 正确
function moudletest2() {};

// 正确
function moudletest3() {}
exports.moudletest3 = moudletest3;

//======默认导出=====

//======导出class======
var module_class = exports.module_class = function () {
    function module_class() {
        _classCallCheck(this, module_class);
    }

    _createClass(module_class, [{
        key: "say",
        value: function say() {
            console.log("module_class : 导出class调用");
        }
    }]);

    return module_class;
}();