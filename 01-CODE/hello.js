const http = require('http')

http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
   // console.log(request.url)
    if(request.url !=='/favicon.ico'){
        console.log('hello world')
        response.write('<b>hello nodejs</b>')
        response.end()
    }
}).listen(3000)

console.log('Server running at http://localhost:3000')