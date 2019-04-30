var css = require('css');
var fs = require('fs');

var k = fs.readFileSync("../_alpha/geral.css");


var data = fs.readFileSync("../portateis/geral.css");

var ast = css.parse(data.toString("utf-8"));
var result = css.stringify(ast, { sourcemap: true });

var ast2 = css.parse(k.toString("utf-8"));
var result2 = css.stringify(ast2, { sourcemap: true });

var css = '';
ast.stylesheet.rules.forEach(regra => {
    if (regra.type === "media") {
        css += '@media '+regra.media+"{\n";
        ast2.stylesheet.rules.forEach(regra2 => {
            if (regra2.type == "rule") {
                css += regra2.selectors.join(",")+" {\n";                
                regra2.declarations.forEach(regra3 => {
                    css += regra3.property + ":" + regra3.value;
                })
                css += "}\n";
            }
        });
        css += '}\n\n';
    }
});

//console.log(ast2.stylesheet.rules);
console.log(css);