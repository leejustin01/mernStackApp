import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePage() {
    const [name, setName] = useState();
    const [reps, setReps] = useState();
    const [weight, setWeight] = useState();
    const [unit, setUnit] = useState("lbs");
    const [date, setDate] = useState();

    const navigate = useNavigate();
    
    const createExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully created the exercise");
        } else {
            alert(`Failed to create exercise, status code = ${response.status}`);
        }
        navigate("/");
    };

    return (
        <div>
            <h2>Create Exercise</h2>
            <input 
                type="text" 
                placeholder="Enter name here" 
                value={name} 
                onChange={e => setName(e.target.value)} />
            <input 
                type="number" 
                placeholder="Enter reps here" 
                value={reps} 
                onChange={e => setReps(e.target.value)} />
            <input 
                type="number" 
                placeholder="Enter weight here" 
                value={weight} 
                onChange={e => setWeight(e.target.value)} />
            <select name="unit" id="unit" onChange={e => setUnit(e.target.value)}>
                <option value="lbs">Pounds (lbs)</option>
                <option value="kgs">Kilograms (kgs)</option>
            </select>
            <input 
                type="text" 
                placeholder="Enter date here" 
                value={date} 
                onChange={e => setDate(e.target.value)} />
            <button onClick={createExercise}>Create</button>
        </div>
    );
}

export default CreatePage;