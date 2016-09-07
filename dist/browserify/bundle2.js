(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

exports.moudletest2 = moudletest2;

exports.default = function () {
    console.log(module_foo);
};

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

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

},{}],2:[function(require,module,exports){
'use strict';

var _module_lib = require('./module_lib');

var _module_lib2 = _interopRequireDefault(_module_lib);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

(0, _module_lib2.default)(); /**
                              * Created by Administrator on 2016/9/3.
                              */

/*require('./module_test',function(a){
 console.log(a.module_foo);
});*/

{
  var temp = new _module_lib.module_class();
  temp.say();
}

},{"./module_lib":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0XFxzY3JpcHRzXFxlczZfY29tcGlsZWRcXG1vZHVsZVxcbW9kdWxlX2xpYi5qcyIsImRpc3RcXHNjcmlwdHNcXGVzNl9jb21waWxlZFxcbW9kdWxlXFxtb2R1bGVfdGVzdDIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDekMsV0FBTztBQURrQyxDQUE3Qzs7QUFJQSxJQUFJLGVBQWUsWUFBWTtBQUFFLGFBQVMsZ0JBQVQsQ0FBMEIsTUFBMUIsRUFBa0MsS0FBbEMsRUFBeUM7QUFBRSxhQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksTUFBTSxNQUExQixFQUFrQyxHQUFsQyxFQUF1QztBQUFFLGdCQUFJLGFBQWEsTUFBTSxDQUFOLENBQWpCLENBQTJCLFdBQVcsVUFBWCxHQUF3QixXQUFXLFVBQVgsSUFBeUIsS0FBakQsQ0FBd0QsV0FBVyxZQUFYLEdBQTBCLElBQTFCLENBQWdDLElBQUksV0FBVyxVQUFmLEVBQTJCLFdBQVcsUUFBWCxHQUFzQixJQUF0QixDQUE0QixPQUFPLGNBQVAsQ0FBc0IsTUFBdEIsRUFBOEIsV0FBVyxHQUF6QyxFQUE4QyxVQUE5QztBQUE0RDtBQUFFLEtBQUMsT0FBTyxVQUFVLFdBQVYsRUFBdUIsVUFBdkIsRUFBbUMsV0FBbkMsRUFBZ0Q7QUFBRSxZQUFJLFVBQUosRUFBZ0IsaUJBQWlCLFlBQVksU0FBN0IsRUFBd0MsVUFBeEMsRUFBcUQsSUFBSSxXQUFKLEVBQWlCLGlCQUFpQixXQUFqQixFQUE4QixXQUE5QixFQUE0QyxPQUFPLFdBQVA7QUFBcUIsS0FBaE47QUFBbU4sQ0FBOWhCLEVBQW5COztBQUVBLFFBQVEsV0FBUixHQUFzQixXQUF0Qjs7QUFFQSxRQUFRLE9BQVIsR0FBa0IsWUFBWTtBQUMxQixZQUFRLEdBQVIsQ0FBWSxVQUFaO0FBQ0gsQ0FGRDs7QUFJQSxTQUFTLGVBQVQsQ0FBeUIsUUFBekIsRUFBbUMsV0FBbkMsRUFBZ0Q7QUFBRSxRQUFJLEVBQUUsb0JBQW9CLFdBQXRCLENBQUosRUFBd0M7QUFBRSxjQUFNLElBQUksU0FBSixDQUFjLG1DQUFkLENBQU47QUFBMkQ7QUFBRTs7QUFFeko7OztBQUdBO0FBQ0EsSUFBSSxhQUFhLFFBQVEsVUFBUixHQUFxQixxQkFBdEM7QUFDQTtBQUNBLFNBQVMsVUFBVCxHQUFzQixDQUFFO0FBQ3hCOztBQUVBO0FBQ0EsU0FBUyxXQUFULEdBQXVCLENBQUU7O0FBRXpCO0FBQ0EsU0FBUyxXQUFULEdBQXVCLENBQUU7QUFDekIsUUFBUSxXQUFSLEdBQXNCLFdBQXRCOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxlQUFlLFFBQVEsWUFBUixHQUF1QixZQUFZO0FBQ2xELGFBQVMsWUFBVCxHQUF3QjtBQUNwQix3QkFBZ0IsSUFBaEIsRUFBc0IsWUFBdEI7QUFDSDs7QUFFRCxpQkFBYSxZQUFiLEVBQTJCLENBQUM7QUFDeEIsYUFBSyxLQURtQjtBQUV4QixlQUFPLFNBQVMsR0FBVCxHQUFlO0FBQ2xCLG9CQUFRLEdBQVIsQ0FBWSwwQkFBWjtBQUNIO0FBSnVCLEtBQUQsQ0FBM0I7O0FBT0EsV0FBTyxZQUFQO0FBQ0gsQ0FieUMsRUFBMUM7OztBQ25DQTs7QUFFQSxJQUFJLGNBQWMsUUFBUSxjQUFSLENBQWxCOztBQUVBLElBQUksZUFBZSx1QkFBdUIsV0FBdkIsQ0FBbkI7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFNBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7O0FBRS9GLENBQUMsR0FBRyxhQUFhLE9BQWpCLEksQ0FBNkI7Ozs7QUFJN0I7Ozs7QUFJQTtBQUNFLE1BQUksT0FBTyxJQUFJLFlBQVksWUFBaEIsRUFBWDtBQUNBLE9BQUssR0FBTDtBQUNEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmV4cG9ydHMubW91ZGxldGVzdDIgPSBtb3VkbGV0ZXN0MjtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKG1vZHVsZV9mb28pO1xufTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE2LzkvMy5cclxuICovXG4vL2ltcG9ydCAnY29yZS1qcy9zaGltJztcbnZhciBtb2R1bGVfZm9vID0gZXhwb3J0cy5tb2R1bGVfZm9vID0gJ21vZHVsZV9saWI66buY6K6k5pa55rOV5omn6KGM6L6T5Ye6Jztcbi8vIOaKpemUmVxuZnVuY3Rpb24gbW91ZGxldGVzdCgpIHt9XG4vL2V4cG9ydCBtb3VkbGV0ZXN0XG5cbi8vIOato+ehrlxuZnVuY3Rpb24gbW91ZGxldGVzdDIoKSB7fTtcblxuLy8g5q2j56GuXG5mdW5jdGlvbiBtb3VkbGV0ZXN0MygpIHt9XG5leHBvcnRzLm1vdWRsZXRlc3QzID0gbW91ZGxldGVzdDM7XG5cbi8vPT09PT096buY6K6k5a+85Ye6PT09PT1cblxuLy89PT09PT3lr7zlh7pjbGFzcz09PT09PVxudmFyIG1vZHVsZV9jbGFzcyA9IGV4cG9ydHMubW9kdWxlX2NsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIG1vZHVsZV9jbGFzcygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIG1vZHVsZV9jbGFzcyk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKG1vZHVsZV9jbGFzcywgW3tcbiAgICAgICAga2V5OiBcInNheVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2F5KCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJtb2R1bGVfY2xhc3MgOiDlr7zlh7pjbGFzc+iwg+eUqFwiKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBtb2R1bGVfY2xhc3M7XG59KCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX21vZHVsZV9saWIgPSByZXF1aXJlKCcuL21vZHVsZV9saWInKTtcblxudmFyIF9tb2R1bGVfbGliMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21vZHVsZV9saWIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4oMCwgX21vZHVsZV9saWIyLmRlZmF1bHQpKCk7IC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE2LzkvMy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuLypyZXF1aXJlKCcuL21vZHVsZV90ZXN0JyxmdW5jdGlvbihhKXtcclxuIGNvbnNvbGUubG9nKGEubW9kdWxlX2Zvbyk7XHJcbn0pOyovXG5cbntcbiAgdmFyIHRlbXAgPSBuZXcgX21vZHVsZV9saWIubW9kdWxlX2NsYXNzKCk7XG4gIHRlbXAuc2F5KCk7XG59Il19
