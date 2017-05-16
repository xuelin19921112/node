var mongo = require('mongo')

var server = new mongodb.Server('localhost',27017,{auto_reconnect:true})

var db = new mongodb.Db('arring',server,{safe:true})

db.open(function(err,db){
    if(err){
        console.log(err)
    }else{
        console.log('connect success!')
        db.collection('movies',{safe:true},function(err,conn){
            if(err){
                console.log(err)
            }else{
                conn.find()
            }
        })
    }
})