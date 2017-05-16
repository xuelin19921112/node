const fs = require('fs')


//删除空文件夹
fs.rmdir('logs2',(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('rmdir is success!')
    }
})

// fs.readirSync('logs').map((file)=>{
//     fs.unlink(`logs/${file}`,(error) =>{
//         if(error){
//             console.log(error)
//         }else{
//             console.log('success!')
//         }
//     })
// })