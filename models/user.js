const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

   email:{
           type:String,
           required :true,
           unique:true

   },
   password:{
          type:String,
          reqired:true,
   },
   name:{
       type:String,
       reqired:true
   }
},{

  timestamps:true

});

const User = mongoose.model('User',userSchema);

module.exports = User;