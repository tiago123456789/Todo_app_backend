import mongoose from "mongoose";

const taskSchema  = new mongoose.Schema({
    description: { type: String, required: true, min: 3},
    done: { type: Boolean, default: false},
    created_at: { type: Date, default: Date.now }
});


export default taskSchema;