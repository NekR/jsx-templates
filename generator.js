var jsx = require('G:\\jsx-transpiler-tpls');
var fs = require('fs');

exports.generate = function(name, tpl) {
  var output = compile(tpl + '').trim();

  if (output.indexOf('return') === -1) {
    output = 'return ' + output;
  }

  output = ['jsx.register(\'' + name + '\', {',
  '  renderer: function(JSX) {',
  output.replace(/^/mg, '    '),
  '  }',
  '});'].join('\n');

  return output;
};

var compile = function(tpl) {
  var result = jsx.compile(tpl, {
    ecmaVersion: 6,
    locations: true,
    ranges: true,
    attachComment: true,
    allowReturnOutsideFunction: true
  }).code;

  return result;
};
