const router =require('express').Router() ;
const{HomePage ,createUser ,Showall ,Deleteuser, Updateuser, loginUser} =require('../Controller/userController.js')

router.route('/').get(HomePage) ;

router.route('/create').post(createUser);

router.route('/show').get(Showall) ;

router.route('/delete/:username').get(Deleteuser) ;

router.route('/update/:name').post(Updateuser) ;

router.route('/login').get(loginUser) ;

module.exports =router ;

