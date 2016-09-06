/**
 * Created by Administrator on 2016/8/17.
 */
"use strict";
var dfsd =  0;
class Point{
    constructor(x = 0 , y = 0 ) {
dfsd = 10;
        this.x = x;
        this.y = y;
    }

     static nihao(){};
}
let testlet = "dfssdf";
window.onload = function(){
    "use strict";
    let point = new Point(1,2);
   // alert(point.x+":"+point.y+":"+testlet);

    document.getElementById('result').innerHTML = (`
There are <b>121</b> items
   in your basket, <em>12121</em>
  are on sale!
`);

}


function foo({x:a, y = 5}) {
    console.log(a, y);
}
let foo2 = 'outer';

function bar(func = x => foo2) {
    let foo = 'inner';
    console.log(func()); // outer
}
function throwIfMiss(){
    throw new Error("参数不能为空");
}
function func1(param1 = throwIfMiss()){
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
   console.log([1,2,3].map(x =>x*x)) ;

}