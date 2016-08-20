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
{
    //alert(testlet);

/*
//字符串中嵌入变量
    var name = "Bob", time = "today";
    alert(`Hello ${name}, how are you ${time}?`);
    */
    console.log((function(){return 1+1;})());
    foo({x: 1, y: 2}) // 1, 2
}

function foo({x, y = 5}) {
    console.log(x, y);
}
