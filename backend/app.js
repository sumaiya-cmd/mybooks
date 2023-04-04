require('dotenv').config({path : './config/.env'})


const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser");

//require userrouter
const userRoutes = require('./routes/userRouter'); 

//connect database
require('./config/database').connectdatabase();


//config body parser 
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }));

app.use('/api/user' , userRoutes ) ;

//use error  middleware
app.use(require('./Middleware/Errors')) ;


app.listen( process.env.PORT , console.log(`running on port ${process.env.PORT}`))

module.exports =app ;