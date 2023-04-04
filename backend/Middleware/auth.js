const ErrorHandler = require("../Utils/ErrorHandler");
const jwt = require('jsonwebtoken');
const userModel = require('../Model/usermodel')
const catchAsyncErrors = require('../Middleware/catchAsyncErrors')


exports.isAuthenticated =catchAsyncErrors( async (req,res,next) =>{

    const{token} =req.cookies ;
    if(!token){
        return(next(new ErrorHandler("Login to access the resource" , 401))) ;
    }

    const decodedToken  = jwt.verify(token , process.env.JWT_SECRET);

    const user = await userModel.findById(decodedToken.id) ;
    req.user = user ; // something req.session.passport.user

    next();

})