const catchAsyncErrors =require('../Middleware/catchAsyncErrors') ;
const userModel = require('../Models/userModel') ;
const sendToken =require('../Utils/sendToken') ;
const ErrorHandler = require('../Utils/ErrorHandler') ;

exports.HomePage =(req,res)=>{
    res.json(200 , {message :"Welcome to homepage"}) ;
}

exports.createUser = catchAsyncErrors(async (req,res,next)=>{
    const{username, email ,password ,dateOfBirth ,mobileNo,role} = req.body 
    const user = await userModel.create({
        username, email , password ,dateOfBirth ,mobileNo,role
    })

    sendToken(user ,201,res) ;
})

exports.Showall =(req,res) =>{
    userModel.find()
    .then(users => res.json(200, {message:"all the users " , users}))
    .catch(err =>res.json(500, {message: "error " , err}))
}

exports.Deleteuser =(req, res) =>{
    userModel.findOneAndDelete({username :req.params.username})
    .then(user => userModel.find()
                .then(users => res.json(200 , {message :" remaining users" , users})) )
    .catch(err => res.json (500 , {message: "failure" , err}))
}

exports.Updateuser = (req,res ) =>{
        const user = {
        username :req.body.username ,
        email:req.body.email ,
        mobileNo:req.body.mobileNo ,
        dateOfBirth:req.body.dateOfBirth 
    }
    userModel.findOneAndUpdate({username:req.params.name} ,user)
    .then(updateduser => res.json(200 , {message:" updateuser" , updateduser}))
    .catch(err => res.json(500 , {err}));
}

exports.loginUser = catchAsyncErrors( async (req,res , next) =>{

    const {email , password} =req.body ;

    if(!email || !password){
        return next(new ErrorHandler("Please provide the email and password "))
    }

    const user =await userModel.findOne({email}).select('+password') //to select the password as well 

    if(!user){
        return  next(new ErrorHandler("User not found!"))
    }

    const passwordMatch = await user.comparePassword(password)

    if(!passwordMatch){
        return next(new ErrorHandler("Invalid password and email"));
    }

    // res.status(200).json(200 , {message :"successfully login"})
    sendToken(user , 201 , res); 
})