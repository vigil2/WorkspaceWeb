var fs = require('fs');

// read file sync no callback
console.log('A')
var result = fs.readFileSync('web2_javascript/syntax/sync.txt', 'utf8');
console.log(result);
console.log('C');

// 비동기. callback
console.log('A')
fs.readFile('web2_javascript/syntax/sync.txt', 'utf8', function (err, result) {
    console.log(result); 
});

console.log('C');