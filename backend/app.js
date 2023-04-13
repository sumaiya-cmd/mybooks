require('dotenv').config({path : './config/.env'})


const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser");
const session = require("express-session");

//require userrouter
const userRoutes = require('./routes/userRouter'); 

//connect database
require('./config/database').connectdatabase();


//config body parser 
app.use(cors({ credentials: true, origin: true }));

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: process.env.EXPRESS_SESSION_SECRET,
    })
);

app.use(cookieParser());


app.use('/api/user' , userRoutes ) ;

//use error  middleware
app.use(require('./Middleware/Errors')) ;


app.listen( process.env.PORT , console.log(`running on port ${process.env.PORT}`))

module.exports =app ;