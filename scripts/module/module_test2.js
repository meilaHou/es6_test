/**
 * Created by Administrator on 2016/9/3.
 */

/*require('./module_test',function(a){
 console.log(a.module_foo);
});*/
import module_defalut_func from './module_lib';
module_defalut_func();
import {module_class} from  './module_lib';
{
    let temp = new module_class();
    temp.say();
}