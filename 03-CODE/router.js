var http = require('http')
var url = require('url')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
    if(req.url !== '/favicon.ico'){
        var pathname = url.parse(req.url).pathname
       // console.log(pathname)
       switch(pathname){
           case 'login':
                res.write('login')
                break;
           case 'registor':
                res.write('registor')
                break;

       }
        res.end('xl')
    }
}).listen(8000)

console.log('server id running at localhost:8000')