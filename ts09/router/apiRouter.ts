import express from "express";

const apiRouter:express.Router=express.Router();


//logic for routers
apiRouter.get('/',(req:express.Request,res:express.Response)=>{
    res.status(200).send(`<h1 style="font-family:Lato,sans-serif; color:blue">Welcome to xpress router server</h1>`)
})

apiRouter.get('/path',(req:express.Request,res:express.Response)=>{
    res.status(200).send(`<h1 style="font-family:Lato,sans-serif; color:blue">Welcome to xpress path router server</h1>`)
})



export default apiRouter