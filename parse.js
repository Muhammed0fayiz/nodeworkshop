var http=require('http')
var url=require('url')

http.createServer((req,res)=>{
    var rurl=url.parse(req.url,true).pathname;
    if(rurl==='/'){
        res.write('home')
        res.end()
    }else if(rurl==='/about'){
        res.write('ablu')
        res.end()
    }
   
}).listen(4000)