var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var ProductSchema = new Schema({
  name : {type: String, require: true, unique:true, lowercase: true},  
  cost:  {type: Number , required: true},
  description:  {type: String, required: true},
  category:  {type: mongoose.Schema.Types.ObjectId, ref:'Category', required: true},
  picturePath:  {type: String, required: true}
});

module.exports = mongoose.model('Product', ProductSchema);
