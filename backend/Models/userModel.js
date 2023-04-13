const mongoose =require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs') ;

const userSchema = mongoose.Schema({
    username:{
        type:String ,
        required:[true , 'username is required'] ,
    },
    email:{
        type:String ,
        required:[true, 'email is required'] ,
        validate:[validator.isEmail , "please provide a valid email"]
    },
    password:{
        type:String ,
        required:[true, "password is required"] ,
        minLength:[7 , "password must be not greater than 8 characters"],
        select:false 
    },
    role:{
        type:String ,
        enum:['User' , 'Contributor' ,'Admin'] ,
        default:'User'
    },
    dateOfBirth: {
        type: Date,
        // required: true,
        trim: true,
    },
    mobileNo:{
        type:String,
        required:[true , "mobile no is required"],
        validate:[validator.isMobilePhone , "provide a valid phone no"]
    }
},{timestamps:true})

userSchema.pre('save', async function(next){
    // console.log(this);

    if(!this.isModified('password'))
        next() ;
    this.password =await bcrypt.hash(this.password , 10);
    next();    
})

userSchema.methods.comparePassword = async function(candidatepassword){
    // console.log(candidatepassword , this); // a method is created to compare 
    return await bcrypt.compare(candidatepassword , this.password);
}

userSchema.methods.jwtToken = function( ){
    return jwt.sign({id:this._id} ,process.env.JWT_SECRET ,{
        expiresIn : process.env.JWT_EXPIRE
    })
}

module.exports =mongoose.model('user' , userSchema) ;