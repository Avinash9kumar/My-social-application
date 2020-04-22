const express = require('express');
const cookieparser = require("cookie-parser");
const app = express();
const port = 8000;
const expressLayout = require('express-ejs-layouts');
const db = require("./config/mongoose");

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/Passport-local-strategy');
const MongoStore = require('connect-mongo')(session);



app.use(express.urlencoded());
app.use(cookieparser());

app.use(express.static('./assets'));
app.use(expressLayout);


app.set('layout extractStyles',true); 
app.set('layout extractScripts',true); 
// set up the view engine
app.set('view engine','ejs');
app.set('views','./views');


app.use(session({

     name:'codeial',
     secret: 'blahsomthing',
     resave: false,
     cookie:{
         maxAge:(1000*60*60)
     },
     store: new MongoStore(
       
        {
       mongooseConnection: db,
       autoRemove: 'disabled'
        },
        function(err){
            console.log(err|| 'connect-mongodb setup ok');
        }
     )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// use express router
app.use('/',require('./routes'));

app.listen(port,function(err){

if(err){

console.log(`Erro in running port ${err}`);

}

console.log(`server is running on port=${port}`);


})
