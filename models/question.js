const mongoose = require('mongoose');



const questionSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    options: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Option'
        }
    ]

}, {
    // for created at and updated at fields
    timestamps: true
});



const Question = mongoose.model('Question', questionSchema);

module.exports = Question;