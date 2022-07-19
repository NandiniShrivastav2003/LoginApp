const User=require('../models/user');

module.exports.signIn = function(req,res){
    return res.render('signin',{
        title:"Sign In"
    })
}

module.exports.signUp = function(req,res){
    return res.render('signup',{
        title:"Sign Up"
    })
}
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({
        email:req.body.email
    },function(err,user){
        if(err){
            console.log('error in finding user:',err);
            return 
        }
        if(!user){
        User.create(req.body,function(err,user){
            if(err){
                console.log('error in creating database',err);
                return ;
            }
            console.log('database created:',user);
            return res.redirect('/users/sign-in');
        })
    }
    else{
        return res.redirect('back');
    }
}

    );
}
module.exports.createSession= function(req,res){
    
}