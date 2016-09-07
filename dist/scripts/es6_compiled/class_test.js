"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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