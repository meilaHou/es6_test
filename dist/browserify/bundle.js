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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0XFxzY3JpcHRzXFxlczZfY29tcGlsZWRcXG1vZHVsZVxcbW9kdWxlX2xpYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUN6QyxXQUFPO0FBRGtDLENBQTdDOztBQUlBLElBQUksZUFBZSxZQUFZO0FBQUUsYUFBUyxnQkFBVCxDQUEwQixNQUExQixFQUFrQyxLQUFsQyxFQUF5QztBQUFFLGFBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxNQUFNLE1BQTFCLEVBQWtDLEdBQWxDLEVBQXVDO0FBQUUsZ0JBQUksYUFBYSxNQUFNLENBQU4sQ0FBakIsQ0FBMkIsV0FBVyxVQUFYLEdBQXdCLFdBQVcsVUFBWCxJQUF5QixLQUFqRCxDQUF3RCxXQUFXLFlBQVgsR0FBMEIsSUFBMUIsQ0FBZ0MsSUFBSSxXQUFXLFVBQWYsRUFBMkIsV0FBVyxRQUFYLEdBQXNCLElBQXRCLENBQTRCLE9BQU8sY0FBUCxDQUFzQixNQUF0QixFQUE4QixXQUFXLEdBQXpDLEVBQThDLFVBQTlDO0FBQTREO0FBQUUsS0FBQyxPQUFPLFVBQVUsV0FBVixFQUF1QixVQUF2QixFQUFtQyxXQUFuQyxFQUFnRDtBQUFFLFlBQUksVUFBSixFQUFnQixpQkFBaUIsWUFBWSxTQUE3QixFQUF3QyxVQUF4QyxFQUFxRCxJQUFJLFdBQUosRUFBaUIsaUJBQWlCLFdBQWpCLEVBQThCLFdBQTlCLEVBQTRDLE9BQU8sV0FBUDtBQUFxQixLQUFoTjtBQUFtTixDQUE5aEIsRUFBbkI7O0FBRUEsUUFBUSxXQUFSLEdBQXNCLFdBQXRCOztBQUVBLFFBQVEsT0FBUixHQUFrQixZQUFZO0FBQzFCLFlBQVEsR0FBUixDQUFZLFVBQVo7QUFDSCxDQUZEOztBQUlBLFNBQVMsZUFBVCxDQUF5QixRQUF6QixFQUFtQyxXQUFuQyxFQUFnRDtBQUFFLFFBQUksRUFBRSxvQkFBb0IsV0FBdEIsQ0FBSixFQUF3QztBQUFFLGNBQU0sSUFBSSxTQUFKLENBQWMsbUNBQWQsQ0FBTjtBQUEyRDtBQUFFOztBQUV6Sjs7O0FBR0E7QUFDQSxJQUFJLGFBQWEsUUFBUSxVQUFSLEdBQXFCLHFCQUF0QztBQUNBO0FBQ0EsU0FBUyxVQUFULEdBQXNCLENBQUU7QUFDeEI7O0FBRUE7QUFDQSxTQUFTLFdBQVQsR0FBdUIsQ0FBRTs7QUFFekI7QUFDQSxTQUFTLFdBQVQsR0FBdUIsQ0FBRTtBQUN6QixRQUFRLFdBQVIsR0FBc0IsV0FBdEI7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLGVBQWUsUUFBUSxZQUFSLEdBQXVCLFlBQVk7QUFDbEQsYUFBUyxZQUFULEdBQXdCO0FBQ3BCLHdCQUFnQixJQUFoQixFQUFzQixZQUF0QjtBQUNIOztBQUVELGlCQUFhLFlBQWIsRUFBMkIsQ0FBQztBQUN4QixhQUFLLEtBRG1CO0FBRXhCLGVBQU8sU0FBUyxHQUFULEdBQWU7QUFDbEIsb0JBQVEsR0FBUixDQUFZLDBCQUFaO0FBQ0g7QUFKdUIsS0FBRCxDQUEzQjs7QUFPQSxXQUFPLFlBQVA7QUFDSCxDQWJ5QyxFQUExQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5leHBvcnRzLm1vdWRsZXRlc3QyID0gbW91ZGxldGVzdDI7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhtb2R1bGVfZm9vKTtcbn07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNi85LzMuXHJcbiAqL1xuLy9pbXBvcnQgJ2NvcmUtanMvc2hpbSc7XG52YXIgbW9kdWxlX2ZvbyA9IGV4cG9ydHMubW9kdWxlX2ZvbyA9ICdtb2R1bGVfbGliOum7mOiupOaWueazleaJp+ihjOi+k+WHuic7XG4vLyDmiqXplJlcbmZ1bmN0aW9uIG1vdWRsZXRlc3QoKSB7fVxuLy9leHBvcnQgbW91ZGxldGVzdFxuXG4vLyDmraPnoa5cbmZ1bmN0aW9uIG1vdWRsZXRlc3QyKCkge307XG5cbi8vIOato+ehrlxuZnVuY3Rpb24gbW91ZGxldGVzdDMoKSB7fVxuZXhwb3J0cy5tb3VkbGV0ZXN0MyA9IG1vdWRsZXRlc3QzO1xuXG4vLz09PT09Pem7mOiupOWvvOWHuj09PT09XG5cbi8vPT09PT095a+85Ye6Y2xhc3M9PT09PT1cbnZhciBtb2R1bGVfY2xhc3MgPSBleHBvcnRzLm1vZHVsZV9jbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBtb2R1bGVfY2xhc3MoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBtb2R1bGVfY2xhc3MpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhtb2R1bGVfY2xhc3MsIFt7XG4gICAgICAgIGtleTogXCJzYXlcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNheSgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW9kdWxlX2NsYXNzIDog5a+85Ye6Y2xhc3PosIPnlKhcIik7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gbW9kdWxlX2NsYXNzO1xufSgpOyJdfQ==
