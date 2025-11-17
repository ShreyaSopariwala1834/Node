const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name : {type:String,requruired:true},
    roll: { type: Number, required: true, unique: true },
    subject : {type:String , requruired : true},
    marks : {type:Number, requruired : true}
});

module.exports = mongoose.model("Student",studentSchema);