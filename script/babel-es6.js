/*
注意安装babel运行环境
 http://www.cnblogs.com/diligenceday/p/5453523.html
一个是项目内,一个是全局运行环境

配置watcher 参数

* cmd 进入此项目后,运行babel-node 文件,测试结果
*
* */
let [a,b,c] = [1,2,3];
console.log(a,b,c);
class Point{
    constructor(x = 10 , y = 0 ) {
        this.x = x;
        this.y = y;
    }

    static nihao(){};
}
var point = new Point();
console.log(point.x );