const User=require('../models/user');

module.exports.signIn = function(req,res){
    console.log(req.cookies);
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
    User.find({email:req.body.email},function(err,user){
        if(err){
            console.log('error in getting login details');
            return ;
        }
        //
        console.log('users details is ', user);
      
            if(user){
               if(user[0].password == req.body.password){
                console.log("successfully signed in...");
                res.cookie('user_id',user[0].id);
               return res.redirect('/');
                
                
               }
               else{
                console.log('username/password did not match..');
                return res.redirect('/users/sign-in');
               }
               

            
        }
        else{
            return res.redirect('back');
        }
        });

    }
