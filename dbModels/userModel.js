const mongoose = require('mongoose');

const { schema } = mongoose.schema;

const userSchema = new schema({
   password: String
});

const User = module.exports = mongoose.model('users', userSchema);

module.exports.registerUser = () => {


}

module.exports.getUserProfile = (id, callback) => {

      User.findById(id, callback);
}