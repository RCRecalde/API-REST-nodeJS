const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName:String,
    lastName: String,
    email: String,
    //relacion muchos a muchos,un usuario puede tener muchos autos
    cars: [{
        type: Schema.Types.ObjectId,
        ref:'car'
    }]

})
module.exports = mongoose.model('user', userSchema)