 import http,{Server,IncomingMessage,ServerResponse} from "http";
 import os from 'os';
 const hostname:string='127.0.0.1';
 const port:number=5000;

 const server:Server = http.createServer((request:IncomingMessage,response:ServerResponse)=>{
    response.statusCode=200;
    response.setHeader("Content-Type",'text/html');


   // os module
   let osData={
      totalMemory:os.totalmem(),
      freememory:os.freemem(),
      homeDir:os.homedir(),
      computerName:os.hostname()
   }











    response.end(`<pre style="font-family:Lato,sans-serif; color:green">${JSON.stringify(osData)}</pre>`)
 });
 
 server.listen(port,hostname,()=>{
        console.log(`nodejs server is started at http://${hostname}:${port}`)
 });