var jsx = require('G:\\jsx-transpiler-tpls');
var fs = require('fs');

var generator = require('./generator.js');

var input = fs.readFileSync('./test.jsx');
var output = generator.generate('test', input);

fs.writeFileSync('./test.js', output);

