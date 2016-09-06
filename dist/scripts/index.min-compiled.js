"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}function _possibleConstructorReturn(e, t) {
  if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
}function _inherits(e, t) {
  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}function hasOwn(e, t) {}function helloWorldGenerator() {
  return regeneratorRuntime.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {case 0:
          return e.next = 2, "hello";case 2:
          return e.next = 4, "world";case 4:
          return e.abrupt("return", "ending");case 5:case "end":
          return e.stop();}
    }
  }, _marked[0], this);
}function compile(e) {
  var t = /<%=(.+?)%>/g,
      o = /<%([\s\S]+?)%>/g;e = e.replace(t, "`); \n  echo( $1 ); \n  echo(`").replace(o, "`); \n $1 \n  echo(`"), e = "echo(`" + e + "`);";var n = '(function parse(data){\n    var output = "";\n\n    function echo(html){\n      output += html;\n    }\n\n    ' + e + "\n\n    return output;\n  })";return n;
}function moudletest() {}function moudletest2() {}function moudletest3() {}function A() {
  this.foo = "hello";
}function foo() {
  var e = this;setTimeout(function () {
    console.log("id:", e.id);
  }, 100);
}function Timer() {
  var e = this;this.s1 = 0, this.s2 = 0, setInterval(function () {
    return e.s1++;
  }, 1e3), setInterval(function () {
    this.s2++;
  }, 1e3);
}function foo() {
  var e = this;setTimeout(function () {
    console.log("id:", e.id);
  }, 100);
}function foo() {
  var e = this;setTimeout(function () {
    console.log("id:", e.id);
  }, 100);
}var _createClass = function () {
  function e(e, t) {
    for (var o = 0; o < t.length; o++) {
      var n = t[o];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }return function (t, o, n) {
    return o && e(t.prototype, o), n && e(t, n), t;
  };
}(),
    a = 1,
    b = 2,
    c = 3;console.log(a, b, c);var Point = function () {
  function e() {
    var t = arguments.length <= 0 || void 0 === arguments[0] ? 10 : arguments[0],
        o = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1];_classCallCheck(this, e), this.x = t, this.y = o;
  }return _createClass(e, null, [{ key: "nihao", value: function value() {} }]), e;
}(),
    point = new Point();console.log(point.x);var _createClass = function () {
  function e(e, t) {
    for (var o = 0; o < t.length; o++) {
      var n = t[o];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }return function (t, o, n) {
    return o && e(t.prototype, o), n && e(t, n), t;
  };
}(),
    AA = function () {
  function e() {
    _classCallCheck(this, e), bianliang = "";
  }return _createClass(e, null, [{ key: "nihao", value: function value() {} }]), e;
}(),
    A = function e() {
  _classCallCheck(this, e), this.names = "a";
},
    B = function (e) {
  function t() {
    _classCallCheck(this, t);var e = _possibleConstructorReturn(this, Object.getPrototypeOf(t).call(this));return e.names = "b", e;
  }return _inherits(t, e), t;
}(A);B.__proto__ === A, B.prototype.__proto__ === A.prototype, Object.setPrototypeOf(B.prototype, A.prototype), B.prototype.__proto__ = A.prototype, Object.setPrototypeOf(B, A), B.__proto__ = A, A.__proto__ === Function.prototype, A.prototype.__proto__ === Object.prototype;var b_test = new B();b_test.xx = 10;var _createClass = function () {
  function e(e, t) {
    for (var o = 0; o < t.length; o++) {
      var n = t[o];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }return function (t, o, n) {
    return o && e(t.prototype, o), n && e(t, n), t;
  };
}(),
    Person = function () {
  function e() {
    _classCallCheck(this, e);
  }return _createClass(e, [{ key: "name", value: function value() {
      return this.first + " " + this.last;
    } }]), e;
}();bar.bind(foo), bar.apply(foo, rest);var hasOwnProperty = Object.prototype.hasOwnProperty,
    _marked = [helloWorldGenerator].map(regeneratorRuntime.mark),
    hw = helloWorldGenerator();hw.next(), hw.next(), hw.next(), hw.next();var template = "\n<ul>\n  <% for(var i=0; i < data.supplies.length; i++) { %>\n    <li><%= data.supplies[i] %></li>\n  <% } %>\n</ul>\n";echo("<ul>");for (var i = 0; i < data.supplies.length; i++) {
  echo("<li>"), echo(data.supplies[i]), echo("</li>");
}echo("</ul>");var evalExpr = /<%=(.+?)%>/g,
    expr = /<%([\s\S]+?)%>/g;template = template.replace(evalExpr, "`); \n  echo( $1 ); \n  echo(`").replace(expr, "`); \n $1 \n  echo(`"), template = "echo(`" + template + "`);";var script = '(function parse(data){\n  var output = "";\n\n  function echo(html){\n    output += html;\n  }\n\n  ' + template + "\n\n  return output;\n})",
    parse = eval(compile(template));div.innerHTML = parse({ supplies: ["broom", "mop", "cleaner"] });var _module_test = require("./module_test");console.log(_module_test.module_foo), Object.defineProperty(exports, "__esModule", { value: !0 }), exports.moudletest2 = moudletest2;var foo = exports.foo = "bar",
    foo = exports.foo = "bar";exports.moudletest3 = moudletest3;var obj = new Proxy({}, { get: function get(e, t, o) {
    return console.log("getting " + t + "!"), Reflect.get(e, t, o);
  }, set: function set(e, t, o, n) {
    return console.log("setting " + t + "!"), Reflect.set(e, t, o, n);
  } });obj.count = 1, ++obj.count;var mySymbol = Symbol("Symbol1");mySymbol = Symbol("Symbol2");var a = {};Object.defineProperty(a, mySymbol, { value: "Hello!" }), a[mySymbol];var COLOR_RED = Symbol(),
    s1 = Symbol.for("foo"),
    s2 = Symbol.for("foo"),
    FOO_KEY = Symbol.for("foo"),
    global;global[FOO_KEY] || (global[FOO_KEY] = new A()), module.exports = global[FOO_KEY], String.prototype.match(regexp), regexp[Symbol.match](void 0);var id = 21,
    timer = new Timer();setTimeout(function () {
  return console.log("s1: ", timer.s1);
}, 3100), setTimeout(function () {
  return console.log("s2: ", timer.s2);
}, 3100);

//# sourceMappingURL=index.min-compiled.js.map