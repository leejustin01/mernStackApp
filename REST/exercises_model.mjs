import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser : true }
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});


const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true }
}, {collection: 'exercises'});

const Exercise = mongoose.model("Exercise", exerciseSchema);


export const createExercise = async (nameParam, repsParam, weightParam, unitParam, dateParam) => {
    const exercise = new Exercise({name : nameParam, reps : repsParam, weight : weightParam, unit : unitParam, date : dateParam});
    return exercise.save();
}

export const findExercise = async(filter) => {
    const query = Exercise.find(filter);
    return await query.exec();
}

export const updateExercise = async (filter, update) => {
    return await Exercise.updateOne(filter, update);
}

export const deleteExercise = async (filter) => {
    return await Exercise.deleteMany(filter);
}
