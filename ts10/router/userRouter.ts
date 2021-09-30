import express from 'express'

const userRouter:express.Router=express.Router();

//logic for routers
userRouter.get('/',(req:express.Request,res:express.Response)=>{
    res.status(200).send(`<h1 style="font-family:Lato,sans-serif; color:blue">Welcome to xpress user router server</h1>`)
})

userRouter.get('/1',(req:express.Request,res:express.Response)=>{
    res.status(200).send(`<h1 style="font-family:Lato,sans-serif; color:blue">Welcome to xpress user router server</h1>`)
})


userRouter.post('/login',(req:express.Request,res:express.Response)=>{
    //receive form data
    let formData=req.body;
    res.status(200).json({
        msg:"form dat is received",
        formData:formData
    }) 
})

export default userRouter;