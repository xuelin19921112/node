var http = require('http')

var querystring = require('querystring')

var postData = querystring.stringify({
    'question[title]':'wonderful',
    'question[content]':'<p>wonderful</p>',
    'question[courseId]':'216',
    'question[lessonId]':'1542',
    '_csrf_token':'8bc7b993c29efdf9f0e2128e61cb0a52f864fcd1'
})
var options = {
    hostname:'www.codingke.com',
    port:80,
    method:'POST',
    path:'/ajax/create/course/question',
    headers:{
       'Accept':'*/*',
       'Accept-Encoding':'gzip, deflate',
       'Accept-Language':'zh-CN,zh;q=0.8',
       'Connection':'keep-alive',
       'Content-Length':postData.length,
       'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
       'Cookie':'PHPSESSID=ustuc13gkg55smus96o82mogk5; looyu_id=0935cfcc036dec5dcf704866fe80941f78_20000323%3A1; CNZZDATA1256018185=835942142-1486381155-null%7C1486381155; Hm_lvt_9f92046de4640f3c08cf26535ffdd93c=1486384983; Hm_lpvt_9f92046de4640f3c08cf26535ffdd93c=1486386025',
       'Host':'www.codingke.com',
       'Origin':'http://www.codingke.com',
       'Referer':'http://www.codingke.com/v/30-career-30-career',
       'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36',
       'X-CSRF-Token':'8bc7b993c29efdf9f0e2128e61cb0a52f864fcd1',
       'X-Requested-With':'XMLHttpRequest',
    }
}

var request = http.request(options,function(res){
    console.log('Status:' + res.statusCode)
    console.log('headers:' + JSON.stringify(res.headers))
    res.on('data',function(chunk){
        console.log(chunk.toString())
    })
    res.on('end',function(){
        console.log('the res is end')
    })
})

request.on('error',function(err){
    console.log(err)
})

request.write(postData)

request.end()