const {Schema, model} = require("mongoose");

const day = new Schema(

    {
        day:{
            type: String
        }
    }
)

module.exports = model('day', day);