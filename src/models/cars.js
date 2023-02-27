const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carSchema = new Schema({
    brand: String,
    model: String,
    year: Number,
    //un auto le pertenece a un solo usuario
    seller:{
        type: Schema.Types.ObjectId,
        ref: 'user'

    }

})
module.exports = mongoose.model('car', carSchema)