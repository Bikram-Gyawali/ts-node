// custom module
import http,{Server,IncomingMessage,ServerResponse} from "http";
import { StringUtil } from "./utils/stringutil";
import { MathUtil } from "./utils/mathUtil";
 const hostname:string='127.0.0.1';
 const port:number=5000;
 const server:Server = http.createServer((request:IncomingMessage,response:ServerResponse)=>{
    response.statusCode=200;
    response.setHeader("Content-Type",'text/html'); 

   // string util using here
   let customerName:string="haribahadur";
   let myName:string="bikrammarkib"
   let numb:number=5;
   let result:string=MathUtil.printMathTable(5)

   let length:number =StringUtil.printLength(customerName)
   let name:string=StringUtil.printTriangle(myName);


    response.end(`<h1 style="font-family:Lato,sans-serif; color:green"> ${name} \n ${result} </h1>`) 
 });
 
 server.listen(port,hostname,()=>{
        console.log(`nodejs server is started at http://${hostname}:${port}`)
 });