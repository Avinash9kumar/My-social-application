const express = require('express');
const cookieparser = require("cookie-parser");
const app = express();
const port = 8000;
const expressLayout = require('express-ejs-layouts');
const db = require("./config/mongoose");
app.use(express.urlencoded());
app.use(cookieparser());

app.use(express.static('./assets'));
app.use(expressLayout);


app.set('layout extractStyles',true); 
app.set('layout extractScripts',true); 
// set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

// use express router
app.use('/',require('./routes'));

app.listen(port,function(err){

if(err){

console.log(`Erro in running port ${err}`);

}

console.log(`server is running on port=${port}`);


})
