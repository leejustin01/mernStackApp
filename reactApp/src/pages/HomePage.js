import ExerciseTable from '../components/ExerciseTable';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HomePage({ setExerciseToEdit }) {
    const [exercises, setExercises] = useState([]);

    const navigate = useNavigate();

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        console.log(data);
        setExercises(data);
    }

    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, {method : 'DELETE'});
        if (response.status === 204) {
            const newExercises = exercises.filter(exercise => exercise._id !== _id);
            setExercises(newExercises);
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`);
        }
    };

    const onEdit = exercise => {
        setExerciseToEdit(exercise);
        navigate('/edit');
    };

    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <>
            <h2>List of Exercises</h2>
            <ExerciseTable exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseTable>
            <Link to="/create" id="createLink">Create Exercise</Link>
        </>
    );
}

export default HomePage;