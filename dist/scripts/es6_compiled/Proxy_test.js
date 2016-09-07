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