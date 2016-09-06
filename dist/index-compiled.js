/**
 * Created by Administrator on 2016/8/17.
 */
"use strict";

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var dfsd = 0;

var Point = function () {
    function Point() {
        var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
        var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

        _classCallCheck(this, Point);

        dfsd = 10;
        this.x = x;
        this.y = y;
    }

    _createClass(Point, null, [{
        key: "nihao",
        value: function nihao() {}
    }]);

    return Point;
}();

var testlet = "dfssdf";
window.onload = function () {
    "use strict";

    var point = new Point(1, 2);
    // alert(point.x+":"+point.y+":"+testlet);

    document.getElementById('result').innerHTML = "\nThere are <b>121</b> items\n   in your basket, <em>12121</em>\n  are on sale!\n";
};

function foo(_ref) {
    var a = _ref.x;
    var _ref$y = _ref.y;
    var y = _ref$y === undefined ? 5 : _ref$y;

    console.log(a, y);
}
var foo2 = 'outer';

function bar() {
    var func = arguments.length <= 0 || arguments[0] === undefined ? function (x) {
        return foo2;
    } : arguments[0];

    var foo = 'inner';
    console.log(func()); // outer
}
function throwIfMiss() {
    throw new Error("参数不能为空");
}
function func1() {
    var param1 = arguments.length <= 0 || arguments[0] === undefined ? throwIfMiss() : arguments[0];

    return param1;
}
//测试用
{
    //alert(testlet);
    /*
     //字符串中嵌入变量
     var name = "Bob", time = "today";
     console.log(`Hello ${name}, how are you ${time}?`);
     */
    //console.log((function(){return 1+1;})());
    //foo({x: 1, y: 2}) // 1, 2
    // console.log(((x)=>x+10)(2));
    //func1();
    // bar();
    console.log([1, 2, 3].map(function (x) {
        return x * x;
    }));
}

//# sourceMappingURL=index-compiled.js.map