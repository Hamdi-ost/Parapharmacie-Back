var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var CategorySchema = new Schema({
  name : {type: String, require: true, unique:true, lowercase: true},  
  description:  {type: String, required: true},
  products:  [{type: String, required: true}]
});

module.exports = mongoose.model('Category', CategorySchema);
