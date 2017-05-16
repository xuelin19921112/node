const fs = require('fs')

//写文件
fs.writeFile('logs/hello.log','hello xuelin\n',(error) =>{
    if(error){
        console.log(error)
    }else{
        console.log('mkdir is success!')
    }
})

//追加文件
fs.appendFile('logs/hello.log','加油\n',(error) =>{
    if(error){
        console.log(error)
    }else{
        console.log('成功追加文件')
    }
})
