const mongoose = require("mongoose");

const RecordingSchema = new mongoose.Schema(
    {
        title:{
            type: String, 
            required: true, 
            unique: true
        },
        description:{
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Recording", RecordingSchema);