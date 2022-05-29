const {Scheme, model} = require("mongoose");

const hour = new Scheme(

    {

        breafast:{

            hour: [{type: Date}],
            detail: [{type: String}]
             
        },
        betweemornig:{ 
            hour: [{type: Date}],
            detail: [{type: String}]
        },
        lunch:{
            hour: [{type: Date}],
            detail: [{type: String}]
        }, 
        betweenafternoon:{
            hour: [{type: Date}],
            detail: [{type: String}]
        }, 
        dinner: {
            hour: [{type: Date}],
            detail: [{type: String}]
        }
        
    }
)

module.exports = model('hour', hour);