// login functionality just a mimic try i will do it with ts class and express with authorization and token verification in next/othere folder
import http,{Server,IncomingMessage,ServerResponse} from "http";
 const hostname:string='127.0.0.1';
 const port:number=5000;

 const server:Server = http.createServer((request:IncomingMessage,response:ServerResponse)=>{
    response.statusCode=200;
    response.setHeader("Content-Type",'text/html');

   if(request.url==="/login" && request.method==="POST"){
      try {
         let body:any="";
         request.on('data',(chunk)=>{
            let formData=JSON.parse(body);
            if(formData.name==="Bikram" && formData.password==="password13"){
               response.end(`<h3 style="font-family:Lato,sans-serif; color:green">Login is succesfull</h3>`)
            }else{
               response.end(`<h3 style="font-family:Lato,sans-serif; color:red">Login is failed</h3>`)
            }
            response.end(`<pre>${JSON.stringify(formData)}</pre>`);
         })
      } catch (error) {
         console.log(error); 
      }
   }



    response.end(`<h1 style="font-family:Lato,sans-serif; color:green">Welcome to node server with typescript</h1>`)
 });
 
 server.listen(port,hostname,()=>{
        console.log(`nodejs server is started at http://${hostname}:${port}`)
 });