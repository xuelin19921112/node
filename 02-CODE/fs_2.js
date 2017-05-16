const fs = require('fs')

//创建目录
fs.mkdir('logs',(error) =>{
    if(error){
        console.log(error)
    }else{
        console.log('mkdir is success!')
    }
})
