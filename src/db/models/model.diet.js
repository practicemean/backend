const {Schema,  model} = require("mongoose");

const diet = new Schema(
    {

     name_diet: {
         type: String
     }, 
     description: {
         type: String
     }
     
    }
)

module.exports = model('diet', diet);