import mongoose from 'mongoose';

const binnacleSchema= new mongoose.Schema({
    assignament:{type:mongoose.Schema.Types.ObjectId,ref:'Assignament'},
    instructor:{type:mongoose.Schema.Types.ObjectId,ref:'Instructor'},
    number: { type: Number, required: true, enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
    document:{type:String, required: true, unique:true},
    observation: [{
        observation: String,
        user: { type: mongoose.Schema.Types.ObjectId },
        observationDate: { type: Date, default: Date.now }
      }],
    status: {type: Number, required: true, default: 1 },
}, {timestamps:true});


export default mongoose.model("Binnacle", binnacleSchema);