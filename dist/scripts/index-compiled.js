"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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

//# sourceMappingURL=babel-es6-compiled.js.map
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

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/**
 * Created by Administrator on 2016/8/31.
 */
//======prototype test ======
var AA = function () {
    _createClass(AA, null, [{
        key: "nihao",

        //static bianliang2 ;//es6 无法申请静态属性;
        value: function nihao() {}
    }]);

    //var bianliang3 = "";//无法在构造函数外生命变量
    function AA() {
        _classCallCheck(this, AA);

        bianliang = ""; //声明全局变量
        var bianlinag4 = ""; //声明局部变量
    }

    return AA;
}();

;

var A = function A() {
    _classCallCheck(this, A);

    this.names = "a";
};

var B = function (_A) {
    _inherits(B, _A);

    function B() {
        _classCallCheck(this, B);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(B).call(this));

        _this.names = "b";
        return _this;
    }

    return B;
}(A);

B.__proto__ === A; // true
B.prototype.__proto__ === A.prototype; // true
//---------------------
Object.setPrototypeOf(B.prototype, A.prototype);
// 等同于
B.prototype.__proto__ = A.prototype;

Object.setPrototypeOf(B, A);
// 等同于
B.__proto__ = A;

//======extends test ======


A.__proto__ === Function.prototype; // true
A.prototype.__proto__ === Object.prototype; // true

//======增删改查 属性========
//------查找------
//查：优先去实例对象上寻找是否有该属性，若没有，则再去其对应的原型上去寻找该属性，若都没有，则返回undefined
//-----增加------
var b_test = new B();
b_test.xx = 10;
//------查找------
/*
* 删：delete仅仅能删除实例对象的属性，即构造函数原有的自己的属性和后来实例对象增添的属性，还有关于delete的一点需注意，delete无法删除原型的属性和用var定义的变量（即非window的属性）
* */
//------修改------
//改：更改实例对象的属性，则仅仅更改实例对象的属性值；更改原型的属性值，则更改原型的属性值，继承该原型的对象对应属性值也会被更改;
//======继承方式======
//http://www.cnblogs.com/Walker-lyl/p/5592048.html

//# sourceMappingURL=class_test-compiled.js.map
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

/**
 * Created by Administrator on 2016/9/1.
 */
var Person = function () {
    function Person() {
        _classCallCheck(this, Person);
    }

    _createClass(Person, [{
        key: "name",

        //  @readonly es7 支持
        value: function name() {
            return this.first + " " + this.last;
        }
    }]);

    return Person;
}();

//# sourceMappingURL=Decorator_test-compiled.js.map
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
'use strict';

var _marked = [helloWorldGenerator].map(regeneratorRuntime.mark);

/**
 * Created by Administrator on 2016/8/30.
 */
//======基本测试======
function helloWorldGenerator() {
    return regeneratorRuntime.wrap(function helloWorldGenerator$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 'hello';

                case 2:
                    _context.next = 4;
                    return 'world';

                case 4:
                    return _context.abrupt('return', 'ending');

                case 5:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}
var hw = helloWorldGenerator(); //返回一个指向内部指针的指针对象
hw.next();
// { value: 'hello', done: false }

hw.next();
// { value: 'world', done: false }

hw.next();
// { value: 'ending', done: true }

hw.next();
// { value: undefined, done: true }

//# sourceMappingURL=Generator_test-compiled.js.map
'use strict';

/**
 * Created by Administrator on 2016/8/19.
 */
var template = '\n<ul>\n  <% for(var i=0; i < data.supplies.length; i++) { %>\n    <li><%= data.supplies[i] %></li>\n  <% } %>\n</ul>\n';

echo('<ul>');
for (var i = 0; i < data.supplies.length; i++) {
    echo('<li>');
    echo(data.supplies[i]);
    echo('</li>');
};
echo('</ul>');

var evalExpr = /<%=(.+?)%>/g;
var expr = /<%([\s\S]+?)%>/g;

template = template.replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`').replace(expr, '`); \n $1 \n  echo(`');

template = 'echo(`' + template + '`);';

var script = '(function parse(data){\n  var output = "";\n\n  function echo(html){\n    output += html;\n  }\n\n  ' + template + '\n\n  return output;\n})';

//return scripts;

function compile(template) {
    var evalExpr = /<%=(.+?)%>/g;
    var expr = /<%([\s\S]+?)%>/g;

    template = template.replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`').replace(expr, '`); \n $1 \n  echo(`');

    template = 'echo(`' + template + '`);';

    var script = '(function parse(data){\n    var output = "";\n\n    function echo(html){\n      output += html;\n    }\n\n    ' + template + '\n\n    return output;\n  })';

    return script;
}

var parse = eval(compile(template));
div.innerHTML = parse({ supplies: ["broom", "mop", "cleaner"] });
//   <ul>
//     <li>broom</li>
//     <li>mop</li>
//     <li>cleaner</li>
//   </ul>

//# sourceMappingURL=moban-compiled.js.map
'use strict';

var _module_test = require('./module_test');

{
    console.log(_module_test.module_foo);
} /**
   * Created by Administrator on 2016/9/3.
   */

//# sourceMappingURL=module_test2-compiled.jsd.js.map

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
"use strict";

/**
 * Created by Administrator on 2016/8/27.
 */
/*
*创建get set 方法
*
*
* */
//======
var obj = new Proxy({}, {
    get: function get(target, key, receiver) {
        console.log("getting " + key + "!");
        return Reflect.get(target, key, receiver);
    },
    set: function set(target, key, value, receiver) {
        console.log("setting " + key + "!");
        return Reflect.set(target, key, value, receiver);
    }
});
obj.count = 1;
//  setting count!
++obj.count;
//  getting count!
//  setting count!
//  2
//======Reflect======

//# sourceMappingURL=Proxy_test-compiled.js.map
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

//# sourceMappingURL=this_test-compiled.js.map

//# sourceMappingURL=index-compiled.js.map