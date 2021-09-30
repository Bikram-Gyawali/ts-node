import express from 'express';
import apiRouter from './router/apiRouter';
const app:express.Application = express();
const hostname:string="127.0.0.1";
const port:number=5000;

app.get("/",(request:express.Request,response:express.Response)=>{
   response.status(200).send(`<h1 style="font-family:Lato,sans-serif; color:green">Welcome to xpress server</h1>`)
})


//configure the router
app.use("/api",apiRouter);

app.listen(port,hostname,()=>{
   console.log(`epress server started at http://${hostname}:${port}`)
})