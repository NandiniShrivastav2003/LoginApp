const express=require('express');
const router=express.Router();

const userController=require('../controllers/users_controller');
const user = require('../models/user');

router.get('/sign-in',userController.signIn);
router.get('/sign-up',userController.signUp);
router.post('/create',userController.create);
router.post('/create-session',userController.createSession);

module.exports=router;