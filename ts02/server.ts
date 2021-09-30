 import http,{Server,IncomingMessage,ServerResponse} from "http";
 const hostname:string='127.0.0.1';
 const port:number=5000;

 const server:Server = http.createServer((request:IncomingMessage,response:ServerResponse)=>{
    response.statusCode=200;
    response.setHeader("Content-Type",'text/html');
    response.end(`<h1 style="font-family:Lato,sans-serif; color:green">Welcome to node server with typescript</h1>`)
 });
 
 server.listen(port,hostname,()=>{
        console.log(`nodejs server is started at http://${hostname}:${port}`)
 });