"use strict";

/**
 * Created by Administrator on 2016/9/6.
 */
require.config({
    baseUrl: 'scripts/require',
    paths: {
        "a": "lib/a",
        "b": "lib/b",
        "c": "others/c"
    }
});
require(['a', 'b', 'c'], function (a, b, c) {
    a.hello();
    b.hello();
    c.hello();
});

//# sourceMappingURL=requireCfg-compiled.js.map