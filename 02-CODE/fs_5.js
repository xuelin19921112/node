const fs = require('fs')

//读取目录
fs.readdir('logs',(error,files) =>{
    if(error){
        console.log(error)
    }else{
        console.log(files)
        console.log(files[1])
    }
})