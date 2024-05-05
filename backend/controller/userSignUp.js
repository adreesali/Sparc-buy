const userModel = require("../models/userModel")

async function userSignUpController(req, res){
    try{
    const { name, email, password } = req.body

    if(!name){
        throw new Error("Please provide name")
    }
    if(!email){
        throw new Error("Please provide email")
    } if(!password){
        throw new Error("Please provide password")
    }

    const userData = new userModel(req.body)

    }catch(err){
        res.json({
            message: err,
            error: true,
            success: false,
        })
    }
}