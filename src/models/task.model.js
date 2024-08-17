import mongoose, { mongo } from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        project:{
            type: mongoose.Schema.Types.ObjectId,
            require: false,
            ref: 'Project'
        },
        description: {
            type: String,
            required: true
        },
        date:{
            type: Date,
            default: Date.now
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Task", taskSchema);

