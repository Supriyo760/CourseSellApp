const { userMiddleware } = require("../middleware/user");
const{Router}=require("express");
const userRouter = Router();
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD}= require("../config");

    userRouter.post("/signup",async function(req,res){
        const {email, password, firstName, lastName} = req.body;

        await userModel.create({
            email:email,
            password:password,
            firstName:firstName,
            lastName:lastName
        })
    res.json({
        message:"signup endpoint"
    })
})

userRouter.post("/signin",async function(req,res){
const{email,password} = req.body;

const user = await userModel.findOne({
    email:email,
    password:password
});

if(user){
    const token = jwt.sign({
        id:user._id
    },JWT_USER_PASSWORD);

    res.json({
        token:token
    })
}else{
    res.json({
        message:"incorrect credentials"
    })
}
})

userRouter.get("/purchases",userMiddleware,async function(req,res){
    const userId = req.userId;
    const purchases= await purchaseModel.find({
        userId,
    })
    res.json({
        purchases
    })
})



module.exports={
    userRouter:userRouter
}