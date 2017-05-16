const fs = require('fs')

//读文件
fs.readFile('logs/hello.log',(error,data) =>{
    if(error){
        console.log(error)
    }else{
        console.log(data)             //<Buffer 68 65 6c 6c 6f 20 78 75 65 6c 69 6e 0a e5 8a a0 e6 b2 b9>
        //console.log(data.toString())  //hello xuelin
                                        //加油
        // 或者加 utf8 
        //fs.readFile('logs/hello.log','utf8',(error,data) =>{
    }
})