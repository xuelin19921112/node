var EventEmitter = require('events')

class Player extends EventEmitter{}

var player = new Player()

player.on('play',(track) =>{
    console.log(`正在播放:《${track}》`)
})
 
player.emit('play','精绝古城')
player.emit('play','黄皮子坟')
player.emit('play','三生三世十里桃花')