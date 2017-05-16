var fs = require('fs')
var zlib = require('zlib')
//读文件流
var fileReadStream = fs.createReadStream('data.json')
// var count = 0

// fileReadStream.on('data',(chunk)=>{
//     console.log(`${count++}  接收到${chunk.length}`)
// })

// fileReadStream.on('end',()=>{
//     console.log('end...')
// })

// fileReadStream.on('error',(error)=>{
//     console.log(error)
// })


//写文件流
var fileWriteStream = fs.createWriteStream('data.json.gz')
fileWriteStream.on('pipe',(source)=>{
    console.log(source)
})


fileReadStream
    .pipe(zlib.createGzip())
    .pipe(fileWriteStream)



