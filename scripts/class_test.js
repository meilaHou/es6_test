/**
 * Created by Administrator on 2016/8/31.
 */
    //======prototype test ======
class AA {
    //static bianliang2 ;//es6 无法申请静态属性;
    static nihao(){};
    //var bianliang3 = "";//无法在构造函数外生命变量
    constructor() {
        bianliang = "";//声明全局变量
        var bianlinag4 ="";//声明局部变量

    }


};
class A {
    constructor(){
        this.names = "a";
    }

}
class B extends A {
    constructor(){
        super();
        this.names = "b";
    }
}

B.__proto__ === A // true
B.prototype.__proto__ === A.prototype // true
//---------------------
Object.setPrototypeOf(B.prototype, A.prototype);
// 等同于
B.prototype.__proto__ = A.prototype;

Object.setPrototypeOf(B, A);
// 等同于
B.__proto__ = A;

//======extends test ======


A.__proto__ === Function.prototype // true
A.prototype.__proto__ === Object.prototype // true

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