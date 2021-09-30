 import http,{Server,IncomingMessage,ServerResponse} from "http";
 import fs from 'fs';
 import path  from "path";
 const hostname:string='127.0.0.1';
 const port:number=5000;

 const server:Server = http.createServer((request:IncomingMessage,response:ServerResponse)=>{
    response.statusCode=200;
    response.setHeader("Content-Type",'text/html');

   // fs module
   fs.readFile(path.join(__dirname,"data","myNotes.txt"),"utf-8",(error,result)=>{
      if(error) throw  console.log(error)
      ;
      fs.writeFile(path.join(__dirname,"data","created.txt"),result,"utf-8",(error)=>{
         if(error){
            console.log(error)
         }
         response.end(`<pre>Data written to a file .. </pre>`)
      })
      // response.end(`<pre>${result}</pre>`)
   })



   //  response.end(`<h1 style="font-family:Lato,sans-serif; color:green">Welcome to node server with typescript</h1>`)
 });
 
 server.listen(port,hostname,()=>{
        console.log(`nodejs server is started at http://${hostname}:${port}`)
 });