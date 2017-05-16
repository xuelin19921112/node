const fs = require('fs')

fs.rename('logs/xl.log','logs/xuelin.log',(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('rename is success!')
    }
})