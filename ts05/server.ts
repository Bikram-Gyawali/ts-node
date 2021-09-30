 import http,{Server,IncomingMessage,ServerResponse} from "http";
 import fs from 'fs';
 import path from 'path';
 const hostname:string='127.0.0.1';
 const port:number=5000;
 
 const server:Server = http.createServer((request:IncomingMessage,response:ServerResponse)=>{
    response.statusCode=200;
    response.setHeader("Content-Type",'text/html');

   //  response of json 
   fs.readFile(path.join(__dirname,"data","data.json"),'utf-8',(error,result)=>{
      if(error) throw console.log(error);
      response.end(`<pre>${result}</pre>`)
   })




   //  response.end(`<h1 style="font-family:Lato,sans-serif; color:gNNreen">Welcome to node server with typescript</h1>`)
 });
 
 server.listen(port,hostname,()=>{
        console.log(`nodejs server is started at http://${hostname}:${port}`)
 });