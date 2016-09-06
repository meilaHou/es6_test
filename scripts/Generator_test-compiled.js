'use strict';

var _marked = [helloWorldGenerator].map(regeneratorRuntime.mark);

/**
 * Created by Administrator on 2016/8/30.
 */
//======基本测试======
function helloWorldGenerator() {
    return regeneratorRuntime.wrap(function helloWorldGenerator$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 'hello';

                case 2:
                    _context.next = 4;
                    return 'world';

                case 4:
                    return _context.abrupt('return', 'ending');

                case 5:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}
var hw = helloWorldGenerator(); //返回一个指向内部指针的指针对象
hw.next();
// { value: 'hello', done: false }

hw.next();
// { value: 'world', done: false }

hw.next();
// { value: 'ending', done: true }

hw.next();
// { value: undefined, done: true }

//# sourceMappingURL=Generator_test-compiled.js.map