// form validation with xpress validator
import express from 'express';
import appLogger from './middlewares/appLogger';
import apiRouter from './router/apiRouter';
import userRouter from './router/userRouter';
const app:express.Application = express();
const hostname:string="127.0.0.1";
const port:number=5000;

//configuring express to receive form data
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(appLogger)
 
app.get("/",(request:express.Request,response:express.Response)=>{
   response.status(200).send(`<h1 style="font-family:Lato,sans-serif; color:green">Welcome to xpress server</h1>`)
})

//configure the router

// app.use("/api",appLogger,apiRouter);
// app.use('/users',appLogger, userRouter);

// if you do as line no 13 there is no need of putting middleware on every request right below

app.use("/api",apiRouter);
app.use('/users', userRouter);

// got it ? cheers thats cool;

app.listen(port,hostname,()=>{
   console.log(`epress server started at http://${hostname}:${port}`)
})