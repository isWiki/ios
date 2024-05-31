//1.引入express
const express = require('express');

//创建应用对象
const app = express();


//3.创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装

app.all('/login',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    console.log("请求过来了")
    response.send('登录成功');
})


//4.监听端口启动服务
app.listen(8002,()=>{
    console.log("服务已经启动，8002 端口监听中...")
})