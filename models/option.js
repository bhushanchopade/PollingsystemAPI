const mongoose = require('mongoose');



const optionSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    },
    vote: {
        type: Number
    }    
}, {
    // for created at and updated at fields
    timestamps: true
});



const Option = mongoose.model('Option', optionSchema);

module.exports = Option;