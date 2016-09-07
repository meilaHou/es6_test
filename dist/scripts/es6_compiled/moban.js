'use strict';

/**
 * Created by Administrator on 2016/8/19.
 */
var template = '\n<ul>\n  <% for(var i=0; i < data.supplies.length; i++) { %>\n    <li><%= data.supplies[i] %></li>\n  <% } %>\n</ul>\n';

echo('<ul>');
for (var i = 0; i < data.supplies.length; i++) {
    echo('<li>');
    echo(data.supplies[i]);
    echo('</li>');
};
echo('</ul>');

var evalExpr = /<%=(.+?)%>/g;
var expr = /<%([\s\S]+?)%>/g;

template = template.replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`').replace(expr, '`); \n $1 \n  echo(`');

template = 'echo(`' + template + '`);';

var script = '(function parse(data){\n  var output = "";\n\n  function echo(html){\n    output += html;\n  }\n\n  ' + template + '\n\n  return output;\n})';

//return scripts;

function compile(template) {
    var evalExpr = /<%=(.+?)%>/g;
    var expr = /<%([\s\S]+?)%>/g;

    template = template.replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`').replace(expr, '`); \n $1 \n  echo(`');

    template = 'echo(`' + template + '`);';

    var script = '(function parse(data){\n    var output = "";\n\n    function echo(html){\n      output += html;\n    }\n\n    ' + template + '\n\n    return output;\n  })';

    return script;
}

var parse = eval(compile(template));
div.innerHTML = parse({ supplies: ["broom", "mop", "cleaner"] });
//   <ul>
//     <li>broom</li>
//     <li>mop</li>
//     <li>cleaner</li>
//   </ul>