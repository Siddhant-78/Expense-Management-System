const user = require('../models/user')


//login callback
const loginController = async(req,res) =>{
    try {
        const {email,password} = req.body
        const users = await user.findOne({email,password})
        if(!users){
            res.status(404).send('User Not Found')
        }
        res.status(200).json({
            success:true,
            users,
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            error
        });
    }
};

//register callback
const registerController = async (req,res) => {
    try {
        const newUser = new user(req.body)
        await newUser.save()
        res.status(201).json({
            success: true,
            newUser, 
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            error
        });
    }
};

module.exports = {loginController, registerController};