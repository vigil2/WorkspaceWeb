var fs = require('fs');

fs.readFile('sample.md', 'utf8', function(err, data) {
    console.log(data);
});