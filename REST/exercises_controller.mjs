import 'dotenv/config';
import * as exercises from './exercises_model.mjs';
import express from 'express';
import { isNameValid, isRepsValid, isWeightValid, isUnitValid, isDateValid } from './validation.mjs';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());


app.post('/exercises', async (req, res) => {
    const properties = req.body;
    let isValid;
    const keys = Object.keys(properties);
    if (keys.length == 5) {
        isValid = isNameValid(properties.name) && isRepsValid(properties.reps) && isWeightValid(properties.weight) && isUnitValid(properties.unit) && isDateValid(properties.date);
    } else {
        isValid = false;
    }
    if (isValid) {
        const name = properties.name;
        const reps = properties.reps;
        const weight = properties.weight;
        const unit = properties.unit;
        const date = properties.date;
        const exercise = await exercises.createExercise(name, reps, weight, unit, date);
        res.status(201).json(exercise);
    } else {
        res.status(400).json({ Error: "Invalid request"});
    }
    
});

app.get('/exercises', async (req, res) => {
    const queryResult = await exercises.findExercise();
    res.status(200).json(queryResult);
});

app.get('/exercises/:id', async (req, res) => {
   const params = req.params;
   const id = params.id;
   const filter = { _id : id };
   const queryResult = await exercises.findExercise(filter);
   if (queryResult.length > 0) {
    res.status(200).json(queryResult);
   } else {
    res.status(404).json({ Error: "Not found"});
   }
   
});

app.put('/exercises/:id', async (req, res) => {
    const update = req.body;
    let isValid;
    const keys = Object.keys(update);
    if (keys.length == 5) {
        isValid = isNameValid(update.name) && isRepsValid(update.reps) && isWeightValid(update.weight) && isUnitValid(update.unit) && isDateValid(update.date);
    } else {
        isValid = false;
    }
    if (isValid) {
        const id = req.params.id;
        const filter = { _id : id };
        const updateResult = await exercises.updateExercise(filter, update);
        if (updateResult.matchedCount != 0) {
            const updatedExercise = update;
            updatedExercise._id = id;
            res.status(200).json(updatedExercise);
        } else {
            res.status(404).json({ Error: "Not found"});
        }
    } else {
        res.status(400).json({ Error: "Invalid request"});
    }
});

app.delete('/exercises/:id', async (req, res) => {
    const id = req.params.id;
    const filter = { _id : id };
    const result = await exercises.deleteExercise(filter);
    if (result.deletedCount > 0) {
        res.sendStatus(204);
    } else {
        res.status(404).json({ Error: "Not found"});
    }
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});