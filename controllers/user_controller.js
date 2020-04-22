const User = require('../models/user');

module.exports.profile = function(req,res){

    return res.render('user_profile',{

        title: "User"
     
     });
    
    }

    module.exports.singUp = function(req,res){

        if(req.isAuthenticated()){

           return res.redirect('/users/profile');

        }

        return res.render('user_sign_up',{

            title: "Codeial | signUp"
         
         });
        
        }


    module.exports.singIn = function(req,res){

        if(req.isAuthenticated()){

            return res.redirect('/users/profile');
 
         }

            return res.render('user_sign_in',{
    
                title: "Codeial | signIn"
             
             });
            
            }   


    module.exports.create = function(req,res){

    if(req.body.password != req.body.confirm_password){

           return res.redirect('back');
    }
   
    User.findOne({email:req.body.email},function(err,user){

        if(err){console.log("Error in find User");return}
        
        if(!user){

         User.create(req.body,function(err,user){

          if(err){console.log("Error in creating User");return}

           return res.redirect('/user/sign-In');


         });


        }else{   return res.redirect('back'); }

    });


    }



    module.exports.createSession = function(req,res){

        return res.redirect('/');
    }


    module.exports.destroySession = function(req,res){

        req.logout();
        return res.redirect('/');
    }