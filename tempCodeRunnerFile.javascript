

var http = require('http');
var fs = require('fs');
var url = require('url');


var app = http.createServer(function(request,response){
var _url = request.url;
var queryData = new URL('http://localhost:3000' + _url).searchParams;
console.log(queryData.get('id'));
if(_url == '/'){
url = '/index.html';
}
if(_url == '/favicon.ico'){
response.writeHead(404);
response.end();
return;
}
response.writeHead(200);
//console.log(__dirname + url);
response.end(queryData.id);

});
app.listen(3000);