var http  = require('http')

var hostname = 'localhost'

var port = 3000

var server = http.createServer(function(req,res){
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.end('hello NodeJs')
})

server.listen(port,hostname,function(){
    console.log('Server running at http://localhost:3000')
})
