var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require ('bcrypt-nodejs');
 
var UserSchema = new Schema({
  username:  {type: String, lowercase: true, required: true, unique: true},
  password:  {type: String, required: true},
  email:  {type: String, lowercase: true, required: true, unique: true},
});

//execute this middleware before saving data into DB
UserSchema.pre('save', function(next) {
    var user = this;
    //Crypt the password
    bcrypt.hash(user.password, null, null, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
  });

module.exports = mongoose.model('User', UserSchema);
