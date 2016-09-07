"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
注意安装babel运行环境
 http://www.cnblogs.com/diligenceday/p/5453523.html
一个是项目内,一个是全局运行环境

配置watcher 参数

* cmd 进入此项目后,运行babel-node 文件,测试结果
*
* */
var a = 1;
var b = 2;
var c = 3;

console.log(a, b, c);

var Point = function () {
    function Point() {
        var x = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];
        var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

        _classCallCheck(this, Point);

        this.x = x;
        this.y = y;
    }

    _createClass(Point, null, [{
        key: "nihao",
        value: function nihao() {}
    }]);

    return Point;
}();

var point = new Point();
console.log(point.x);