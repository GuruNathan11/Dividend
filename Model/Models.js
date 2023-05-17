var mongoose = require('mongoose');
var { Schema } = mongoose;

var Schema = new Schema({
    companyName:{
        required : true,
        type     : String
    },
    type:{
        required : false,
        type     : String
    },
    fv:{
        required : false,
        type     : Number
    },
    percentage:{
        required : false,
        type     : Number
    },
    dividendAmount:{
        required : true,
        type     : String
    },
    announcement:{
        required : false,
        type     : String
    },
    record:{
        required : false,
        type     : String
    },
    ex_dividend:{
        required : false,
        type     : String
    }
    
},{versionKey:false});

Schema.path('companyName').validate(async (companyName) => {
    const nameCount = await mongoose.models.company.countDocuments({ companyName })
    return !nameCount
},'Name already Exists');


var users = module.exports = mongoose.model('company',Schema);
module.exports.get = function(callback,limit){
    users.find(callback).limit(limit);
}
